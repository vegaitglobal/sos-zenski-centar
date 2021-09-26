import styled, { css } from 'styled-components';
import { customScrollBar } from '../../../styles/helpers/customScrollbar';
import { Accordion } from '../../molecules/Accordion/Accordion';
import { StyledContent } from '../../molecules/Accordion/Accordion.styles';
import { Question } from '../../molecules/Question/Question';

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
