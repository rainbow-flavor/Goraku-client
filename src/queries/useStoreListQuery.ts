import { useInfiniteQuery } from "@tanstack/react-query";

import { fetchSearchList } from "@/api/store";
import { useFilterAtom } from "@/atoms/filter-atom";
import { useGeolocationAtom } from "@/atoms/geolocation-atom";
import { useSearchAtom } from "@/atoms/search-atom";
import { QueryKey } from "@/constants/queries";
import useDebounce from "@/hooks/useDebounce";
import { Si } from "@/types/filter";

const useStoreListQuery = () => {
  const {
    state: { searchWord },
  } = useSearchAtom();
  const {
    geolocationState: { lat, lng },
  } = useGeolocationAtom();

  const {
    filterState: {
      city: { gu, si },
      card,
      open,
    },
  } = useFilterAtom();

  const debouncedSearchWord = useDebounce(searchWord, 300);
  const isCheckedCard = () => {
    const checkedItems = card.filter((item) => item.checked);
    if (checkedItems.length === 5 || checkedItems.length === 0) {
      return {
        cardK: undefined,
        cardN: undefined,
        cardS: undefined,
        cardT: undefined,
        cardA: undefined,
      };
    }

    return {
      cardK: card[0].checked,
      cardN: card[1].checked,
      cardS: card[2].checked,
      cardT: card[3].checked,
      cardA: card[4].checked,
    };
  };

  const convertSi = (si: Si) => {
    switch (si) {
      case "seoul":
        return "서울";
      case "gyeonggi":
        return "경기남부";
      case "all":
      default:
        return undefined;
    }
  };

  const convertGu = (gu: string) => {
    return gu === "전체" || gu === "" ? undefined : gu;
  };

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    [
      QueryKey.FETCH_STORE_LIST,
      gu,
      si,
      isCheckedCard(),
      open,
      debouncedSearchWord,
      lat,
      lng,
    ],
    ({ pageParam: page = 0 }) =>
      fetchSearchList({
        city1: convertSi(si),
        city2: convertGu(gu),
        ...isCheckedCard(),
        machineName: debouncedSearchWord,
        isOp: open,
        page,
        lat,
        lng,
        limit: 60,
      }),
    {
      getNextPageParam: (lastPage) => {
        const { totalPages, currentPage } = lastPage;
        return currentPage === totalPages - 1 ? false : currentPage + 1;
      },
    }
  );

  return {
    data,
    fetchNextPage,
    hasNextPage,
  };
};

export default useStoreListQuery;
