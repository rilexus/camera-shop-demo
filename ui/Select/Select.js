import styled from "styled-components";
import { ButtonStyleless } from "../buttons";
import ArrowDropdownDown from "../ArrowDropdownDown/ArrowDropdownDown";

const ArrowButton = ({ onClick, ...props }) => (
  <ButtonStyleless
    onClick={onClick}
    style={{
      ...props.style,
      display: "flex",
      alignItems: "center",
    }}
  >
    <ArrowDropdownDown height={"1.3em"} width={"1.3em"} />
  </ButtonStyleless>
);

const StyledSelect = styled.select`
  // A reset of styles, including removing the default dropdown arrow
  appearance: none;
  // Additional resets for further consistency
  background-color: transparent;
  //border: none;
  //padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
  line-height: inherit;
  outline: none;

  border: 1px solid black;
  padding: 0.7em;

  position: relative;
`;

const Select = ({ children, ...props }) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <StyledSelect {...props}>{children}</StyledSelect>
      <ArrowButton
        style={{
          pointerEvents: "none",
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
    </div>
  );
};

export default Select;
