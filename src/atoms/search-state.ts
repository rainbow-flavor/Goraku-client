import { atom } from "recoil";

interface SearchState {
  searchWord: string;
  list: string[];
}

export const searchState = atom<SearchState>({
  key: "search-state",
  default: {
    searchWord: "",
    list: [],
  },
});
