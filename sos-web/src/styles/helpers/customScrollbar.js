import { rgba } from 'polished';
import { css } from 'styled-components';
import { theme } from '../config/theme';

export const customScrollBar = (
  color = theme.color.purple,
  isHorizontal,
) => css`
  &::-webkit-scrollbar {
    width: ${isHorizontal ? '100%' : '8px'};
    height: ${isHorizontal ? '8px' : '100%'};
  }

  &::-webkit-scrollbar-track {
    box-shadow: ${({ theme }) =>
      `inset 0 0 6px ${rgba(theme.color.pink, 0.5)}`};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${color};
  }
`;
