import React, { useCallback } from "react";

import styled from "styled-components";
import Flex from "../Flex/Flex";
import { SquareButton } from "../buttons";

const StyledInput = styled.input`
  border: 2px solid black;
  text-align: center;
  font-size: 1rem;
  padding: 1.05em;
  width: 3rem;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const SmallCounter = ({
  onChange,
  value,
  decrement,
  increment,
  min = 0,
  step = 1,
}) => {
  return (
    <Flex justify={"center"} align={"center"}>
      <SquareButton
        size={"small"}
        style={{
          borderRight: "none",
        }}
        onClick={decrement}
      >
        -
      </SquareButton>
      <StyledInput
        type="number"
        step={step}
        style={{
          fontSize: ".8rem",
          padding: ".65em 1em",
          width: "1rem",
        }}
        min={min}
        value={value}
        onChange={onChange}
      />
      <SquareButton
        size={"small"}
        style={{
          borderLeft: "none",
        }}
        onClick={increment}
      >
        +
      </SquareButton>
    </Flex>
  );
};

const BigCounter = ({
  onChange,
  decrement,
  increment,
  value,
  min = 0,
  step = 1,
}) => {
  return (
    <Flex justify={"center"} align={"center"}>
      <SquareButton
        style={{
          borderRight: "none",
        }}
        onClick={decrement}
      >
        -
      </SquareButton>
      <StyledInput
        type="number"
        step={step}
        min={min}
        value={value}
        onChange={onChange}
      />
      <SquareButton
        style={{
          borderLeft: "none",
        }}
        onClick={increment}
      >
        +
      </SquareButton>
    </Flex>
  );
};

const Counter = ({
  onDecrement,
  onIncrement,
  onChange,
  value,
  min = 0,
  step = 1,
  size = "big",
}) => {
  const dec = useCallback(() => {
    const newValue = value - step < min ? value : value - step;
    onDecrement?.();
    onChange?.({ target: { value: newValue } });
  }, [onChange, value, step, min]);

  const inc = useCallback(() => {
    onIncrement?.();
    onChange?.({ target: { value: value + step } });
  }, [onChange, step, value]);

  return size === "big" ? (
    <BigCounter
      min={min}
      value={value}
      onChange={onChange}
      step={step}
      decrement={dec}
      increment={inc}
    />
  ) : (
    <SmallCounter
      min={min}
      value={value}
      onChange={onChange}
      step={step}
      decrement={dec}
      increment={inc}
    />
  );
};

export default Counter;
