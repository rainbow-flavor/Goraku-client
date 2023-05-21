import { clsx } from "clsx";
import { FaRedo } from "react-icons/fa";

import styles from "./SubmitFilterButton.module.css";

interface SubmitFilterButtonProps {
  name?: string;
  reset?: boolean;
  onReset?: () => void;
  onSubmit?: () => void;
}

const SubmitFilterButton = ({
  name,
  reset,
  onReset,
  onSubmit,
}: SubmitFilterButtonProps) => {
  return (
    <div className={styles.container}>
      <div
        className={clsx(styles.resetButton, !reset ? styles.disabled : "")}
        onClick={reset ? onReset : () => {}}
      >
        <FaRedo size={14} color="#fff" /> {name} 초기화
      </div>

      <button className={styles.submitButton} onClick={onSubmit}>
        필터 적용
      </button>
    </div>
  );
};

export default SubmitFilterButton;
