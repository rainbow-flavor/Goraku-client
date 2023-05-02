import { ChangeEvent, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";

import { searchState } from "@/atoms/search-Atom";

const useSearchState = () => {
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

export default useSearchState;
