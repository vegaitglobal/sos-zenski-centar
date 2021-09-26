import styled from 'styled-components';
import { customScrollBar } from '../../../styles/helpers/customScrollbar';
import { Question } from '../../molecules/Question/Question';

export const StyledQuestion = styled(Question)`
  display: block;

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  max-height: 33vh;
  padding: 30px 180px 30px 30px;
  margin: -30px;
  width: calc(100% + 60px);
  height: calc(100% + 60px);
  position: relative;
  overflow-y: auto;
  ${customScrollBar()};
`;

export const StyledButtonHolder = styled.div`
  position: absolute;
  right: 20px;
  bottom: 10px;
  width: 150px;
  height: 45px;

  p {
    text-align: center;
    color: ${({ theme }) => theme.color.red};
    margin-top: -30px;
  }

  svg {
    margin-top: -10px;
  }
`;
