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
    geolocationState: { latitude, longitude },
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
      cardK: card[0].checked || undefined,
      cardN: card[1].checked || undefined,
      cardS: card[2].checked || undefined,
      cardT: card[3].checked || undefined,
      cardA: card[4].checked || undefined,
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
      latitude,
      longitude,
    ],
    ({ pageParam: page = 1 }) =>
      fetchSearchList({
        city1: convertSi(si),
        city2: convertGu(gu),
        ...isCheckedCard(),
        integrationSearch: debouncedSearchWord,
        page,
        latitude,
        longitude,
        limit: 60,
      }),
    {
      getNextPageParam: (lastPage) => {
        const { totalPages, currentPage } = lastPage;
        if (totalPages === 0) return undefined;

        return currentPage === totalPages - 1 ? undefined : currentPage + 1;
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
