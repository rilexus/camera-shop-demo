import React from "react";

const SearchOutlined = ({
  stroke = "currentColor",
  strokeWidth = "2",
  height = "1em",
  width = "1em",
}) => {
  return (
    <svg
      stroke={stroke}
      strokeWidth={strokeWidth}
      height={height}
      width={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
};

export default SearchOutlined;
