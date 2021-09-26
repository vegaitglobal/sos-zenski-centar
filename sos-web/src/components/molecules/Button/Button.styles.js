import styled from 'styled-components';
import { color } from '../../../styles/config/theme';
import { typeStyle } from '../../../styles/config/typeStyles';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px;
  min-width: 145px;
  max-width: 100%;
  ${typeStyle.medium};
  color: ${color.greyLightest};
  background-color: ${color.purple};
  border-radius: 8px;
  transition: opacity 0.2ms ease-in-out;

  &:disabled {
    opacity: 0.5;
  }
`;
