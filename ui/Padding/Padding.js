import React from "react";
import { useStyle } from "../../hooks";

const Padding = ({ children, style, padding = "0px" }) => {
  const s = useStyle({ ...style, padding: padding }, [style]);
  return <div style={s}>{children}</div>;
};

export default Padding;
