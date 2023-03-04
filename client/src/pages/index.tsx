import { clsx } from "clsx";
import { FocusEvent, useRef, useState } from "react";

import useInput from "@/hooks/use-input";
import { searchList } from "@/mock/home";
import styles from "@/styles/Home.module.css";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const inputFieldRef = useRef<HTMLDivElement>(null);
  const { updateValue, ...inputProps } = useInput();

  const closeSearchField = () => setIsOpen(false);

  const onBlur = (e: FocusEvent) => {
    const isInternalElement =
      inputFieldRef.current && inputFieldRef.current.contains(e.relatedTarget);
    if (isInternalElement) return;

    closeSearchField();
  };

  const onSelectItem = (arg: string) => {
    updateValue(arg);
    closeSearchField();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Goraku</h1>

      <div
        className={styles.searchInputBox}
        tabIndex={-1}
        ref={inputFieldRef}
        onBlur={onBlur}
      >
        <input
          onFocus={() => setIsOpen(true)}
          className={clsx(
            styles.searchInput,
            isOpen && styles.searchInputActive
          )}
          type="text"
          {...inputProps}
        />

        {isOpen && (
          <ul className={styles.searchList}>
            {searchList.map((tag, index) => {
              return (
                <li
                  key={index}
                  className={styles.searchItem}
                  onClick={() => onSelectItem(tag)}
                >
                  {tag}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HomePage;
