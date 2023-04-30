import { clsx } from "clsx";
import { forwardRef, HTMLAttributes } from "react";

import styles from "./Input.module.css";

interface InputProps {
  styleType?: "search";
  value?: string;
  disabled?: boolean;
}

const Input = forwardRef<
  HTMLInputElement,
  HTMLAttributes<HTMLInputElement> & InputProps
>((props, ref) => {
  const { styleType, ...restProps } = props;
  const variant = {
    search: styles.search,
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
