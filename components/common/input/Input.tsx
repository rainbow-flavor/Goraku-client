import { clsx } from "clsx";
import { forwardRef } from "react";

import styles from "./Input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  styleType?: "search" | "normal";
  value?: string;
  disabled?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { styleType, ...restProps } = props;
  const variant = {
    search: styles.search,
    normal: styles.normal,
  };

  return (
    <input
      className={clsx(styles.container, styleType && variant[styleType])}
      ref={ref}
      {...restProps}
    />
  );
});
Input.displayName = "Input";

export default Input;
