import { clsx } from "clsx";
import { FaCheckCircle } from "react-icons/fa";

import styles from "./Checkbox.module.css";

interface CheckboxProps {
  checked?: boolean;
  onClick?: () => void;
  text?: string;
}

const Checkbox = ({ checked, onClick, text }: CheckboxProps) => {
  return (
    <div
      className={clsx(styles.checkbox, checked ? styles.active : "")}
      onClick={onClick}
    >
      <FaCheckCircle />
      {text}
    </div>
  );
};

export default Checkbox;
