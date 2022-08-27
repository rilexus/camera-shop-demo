import { useEffect, useRef, useState } from "react";

const useMouseOver = () => {
  const [state, setState] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const elem = ref.current;

    const enter = () => {
      setState(true);
    };
    const leave = () => {
      setState(false);
    };

    if (elem) {
      elem.addEventListener("mouseenter", enter);
      elem.addEventListener("mouseleave", leave);
    }
    return () => {
      if (elem) {
        elem.removeEventListener("mouseenter", enter);
        elem.removeEventListener("mouseleave", leave);
      }
    };
  }, []);

  return [state, ref];
};

export default useMouseOver;
