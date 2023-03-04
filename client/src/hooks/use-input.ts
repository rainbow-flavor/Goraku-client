import { ChangeEvent, useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, updateValue: setValue, onChange };
};

export default useInput;
