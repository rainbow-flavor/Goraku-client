import { ChangeEvent, useEffect, useRef } from "react";
import { atom, useRecoilState } from "recoil";

import { SearchAtom } from "@/types/atom";

export const searchState = atom<SearchAtom>({
  key: "search",
  default: {
    searchWord: "",
    list: [],
  },
});

export const useSearchAtom = () => {
  const [searchInfo, setSearchInfo] = useRecoilState(searchState);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchInfo((prev) => ({ ...prev, searchWord: newValue }));
  };

  const onReset = () => setSearchInfo((prev) => ({ ...prev, searchWord: "" }));

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const resetKeyword = () => {
    onReset();
    focusInput();
  };

  useEffect(() => {
    focusInput();
  }, []);

  return {
    state: searchInfo,
    setState: setSearchInfo,
    onChange,
    resetKeyword,
    ref: inputRef,
  };
};
