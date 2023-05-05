import React, { FormEvent, useEffect } from "react";
import { FaArrowLeft, FaTimes } from "react-icons/fa";

import { fetchStoreList } from "@/api/store";
import styles from "@/components/search/SearchForm.module.css";
import useModalState from "@/hooks/use-modal-state";
import useSearchState from "@/hooks/use-search-state";

const SearchForm = () => {
  const { closeModal } = useModalState();
  const {
    state: { searchWord },
    setState,
    onChange,
    ref,
    resetKeyword,
  } = useSearchState();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeModal();
  };

  useEffect(() => {
    const fetchList = async (word: string) => {
      const { data } = await fetchStoreList(word);
      setState((prev) => ({ ...prev, list: data?.data ?? [] }));
    };

    fetchList(searchWord);
  }, [searchWord]);

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.searchBox}>
        <div className={styles.searchIcon} onClick={closeModal}>
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
