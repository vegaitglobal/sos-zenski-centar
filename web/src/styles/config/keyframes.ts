import { keyframes } from 'styled-components';
import { OUTLINE_SIZE } from '../../components/atoms/Loader/Loader.config';

export const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const dash = keyframes`
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
