import React, { Children } from "react";
import { uuid } from "../utils";

const YStack = ({ children, value = "1em" }) => {
  const childrenArray = Children.toArray(children);

  return childrenArray.map((child, idx) => {
    return (
      <div
        key={uuid()}
        style={{
          marginTop: idx === childrenArray.length - 1 ? "0" : value,
          marginBottom: idx === 0 ? "0" : value,
        }}
      >
        {child}
      </div>
    );
  });
};

export default YStack;
