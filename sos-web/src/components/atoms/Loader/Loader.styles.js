import styled, { keyframes } from 'styled-components';
import { OUTLINE_SIZE, RADIUS, SIZE, STROKE_WIDTH } from './Loader.config';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 0, ${OUTLINE_SIZE};
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: ${OUTLINE_SIZE / 2} ${OUTLINE_SIZE / 2};
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dasharray: 0, ${OUTLINE_SIZE};
    stroke-dashoffset: -${OUTLINE_SIZE};
  }
`;

export const StyledLoaderHolder = styled.div`
  width: 100%;
  text-align: center;
  padding: 1rem 0;
`;

export const StyledLoader = styled.svg.attrs(() => ({
  width: SIZE,
  height: SIZE,
}))`
  animation: ${rotate} 2s linear infinite;
`;

const StyledCircle = styled.circle.attrs(() => ({
  cx: SIZE / 2,
  cy: SIZE / 2,
  r: RADIUS,
}))`
  stroke-width: ${STROKE_WIDTH}px;
  fill: none;
`;

export const StyledBaseCircle = styled(StyledCircle)`
  stroke: ${({ theme }) => theme.color.pink};
`;

export const StyledAnimatingCircle = styled(StyledCircle)`
  stroke-dasharray: 50, ${OUTLINE_SIZE};
  stroke-dashoffset: 0;
  animation: ${dash} 1.5s ease-in-out infinite;
  stroke: ${({ theme }) => theme.color.purple};
`;
