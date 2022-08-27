import React from "react";
import { useStyle } from "../../hooks";

const Display = ({ children, on }) => {
  const s = useStyle(
    {
      display: on ? "inherit" : "none",
    },
    [on]
  );
  return <div style={s}>{children}</div>;
};

export default Display;
