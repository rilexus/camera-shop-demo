import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { Flex, SquareButton } from "../../../../ui";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 2px solid black;
  font-size: 1rem;
  text-align: center;
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

const Counter = ({ onChange, value, min = 0, step = 1 }) => {
  const dec = useCallback(() => {
    const newValue = value - step < min ? value : value - step;
    onChange?.({ target: { value: newValue } });
  }, [onChange, value, step, min]);

  const inc = useCallback(() => {
    onChange?.({ target: { value: value + step } });
  }, [onChange, step, value]);

  return (
    <Flex justify={"center"} align={"center"}>
      <SquareButton
        style={{
          borderRight: "none",
        }}
        onClick={dec}
      >
        -
      </SquareButton>
      <StyledInput
        type="number"
        step={1}
        min={min}
        value={value}
        onChange={onChange}
      />
      <SquareButton
        style={{
          borderLeft: "none",
        }}
        onClick={inc}
      >
        +
      </SquareButton>
    </Flex>
  );
};

export default Counter;
