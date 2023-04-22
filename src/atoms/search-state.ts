import { atom } from "recoil";

export const searchState = atom({
  key: "search-state",
  default: {
    searchWord: "",
  },
});
