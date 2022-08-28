import { useCallback, useState } from "react";

const useInput = ({ initialValue, ...rest }) => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((e) => {
    const { value } = e.target;
    setValue(value);
  }, []);

  return { value, onChange, ...rest };
};

export default useInput;
