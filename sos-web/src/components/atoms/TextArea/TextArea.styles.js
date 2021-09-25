import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledTextArea = styled.textarea`
  box-shadow: 0px 1px 10px ${({ theme }) => rgba(theme.color.black, 0.3)};
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
