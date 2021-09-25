import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledPanel = styled.div`
  box-shadow: 0px 1px 10px ${({ theme }) => rgba(theme.color.black, 0.3)};
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
