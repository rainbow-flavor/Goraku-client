import { clsx } from "clsx";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

import styles from "./CardFilter.module.css";

import SubmitFilterButton from "@/components/detail-search/detail-search-form/SubmitFilterButton";

const CardFilter = () => {
  const [cards, setCards] = useState([
    {
      name: "k",
      select: false,
    },
    {
      name: "n",
      select: false,
    },
    {
      name: "s",
      select: false,
    },
    {
      name: "t",
      select: false,
    },
    {
      name: "a",
      select: false,
    },
  ]);

  const selectCard = (name: string) => {
    setCards((prev) =>
      prev.map((card) => ({
        ...card,
        select: card.name === name ? !card.select : card.select,
      }))
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.filterField}>
        {cards.map((card) => {
          return (
            <div
              key={card.name}
              className={clsx(
                styles.selectItem,
                card.select ? styles.active : ""
              )}
              onClick={() => selectCard(card.name)}
            >
              <FaCheckCircle />
              {card.name}
            </div>
          );
        })}
      </div>
      <SubmitFilterButton name="카드사" />
    </div>
  );
};

export default CardFilter;
