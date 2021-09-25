import { rgba } from 'polished';
import styled from 'styled-components';
import { theme } from '../../../styles/config/theme';

export const StyledTextArea = styled.textarea`
  box-shadow: ${theme.boxShadow.default};
  background-color: ${({ theme }) => theme.color.pinkLight};
  color: ${({ theme }) => theme.color.purple};
  padding: 20px 30px;
  border-radius: 12px;
  border: none;
  outline: none;
  width: 100%;
  min-height: 50px;
  resize: vertical;
`;
