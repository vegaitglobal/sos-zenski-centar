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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 16px;
  grid-column-gap: 16px;
  grid-auto-rows: max-content;
  width: calc(100% - 60px);
  max-height: 100%;
  padding: 30px;
  overflow-y: auto;
  ${customScrollBar()};

  @media screen and (min-width: 1366px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1640px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
