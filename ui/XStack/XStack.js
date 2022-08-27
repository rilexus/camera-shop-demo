import React, { Children } from "react";
import { uuid } from "../utils";

const XStack = ({ children, value = ".5em" }) => {
  const childrenArray = Children.toArray(children);

  return childrenArray.map((child, idx) => {
    return (
      <div
        key={uuid()}
        style={{
          marginRight: idx === childrenArray.length - 1 ? "0" : value,
          marginLeft: idx === 0 ? "0" : value,
        }}
      >
        {child}
      </div>
    );
  });
};

export default XStack;
