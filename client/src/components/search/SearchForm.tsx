import React, { useEffect, useRef } from "react";
import styles from "@/components/search/SearchForm.module.css";
import { FaArrowLeft, FaTimes } from "react-icons/fa";
import { useRouter } from "next/router";
import useInput from "@/hooks/use-input";

const SearchForm = () => {
  const { back } = useRouter();
  const { value, onChange, onReset } = useInput();
  const inputRef = useRef<HTMLInputElement>(null);

  const setElementFocus = () => {
    inputRef.current?.focus();
  };

  const resetKeyword = () => {
    onReset();
    setElementFocus();
  };

  useEffect(() => {
    setElementFocus();
  }, []);

  return (
    <form className={styles.form}>
      <div className={styles.searchBox}>
        <div className={styles.searchIcon} onClick={back}>
          <FaArrowLeft size={20} color="#7FADF3" title="" />
        </div>

        <input
          className={styles.searchInput}
          onChange={onChange}
          value={value}
          ref={inputRef}
        />

        <div className={styles.closeIcon} onClick={resetKeyword}>
          <FaTimes size={20} color="#FFF" title="" />
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
