import React from "react";
import styled from "styled-components";

const W = styled.div`
  width: 100vw;
  height: 100vh;
`;
const FullScreen = ({ children }) => {
  return <W>{children}</W>;
};

export default FullScreen;
