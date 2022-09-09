import { useCallback, useState } from "react";

const useToggle = (init) => {
  const [state, setStae] = useState(init);

  const toggle = useCallback(() => {
    setStae(!state);
  }, [state]);

  return [state, toggle];
};

export default useToggle;
