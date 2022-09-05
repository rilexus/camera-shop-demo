import React, { useLayoutEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { colors } from "../../theme/theme";
import { useStyle } from "../../../hooks";

const buttonCss = css`
  cursor: pointer;
  border: 2px solid black;
  background: transparent;

  font-size: 1rem;

  &:hover {
    background: ${colors("gray.1")};
  }
  &:active {
    border: 2px solid blue;
    color: blue;
  }
`;
const SmallButton = styled.button`
  ${buttonCss};
  padding: 0.4em;
`;

const BigButton = styled.button`
  ${buttonCss};
  padding: 1.05em 1.3em;
`;

const SquareButton = ({ children, size = "big", ...props }) => {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const elem = ref.current;
    if (elem) {
      const rect = elem.getBoundingClientRect();
      setWidth(rect.height);
    }
  }, []);

  const propsStyle = props.style;

  const style = useStyle(
    {
      ...propsStyle,
      width: `${width}px`,
    },
    [width, propsStyle]
  );

  return size === "big" ? (
    <BigButton ref={ref} {...props} style={style}>
      <span
        style={{
          pointerEvents: "none",
        }}
      >
        {children}
      </span>
    </BigButton>
  ) : (
    <SmallButton ref={ref} {...props} style={style}>
      <span
        style={{
          pointerEvents: "none",
        }}
      >
        {children}
      </span>
    </SmallButton>
  );
};

export default SquareButton;
