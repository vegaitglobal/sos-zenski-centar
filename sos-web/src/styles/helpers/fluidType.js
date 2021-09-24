import { css } from 'styled-components';

export const fluidType = (
  minFontSize,
  maxFontSize,
  minViewport = 1024,
  maxViewport = 1920,
) => css`
  font-size: ${minFontSize / 10}rem;

  @media screen and (min-width: ${minViewport}px) {
    font-size: calc(
      ${minFontSize / 10}rem + ${maxFontSize - minFontSize} *
        (100vw - ${minViewport / 10}rem) / ${maxViewport - minViewport}
    );
  }

  @media screen and (min-width: ${maxViewport}px) {
    font-size: ${maxFontSize / 10}rem;
  }
`;
