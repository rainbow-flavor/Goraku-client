import { useEffect } from "react";

import styles from "./CardFilter.module.css";

import { useFilterAtom } from "@/atoms/filter-atom";
import Checkbox from "@/components/common/checkbox/Checkbox";
import { cardMap } from "@/constants/store";
import { Card } from "@/types/store";

const CardFilter = () => {
  const {
    filterState: { card: realCard },
    localFilterState: { card: cards },
    setLocalFilterState,
  } = useFilterAtom();

  const selectCard = (name: Card) => {
    setLocalFilterState((prev) => ({
      ...prev,
      card: prev.card.map((card) => ({
        ...card,
        checked: card.name === name ? !card.checked : card.checked,
      })),
    }));
  };

  useEffect(() => {
    setLocalFilterState((prev) => ({ ...prev, card: realCard }));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.filterField}>
        {cards.map((card) => {
          return (
            <Checkbox
              key={card.name}
              text={
                <div className={styles.textBox}>{cardMap[card.name].name}</div>
              }
              checked={card.checked}
              onClick={() => selectCard(card.name)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardFilter;
