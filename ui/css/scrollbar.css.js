import { css } from "styled-components";

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

export default scrollbarCss;
