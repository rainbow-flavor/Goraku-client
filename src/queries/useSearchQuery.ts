import { useQuery } from "@tanstack/react-query";

import { fetchStoreList } from "@/api/store";
import { useSearchAtom } from "@/atoms/search-Atom";
import { QueryKey } from "@/constants/queries";
import useDebounce from "@/hooks/useDebounce";

const useSearchQuery = () => {
  const {
    state: { searchWord },
    setState,
  } = useSearchAtom();
  const debouncedValue = useDebounce(searchWord, 1000);

  return useQuery(
    [QueryKey.FETCH_STORE_LIST_BY_MACHINE, debouncedValue],
    () => fetchStoreList(debouncedValue),
    {
      enabled: !!debouncedValue,
      onSuccess: (data) => {
        setState((prev) => ({ ...prev, list: data?.data ?? [] }));
      },
    }
  );
};

export default useSearchQuery;
