import clsx from "clsx";
import { useState } from "react";

import styles from "@/styles/Home.module.css";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Goraku</h1>

      <div
        className={styles.searchInputBox}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      >
        <input
          className={clsx(
            styles.searchInput,
            isOpen && styles.searchInputActive
          )}
          type="text"
        />
        {isOpen && (
          <ul className={styles.searchList}>
            <li>111</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default HomePage;
