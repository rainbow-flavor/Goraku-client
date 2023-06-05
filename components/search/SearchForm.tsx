import { useRouter } from "next/router";
import React, { FormEvent, useEffect } from "react";
import { FaArrowLeft, FaTimes } from "react-icons/fa";

import { useSearchAtom } from "@/atoms/search-atom";
import styles from "@/components/search/SearchForm.module.css";
import { RouteMap } from "@/constants/route";

const SearchForm = () => {
  const { push, back } = useRouter();

  const {
    state: { searchWord },
    onChange,
    ref,
    resetKeyword,
  } = useSearchAtom();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    push(RouteMap.DETAIL_SEARCH);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.searchBox}>
        <div className={styles.searchIcon} onClick={back}>
          <FaArrowLeft size={20} color="#7FADF3" title="상세" />
        </div>

        <input
          className={styles.searchInput}
          onChange={onChange}
          value={searchWord}
          ref={ref}
        />

        {searchWord && (
          <div className={styles.closeIcon} onClick={resetKeyword}>
            <FaTimes size={20} color="#FFF" title="" />
          </div>
        )}
      </div>
    </form>
  );
};

export default SearchForm;
