import React, { createElement } from "react";
import { useStyle } from "../../hooks";

const JUSTIFY = {
  around: "space-around",
  between: "space-between",
  center: "center",
  left: "left",
  end: "end",
};

const ALIGN = {
  start: "start",
  center: "center",
};

const Flex = ({
  children,
  style,
  justify = "normal",
  align = ALIGN.start,
  as = "div",
  ...props
}) => {
  const s = useStyle(
    {
      ...style,
      display: "flex",
      justifyContent: justify,
      alignItems: align,
    },
    [style, justify, align]
  );
  return createElement(
    as,
    {
      ...props,
      style: s,
    },
    children
  );
};
export { JUSTIFY, ALIGN };
export default Flex;
