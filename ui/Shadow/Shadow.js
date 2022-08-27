import React from "react";
import styled from "styled-components";

const Styled = styled.div`
  box-shadow: ${({ shadow }) => shadow};
`;

const SHADOW = {
  lg: "0 10px 15px -3px rgb(0 0 0/0.1), 0 4px 6px -4px rgb(0 0 0/0.1)",
};

const Shadow = ({ children, shadow = SHADOW.lg, ...props }) => {
  return (
    <Styled shadow={shadow} {...props}>
      {children}
    </Styled>
  );
};

export default Shadow;
