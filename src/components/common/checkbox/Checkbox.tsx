import { clsx } from "clsx";
import { ReactNode } from "react";
import { FaCheckCircle } from "react-icons/fa";

import styles from "./Checkbox.module.css";

interface CheckboxProps {
  checked?: boolean;
  onClick?: () => void;
  text?: ReactNode;
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
