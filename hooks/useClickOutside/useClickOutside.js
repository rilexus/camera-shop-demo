import { useEffect, useRef } from "react";

const useClickOutside = (callback, deps) => {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const handle = (e) => {
      if (!ref.current.contains(e.target)) {
        callback(e);
      }
    };

    document.addEventListener("click", handle);
    return () => {
      if (typeof window === "undefined") {
        return;
      }
      document.removeEventListener("click", handle);
    };
  }, deps);

  return ref;
};

export default useClickOutside;
