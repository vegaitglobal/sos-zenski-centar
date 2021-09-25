import styled, { css } from 'styled-components';
import { customScrollBar } from '../../../styles/helpers/customScrollbar';
import { Accordion } from '../../molecules/Accordion/Accordion';
import { StyledContent } from '../../molecules/Accordion/Accordion.styles';
import { Question } from '../../molecules/Question/Question';
import { Shell } from '../Shell/Shell';

export const StyledFormsLayout = styled.div``;

export const StyledShell = styled(Shell)`
  height: 100%;

  > div {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 8fr 4fr;
  grid-column-gap: 16px;
  height: 100%;
`;

export const StyledColumn = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
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

export const StyledQuestion = styled(Question)`
  display: block;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;
