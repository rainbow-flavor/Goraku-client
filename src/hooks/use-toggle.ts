import { useState } from "react";

const useToggle = (initialValue?: boolean) => {
  const [toggle, setToggle] = useState(initialValue || false);

  const onToggle = () => setToggle((prev) => !prev);

  return {
    toggle,
    onToggle,
    setToggle,
  };
};

export default useToggle;
