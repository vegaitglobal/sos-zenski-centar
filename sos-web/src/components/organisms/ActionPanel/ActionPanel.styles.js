import { size } from 'polished';
import styled, { keyframes } from 'styled-components';
import { customScrollBar } from '../../../styles/helpers/customScrollbar';
import { Icon } from '../../atoms/Icon/Icon';
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
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform: translateY(-100%);
    color: ${({ theme }) => theme.color.red};
  }

  svg {
    margin-top: -10px;
  }
`;


export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.purpleLight};
`;

const checkmarkAnimation = keyframes`
	100% {
		stroke-dashoffset: 0;
	}
`;

export const StyledCheckmark = styled(Icon.Checkmark)`
  ${size('10rem')};
  margin-bottom: 2rem;
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: ${checkmarkAnimation} 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards 0.3s;
`;