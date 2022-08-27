import { useEffect, useRef } from "react";

const useInterval = (callback, ms) => {
  const ref = useRef(callback);

  useEffect(() => {
    if (ref.current !== callback) {
      ref.current = callback;
    }
  }, [callback]);

  useEffect(() => {
    const id = setInterval(() => {
      ref.current();
    }, ms);

    return () => {
      clearInterval(id);
    };
  }, [ms]);
};

export default useInterval;
