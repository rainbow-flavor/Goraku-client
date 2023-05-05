import { clsx } from "clsx";
import { FaRedo } from "react-icons/fa";

import styles from "./SubmitFilterButton.module.css";

import { useFilterState } from "@/atoms/filter-atom";
import useModalState from "@/hooks/use-modal-state";
import { FilterAtom } from "@/types/atom";

interface SubmitFilterButtonProps {
  name?: string;
  filterKey: keyof FilterAtom;
}

const SubmitFilterButton = ({ name, filterKey }: SubmitFilterButtonProps) => {
  const {
    localFilterState,
    setLocalFilterState,
    setFilterState,
    initialOpen,
    initialCard,
    initialCity,
    diffCity,
    diffCard,
    diffOpen,
  } = useFilterState();
  const { closeModal } = useModalState();

  const resetMap: Record<keyof FilterAtom, boolean> = {
    city: diffCity(localFilterState.city),
    card: diffCard(localFilterState.card),
    open: diffOpen(localFilterState.open),
  };

  const onReset = (key: SubmitFilterButtonProps["filterKey"]) => {
    setLocalFilterState((prev) => {
      const newState = { ...prev };
      if (key === "open") {
        newState.open = initialOpen;
      }

      if (key === "city") {
        newState.city = initialCity;
      }

      if (key === "card") {
        newState.card = initialCard;
      }

      return newState;
    });
  };

  const submit = () => {
    setFilterState(localFilterState);
    closeModal();
  };

  return (
    <div className={styles.container}>
      <div
        className={clsx(
          styles.resetButton,
          resetMap[filterKey] ? "" : styles.disabled
        )}
        onClick={resetMap[filterKey] ? () => onReset(filterKey) : () => {}}
      >
        <FaRedo size={14} color="#fff" /> {name} 초기화
      </div>

      <button className={styles.submitButton} onClick={submit}>
        필터 적용
      </button>
    </div>
  );
};

export default SubmitFilterButton;
