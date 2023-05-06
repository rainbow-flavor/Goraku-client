import { useQuery } from "@tanstack/react-query";

import { fetchSearchList } from "@/api/store";
import { useFilterAtom } from "@/atoms/filter-atom";
import { useSearchAtom } from "@/atoms/search-Atom";
import { QueryKey } from "@/constants/queries";

const useStoreListQuery = () => {
  const {
    state: { searchWord },
  } = useSearchAtom();
  const {
    filterState: {
      city: { gu, si },
      card,
      open,
    },
  } = useFilterAtom();
  const hasName = (key: string) =>
    !!card.filter((item) => item.name.includes(key))[0];

  const { data } = useQuery(
    [QueryKey.FETCH_STORE_LIST, gu, si, card, open, searchWord],
    () =>
      fetchSearchList({
        city1: gu,
        city2: si === "all" ? undefined : si,
        cardK: hasName("k"),
        cardN: hasName("n"),
        cardS: hasName("s"),
        cardT: hasName("t"),
        cardA: hasName("a"),
        machineName: searchWord,
        limit: 60,
      })
  );

  return {
    data,
  };
};

export default useStoreListQuery;
