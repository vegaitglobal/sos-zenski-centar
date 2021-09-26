import styled from 'styled-components';
import { theme } from '../../../styles/config/theme';

export const StyledPanel = styled.div`
  box-shadow: ${theme.boxShadow.default};
  border-radius: 12px;
  overflow: hidden;
`;

export const StyledTop = styled.div`
  text-align: center;
  padding: 10px 0 9px;
  color: ${({ theme }) => theme.color.orangeLight};
  background-color: ${({ theme }) => theme.color.purple};
`;

export const StyledContent = styled.div`
  padding: 30px;
  background-color: ${({ theme }) => theme.color.white};
`;
