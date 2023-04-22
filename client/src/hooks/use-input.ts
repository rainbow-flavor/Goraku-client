import { ChangeEvent, useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onReset = () => setValue("");

  return { value, onReset, onChange };
};

export default useInput;
