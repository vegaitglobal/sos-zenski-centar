import { css } from 'styled-components';
import { fluidType } from '../helpers/fluidType';

export const typeStyle = {
  h1: css`
    ${fluidType(28, 34)};
    line-height: 1.1;
    font-weight: bold;
  `,
  h2: css`
    ${fluidType(22, 26)};
    line-height: 1.2;
  `,
  h3: css`
    ${fluidType(16, 18)};
    line-height: 1.3;
  `,
  h4: css`
    ${fluidType(15, 16)};
    line-height: 1.3;
  `,
  h5: css`
    ${fluidType(12, 14)};
    line-height: 1.4;
  `,
  h6: css`
    ${fluidType(12, 14)};
    line-height: 1.4;
  `,
  large: css`
    font-size: 1.6rem;
    line-height: 1.2;
  `,
  medium: css`
    font-size: 1.4rem;
    line-height: 1.2;
  `,
  small: css`
    font-size: 1.2rem;
    line-height: 1.2;
  `,
};
