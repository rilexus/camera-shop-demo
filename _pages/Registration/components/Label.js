import styled from "styled-components";

const StyledLabel = styled.label`
  margin-bottom: 1em;
  font-size: 0.9em;
`;

const Label = (props) => {
  return (
    <StyledLabel
      {...props}
      style={{
        display: "block",
      }}
    />
  );
};

export default Label;
