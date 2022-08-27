import React, { createElement } from "react";

const Text = ({ children, align = "left", as = "div", ...props }) => {
  return createElement(
    as,
    {
      ...props,
      style: {
        textAlign: align,
        ...props.style,
      },
    },
    children
  );
};

export default Text;
