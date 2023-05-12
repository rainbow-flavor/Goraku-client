import { useState } from "react";

import styles from "./StoreMachineList.module.css";

import { Machine } from "@/types/store";

interface StoreMachineListProps {
  list?: Machine[];
}

const tagList = [
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
  const [tags, setTags] = useState(false);

  return (
    <>
      <div className={styles.tagList}>
        {[
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
        ].map((tag) => {
          return <div key={tag}>{tag}</div>;
        })}
      </div>

      <div className={styles.machineList}>
        {list?.map((machine) => {
          return (
            <div key={machine.id} className={styles.machineCard}>
              <span>{machine.machine.category}</span>
              <p>{machine.machine.shortName}</p>
              <div className={styles.machineCount}>
                {machine.machineCount} 대
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default StoreMachineList;
