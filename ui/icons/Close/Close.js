import React from "react";

const CloseIcon = ({
  stroke = "currentColor",
  fill = "currentColor",
  height = "1em",
  width = "1em",
}) => {
  return (
    <svg
      stroke={stroke}
      fill={fill}
      height={height}
      width={width}
      viewBox="0 0 512 512"
      strokeWidth="0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"></path>
    </svg>
  );
};

export default CloseIcon;
