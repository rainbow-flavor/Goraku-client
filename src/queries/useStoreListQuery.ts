import { useInfiniteQuery } from "@tanstack/react-query";

import { fetchSearchList } from "@/api/store";
import { useFilterAtom } from "@/atoms/filter-atom";
import { useGeolocationAtom } from "@/atoms/geolocation-atom";
import { useSearchAtom } from "@/atoms/search-atom";
import { QueryKey } from "@/constants/queries";

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
  const hasName = (key: string) =>
    !!card.filter((item) => item.name.includes(key))[0];

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery(
    [QueryKey.FETCH_STORE_LIST, gu, si, card, open, searchWord, lat, lng],
    ({ pageParam: page = 0 }) =>
      fetchSearchList({
        city1: gu,
        city2: si === "all" ? undefined : si,
        cardK: hasName("k"),
        cardN: hasName("n"),
        cardS: hasName("s"),
        cardT: hasName("t"),
        cardA: hasName("a"),
        machineName: searchWord,
        page,
        lat,
        lng,
        limit: 60,
      }),
    {
      getNextPageParam: (lastPage) => {
        const { totalPages, currentPage } = lastPage;
        return currentPage === totalPages ? false : currentPage + 1;
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
