import styled from "styled-components";
import React from "react";

const StyledLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 10px;
  cursor: pointer;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 14px;
    width: 14px;
    background-color: transparent;
    border: 1px solid gray;
    border-radius: 50%;
  }

  input:checked ~ .checkmark {
    background-color: transparent;
    border: 1px solid black;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  &:hover input ~ .checkmark:after {
  }

  & input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    top: 2px;
    left: 2px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: black;
  }
`;

const Radio = ({ checked, id, label, onChange, name }) => {
  return (
    <StyledLabel htmlFor={id}>
      {label}
      <input type="radio" checked={checked} onChange={onChange} name={name} />
      <span className="checkmark" />
    </StyledLabel>
  );
};

export default Radio;
