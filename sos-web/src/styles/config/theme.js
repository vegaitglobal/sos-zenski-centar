import { rgba } from 'polished';

export const color = {
  white: '#fff',
  whiteFaded: rgba('#fff', 0.5),
  black: '#000',
  blackFaded: rgba('#000', 0.5),
  grey: '#676767',
  greyLight: '#ebebeb',
  greyLighter: '#eae7eb',
  greyLighter1: '#cccccc',
  greyLightest: '#fafafa',
  pink: '#d8a4d9',
  pinkLight: '#faf0fc',
  pinkLighter: '#faf0fc',
  pinkLink: '#cf96d8',
  purple: '#57415f',
  purpleLight: '#8c4893',
  purpleLight1: '#E4DAE5',
  orange: '#ffa480',
  orangeLight: '#ffe0d0',
};

export const boxShadow = {
  default: `0 1px 10px ${rgba(color.black, 0.3)}`,
};

/* styled-components theme */
export const theme = {
  color,
  boxShadow,
};
