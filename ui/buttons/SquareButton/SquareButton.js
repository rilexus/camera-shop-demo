import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../theme/theme";

const StyledButton = styled.button`
  cursor: pointer;
  font-size: 1rem;
  padding: 1.05em 1.3em;
  border: 2px solid black;
  background: transparent;
  &:hover {
    background: ${colors("gray.1")};
  }
  &:active {
    border: 2px solid blue;
    color: blue;
  }
`;
const SquareButton = ({ children, ...props }) => {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const elem = ref.current;
    if (elem) {
      const rect = elem.getBoundingClientRect();
      setWidth(rect.height);
    }
  }, []);

  return (
    <StyledButton
      ref={ref}
      {...props}
      style={{
        width: `${width}px`,
      }}
    >
      <span
        style={{
          pointerEvents: "none",
        }}
      >
        {children}
      </span>
    </StyledButton>
  );
};

export default SquareButton;
