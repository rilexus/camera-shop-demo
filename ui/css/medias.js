import { css } from "styled-components";

const BREAK_POINT = {
  xsm: 575,
  sm: 576,
  md: 768,
  l: 992,
  xl: 1200,
  xxl: 1400,
};

const xsm = (...args) => {
  return css`
    @media (max-width: ${BREAK_POINT.xsm}px) {
      ${args};
    }
  `;
};

const sm = (...args) => {
  return css`
    @media (min-width: ${BREAK_POINT.sm}px) {
      ${args};
    }
  `;
};

const md = (...args) => {
  return css`
    @media (min-width: ${BREAK_POINT.md}px) {
      ${args};
    }
  `;
};

const l = (...args) => {
  return css`
    @media (min-width: ${BREAK_POINT.l}px) {
      ${args};
    }
  `;
};

const xl = (...args) => {
  return css`
    @media (min-width: ${BREAK_POINT.xl}px) {
      ${args};
    }
  `;
};

const xxl = (...args) => {
  return css`
    @media (min-width: ${BREAK_POINT.xxl}px) {
      ${args};
    }
  `;
};

export { sm, xsm, xxl, md, l, xl, BREAK_POINT };
