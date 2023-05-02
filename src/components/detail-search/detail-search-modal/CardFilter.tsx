import { useState } from "react";

import styles from "./CardFilter.module.css";

import Checkbox from "@/components/common/checkbox/Checkbox";
import SubmitFilterButton from "@/components/detail-search/detail-search-modal/SubmitFilterButton";

const CardFilter = () => {
  const [cards, setCards] = useState([
    {
      name: "k",
      checked: false,
    },
    {
      name: "n",
      checked: false,
    },
    {
      name: "s",
      checked: false,
    },
    {
      name: "t",
      checked: false,
    },
    {
      name: "a",
      checked: false,
    },
  ]);

  const selectCard = (name: string) => {
    setCards((prev) =>
      prev.map((card) => ({
        ...card,
        checked: card.name === name ? !card.checked : card.checked,
      }))
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.filterField}>
        {cards.map((card) => {
          return (
            <Checkbox
              key={card.name}
              text={card.name}
              checked={card.checked}
              onClick={() => selectCard(card.name)}
            />
          );
        })}
      </div>

      <SubmitFilterButton name="카드사" />
    </div>
  );
};

export default CardFilter;
