import { clsx } from "clsx";
import { useState } from "react";

import styles from "./StoreMachineList.module.css";

import { ERROR_TEXT } from "@/constants/message";
import { Category, Machine } from "@/types/store";

interface StoreMachineListProps {
  list?: Machine[];
}

const tagList: (Category | "ALL")[] = [
  "ALL",
  "RHYTHM",
  "FIGHT",
  "RACING",
  "SHOOTING",
  "ACTION",
  "PUZZLE",
  "CASUAL",
  "SPORTS",
  "ETC",
];

const StoreMachineList = ({ list }: StoreMachineListProps) => {
  const [filterTags, setFilterTags] = useState(
    new Array(tagList.length).fill(false).map((item, index) => index === 0)
  );

  const filteredList =
    list?.filter((machine) => {
      if (!filterTags.includes(true)) return false;
      const selectedCategory =
        tagList[filterTags.findIndex((selected) => selected)];

      if (selectedCategory === "ALL") {
        return true;
      } else {
        return (
          machine.machine.category ===
          tagList[filterTags.findIndex((selected) => selected)]
        );
      }
    }) ?? [];

  const colorMap: Record<Category | "ALL", string> = {
    ALL: styles.all,
    RHYTHM: styles.rhythm,
    FIGHT: styles.fight,
    RACING: styles.racing,
    SHOOTING: styles.shooting,
    ACTION: styles.action,
    PUZZLE: styles.puzzle,
    CASUAL: styles.casual,
    SPORTS: styles.sports,
    ETC: styles.etc,
  };

  const selectFilter = (index: number) => {
    setFilterTags((prev) => prev.map((tag, i) => i === index));
  };

  return (
    <>
      <div className={styles.tagList}>
        {tagList.map((tag, index) => {
          return (
            <div
              key={tag}
              className={clsx(
                colorMap[tag],
                filterTags[index] ? styles.selectedTag : ""
              )}
              onClick={() => selectFilter(index)}
            >
              {tag}
            </div>
          );
        })}
      </div>

      <div className={styles.machineList}>
        {filteredList.length > 0 ? (
          filteredList.map((machine) => {
            return (
              <div key={machine.id} className={styles.machineCard}>
                <span className={colorMap[machine.machine.category]}>
                  {machine.machine.category}
                </span>
                <div>{machine.machine.shortName}</div>
                <div className={styles.machineCount}>
                  {machine.machineCount} 대
                </div>
              </div>
            );
          })
        ) : (
          <div className={styles.machineEmptyText}>{ERROR_TEXT.NO_ITEM}</div>
        )}
      </div>
    </>
  );
};

export default StoreMachineList;
