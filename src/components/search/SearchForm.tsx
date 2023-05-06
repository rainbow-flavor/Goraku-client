import React, { FormEvent } from "react";
import { FaArrowLeft, FaTimes } from "react-icons/fa";

import { useModalAtom } from "@/atoms/modal-atom";
import { useSearchAtom } from "@/atoms/search-Atom";
import styles from "@/components/search/SearchForm.module.css";

const SearchForm = () => {
  const { closeModal } = useModalAtom();
  const {
    state: { searchWord },
    onChange,
    ref,
    resetKeyword,
  } = useSearchAtom();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeModal();
  };

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
