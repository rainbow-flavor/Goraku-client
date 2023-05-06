import { useQuery } from "@tanstack/react-query";

import { fetchStoreList } from "@/api/store";
import { useSearchAtom } from "@/atoms/search-Atom";
import { QueryKey } from "@/constants/queries";

const useSearchQuery = () => {
  const {
    state: { searchWord },
    setState,
  } = useSearchAtom();

  return useQuery(
    [QueryKey.FETCH_STORE_LIST_BY_MACHINE, searchWord],
    () => fetchStoreList(searchWord),
    {
      enabled: !!searchWord,
      onSuccess: (data) => {
        setState((prev) => ({ ...prev, list: data?.data ?? [] }));
      },
    }
  );
};

export default useSearchQuery;
