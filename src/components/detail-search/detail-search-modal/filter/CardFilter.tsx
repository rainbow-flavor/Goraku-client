import { useState } from "react";

import styles from "./CardFilter.module.css";

import { useFilterState } from "@/atoms/filter-atom";
import Checkbox from "@/components/common/checkbox/Checkbox";
import SubmitFilterButton from "@/components/detail-search/detail-search-modal/filter/SubmitFilterButton";
import { cardMap } from "@/constants/store";
import { Card } from "@/types/store";

const CardFilter = () => {
  const {
    filterState: { card },
    setFilterState,
    diffCard,
    initialCard,
  } = useFilterState();
  const [cards, setCards] = useState(card);

  const selectCard = (name: Card) => {
    setCards((prev) =>
      prev.map((card) => ({
        ...card,
        checked: card.name === name ? !card.checked : card.checked,
      }))
    );
  };

  const resetCards = () => {
    setCards(initialCard);
    setFilterState((prev) => ({ ...prev, card: initialCard }));
  };

  const saveFilterState = () => {
    setFilterState((prev) => ({ ...prev, card: cards }));
  };

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

      <SubmitFilterButton
        name="카드사"
        reset={diffCard(cards)}
        onReset={resetCards}
        onSubmit={saveFilterState}
      />
    </div>
  );
};

export default CardFilter;
