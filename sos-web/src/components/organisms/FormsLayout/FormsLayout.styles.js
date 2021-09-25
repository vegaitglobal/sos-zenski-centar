import styled from 'styled-components';
import { Accordion } from '../../molecules/Accordion/Accordion';
import { StyledContent } from '../../molecules/Accordion/Accordion.styles';
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
  grid-column-gap: 30px;
  height: 100%;
`;

export const StyledLeft = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledRight = styled.div`
  height: 100%;
`;

export const StyledCategory = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 50px 100px 50px 0;
  background-color: ${({ theme }) => theme.color.purple};
`;

export const StyledAccordion = styled(Accordion)`
  height: 100%;

  ${StyledContent} {
    flex-grow: 1;
  }
`;
