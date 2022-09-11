import { Padding } from "../index";
import styled from "styled-components";

const Details = (props) => {
  return <details {...props} />;
};

const StyledSummary = styled.summary`
  margin-bottom: 1em;
  cursor: pointer;
`;

const Detail = ({ summary, children, open = false }) => {
  return (
    <Details open={open}>
      <StyledSummary>{summary}</StyledSummary>
      <Padding padding={"0 0 1em 1em"}>{children}</Padding>
    </Details>
  );
};

export default Detail;
