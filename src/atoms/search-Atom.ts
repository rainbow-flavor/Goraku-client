import { atom } from "recoil";

import { SearchAtom } from "@/types/atom";

export const searchState = atom<SearchAtom>({
  key: "search",
  default: {
    searchWord: "",
    list: [],
  },
});
