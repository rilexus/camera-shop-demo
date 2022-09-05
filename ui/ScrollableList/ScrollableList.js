import styled, { css } from "styled-components";
import { md, sm, xxl } from "../css/medias";
import { Flex } from "../index";
import { ALIGN } from "../Flex";

const scrollbarCss = css`
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  ::-webkit-scrollbar-thumb {
    /* Foreground */
    background: #d5d5d5;
  }

  ::-webkit-scrollbar-track {
    /* Background */
    background: rgba(250, 250, 250, 0);
  }
`;

const MediaWidth = styled.div`
  width: 450px;
  height: 50em;
  overflow-x: scroll;

  ${scrollbarCss};

  ${sm`
    width: 450px;
  `};
  ${md`
    width: 910px;
  `};
  ${xxl`
    width: 1380px;
  `};
`;

const ScrollableList = ({ children, style }) => {
  return (
    <MediaWidth style={style}>
      <Flex
        align={ALIGN.center}
        style={{
          height: "100%",
        }}
      >
        {children}
      </Flex>
    </MediaWidth>
  );
};

export default ScrollableList;
