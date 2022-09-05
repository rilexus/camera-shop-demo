import React from "react";

const Margin = ({ value = "0", children }) => {
  return (
    <div
      style={{
        margin: value,
      }}
    >
      {children}
    </div>
  );
};

export default Margin;
