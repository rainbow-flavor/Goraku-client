import { useState } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => setToggle((prev) => !prev);

  return {
    toggle,
    onToggle,
  };
};

export default useToggle;
