import { useCallback, useState } from "react";

const useToggle = (init) => {
  const [state, setStae] = useState(init);

  const toggle = useCallback(() => {
    setStae((s) => {
      return !s;
    });
  }, []);

  return [state, toggle];
};

export default useToggle;
