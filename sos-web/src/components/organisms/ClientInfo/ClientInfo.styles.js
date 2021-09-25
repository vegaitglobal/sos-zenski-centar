import styled from 'styled-components';
import { color, theme } from '../../../styles/config/theme';
import { customScrollBar } from '../../../styles/helpers/customScrollbar';

export const StyledClientInfo = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: ${color.white};
  box-shadow: ${theme.boxShadow.default};
`;

export const StyledSidebar = styled.div`
  display: flex;
  flex: 0 0 60px;
  background-color: ${color.pinkLight};
`;

export const StyledCardContainer = styled.div`
  display: flex;
  align-self: flex-start;
  width: calc(100% - 60px);
  max-height: 100%;
  flex-wrap: wrap;
  flex: 1 0 auto;
  padding: 30px;
`;
