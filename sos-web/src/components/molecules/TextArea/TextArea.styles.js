import styled from 'styled-components';
import { theme } from '../../../styles/config/theme';
import { typeStyle } from '../../../styles/config/typeStyles';

export const StyledTextArea = styled.textarea`
  ${typeStyle.medium};
  box-shadow: ${theme.boxShadow.default};
  background-color: ${({ theme }) => theme.color.pinkLight};
  color: ${({ theme }) => theme.color.purple};
  line-height: 1.4;
  padding: 20px;
  border-radius: 12px;
  border: none;
  outline: none;
  width: 100%;
  resize: vertical;
`;
