import { css } from "styled-components";

const elasticFontSize = (
  minFontSizeInPixel,
  maxFontSizeInPixel,
  minWindowWidth,
  maxWindowWidth
) => {
  // TODO: give a better name to this function
  return css`
    font-size: calc(
      ${minFontSizeInPixel} *
        (
          1px -
            clamp(
              0px,
              (100vw - ${minWindowWidth}px) /
                (${maxWindowWidth} - ${minWindowWidth}),
              1px
            )
        ) + ${maxFontSizeInPixel} *
        clamp(
          0px,
          (100vw - ${minWindowWidth}px) /
            (${maxWindowWidth} - ${minWindowWidth}),
          1px
        )
    );
  `;
};

export default elasticFontSize;
