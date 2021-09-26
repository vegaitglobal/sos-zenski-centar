import styled, { css } from 'styled-components';
import { customScrollBar } from '../../../styles/helpers/customScrollbar';
import { Heading } from '../../atoms/Heading/Heading';
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
  grid-template-columns: 9fr 3fr;
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

export const StyledNoResults = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.color.purple};
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  max-height: 33vh;
  padding: 30px;
  margin: -30px;
  width: calc(100% + 60px);
  height: calc(100% + 60px);
  position: relative;
  overflow-y: auto;
  ${customScrollBar()};
`;
