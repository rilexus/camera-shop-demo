import styled from "styled-components";
import React from "react";

const StyledLabel = styled.label`
  position: relative;
  padding-left: 18px;
  padding-top: 1px;
  margin-bottom: 12px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: block;

  /* Hide the browser's default checkbox */
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ .checkmark {
      border: 1px solid red;
    }
    &:checked ~ .checkmark:after {
      display: block;
    }
  }

  &:hover {
    color: red;
  }

  &:hover .checkmark {
    border: 1px solid red;
  }

  .checkmark:after {
    left: 5px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid red;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const StyledCheckmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  background-color: transparent;

  border: 1px solid black;
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

const Checkbox = ({ id, name, label, checked, onChange }) => {
  return (
    <StyledLabel htmlFor={id}>
      <span
        style={{
          marginLeft: ".3em",
        }}
      >
        {label}
      </span>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <StyledCheckmark className={"checkmark"} />
    </StyledLabel>
  );
};

export default Checkbox;
