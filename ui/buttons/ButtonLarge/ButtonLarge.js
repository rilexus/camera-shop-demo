import React from "react";
import styled, { css } from "styled-components";
import { colors } from "../../theme/theme";

const defaultButtonCss = css`
  cursor: pointer;
`;

const Button = styled.button`
  ${defaultButtonCss};
  background: transparent;
  padding: 1.1em 3em 1em 3em;
  font-size: 1rem;
  border: 2px solid black;
  white-space: nowrap;
  &:hover {
    background: ${colors("gray.1")};
  }
  &:active {
    border: 2px solid blue;
    color: blue;
  }
  &:disabled {
    cursor: not-allowed;
    border-color: ${colors("gray.3")};
  }
`;

const ButtonLarge = (props) => {
  return <Button {...props} />;
};

export default ButtonLarge;
