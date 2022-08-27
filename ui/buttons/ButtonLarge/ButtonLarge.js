import React from "react";
import styled, { css } from "styled-components";

const defaultButtonCss = css`
  cursor: pointer;
`;

const Button = styled.button`
  ${defaultButtonCss};
  background: transparent;
  padding: 1.1em 3em 1em 3em;
  font-size: 1rem;
  border: 2px solid black;
`;

const ButtonLarge = (props) => {
  return <Button {...props} />;
};

export default ButtonLarge;
