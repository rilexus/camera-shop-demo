import React from "react";
import styled from "styled-components";

const BackgroundImage = styled.div`
  position: relative;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("${({ url }) => url}");
`;

const C = styled.div`
  inset: 0;
  position: absolute;
`;
const Tint = styled.div`
  inset: 0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.2);
`;
const CoverImage = ({ url, children }) => {
  return (
    <BackgroundImage url={url}>
      <Tint />
      <C>{children}</C>
    </BackgroundImage>
  );
};
export { BackgroundImage };
export default CoverImage;
