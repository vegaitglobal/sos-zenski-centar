import styled, { css } from 'styled-components';
import { hideVisually } from 'polished';
import { color, theme } from '../../../styles/config/theme';
import { customScrollBar } from '../../../styles/helpers/customScrollbar';
import { Accordion } from '../../molecules/Accordion/Accordion';
import { StyledContent } from '../../molecules/Accordion/Accordion.styles';

export const StyledClientInfo = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  width: 100%;
  background-color: ${color.white};
  box-shadow: ${theme.boxShadow.default};
`;

export const StyledSidebar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 60px;
  padding: 6px 0;
  background-color: ${color.pinkLight};
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
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

export const StyledSidebarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 40px;
  width: 40px;
  margin: 6px 0;
  border-radius: 50%;
  background-color: ${color.white};
  box-shadow: ${theme.boxShadow.default};
  transition: 200ms ease;

  & img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }

  & span {
    ${hideVisually()};
  }

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
