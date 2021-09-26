import styled, { css } from 'styled-components';
import { color, theme } from '../../../styles/config/theme';
import { customScrollBar } from '../../../styles/helpers/customScrollbar';
import { Accordion } from '../../molecules/Accordion/Accordion';
import { StyledContent } from '../../molecules/Accordion/Accordion.styles';

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

export const StyledAccordion = styled(Accordion)`
  flex-grow: 1;

  ${StyledContent} {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow-y: auto;
    height: 0 !important;
    ${customScrollBar()};

    ${({ $noPadding }) =>
      $noPadding &&
      css`
        padding: 0 !important;
      `}
  }
`;
