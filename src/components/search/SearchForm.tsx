import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent, useEffect, useRef } from "react";
import { FaArrowLeft, FaTimes } from "react-icons/fa";
import { useRecoilState } from "recoil";

import { fetchStoreList } from "@/api/store";
import { searchState } from "@/atoms/search-state";
import styles from "@/components/search/SearchForm.module.css";

const SearchForm = () => {
  const { back, push } = useRouter();
  const [searchInfo, setSearchInfo] = useRecoilState(searchState);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchInfo((prev) => ({ ...prev, searchWord: newValue }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    push(`/detail-search?keyword=${searchInfo.searchWord}`);
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

  useEffect(() => {
    const fetchList = async (word: string) => {
      const { data } = await fetchStoreList(word);
      setSearchInfo((prev) => ({ ...prev, list: data?.data ?? [] }));
    };

    fetchList(searchInfo.searchWord);
  }, [searchInfo.searchWord]);

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.searchBox}>
        <div className={styles.searchIcon} onClick={back}>
          <FaArrowLeft size={20} color="#7FADF3" title="상세" />
        </div>

        <input
          className={styles.searchInput}
          onChange={onChange}
          value={searchInfo.searchWord}
          ref={inputRef}
        />

        {searchInfo.searchWord && (
          <div className={styles.closeIcon} onClick={resetKeyword}>
            <FaTimes size={20} color="#FFF" title="" />
          </div>
        )}
      </div>
    </form>
  );
};

export default SearchForm;
