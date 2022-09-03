import styled from "styled-components";
import { Flex } from "../index";
import React from "react";

const StyledBadge = styled(Flex)`
  background-color: red;
  font-size: 0.6rem;
  border-radius: 1rem;
  color: white;
  border: 1px solid white;
  height: 17px;
  width: 17px;
  justify-items: center;
  box-shadow: 0px 2px 3px 0px #5e5e5e;
  pointer-events: none;
`;

const Badge = ({ children }) => {
  return (
    <StyledBadge justify={"center"} align={"center"}>
      {children}
    </StyledBadge>
  );
};

export default Badge;
