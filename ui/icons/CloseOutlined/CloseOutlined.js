import React from "react";

const CloseOutlined = ({
  stroke = "black",
  fill = "black",
  strokeWidth = "2",
  height = "1em",
  width = "1em",
}) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      height={height}
      width={width}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        d="M3,3 L21,21 M3,21 L21,3"
      />
    </svg>
  );
};

export default CloseOutlined;
