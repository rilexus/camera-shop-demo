import React from "react";

const PersonOutlined = ({
  strokeWidth = "32",
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
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
      />
      <path
        fill="none"
        strokeMiterlimit="10"
        strokeWidth={strokeWidth}
        d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
      ></path>
    </svg>
  );
};

export default PersonOutlined;
