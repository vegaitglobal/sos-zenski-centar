import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import { theme } from '../../../styles/config/theme';
import { AbstractButton } from '../../atoms/AbstractButton/AbstractButton';
import { Icon } from '../../atoms/Icon/Icon';

export const StyledAccordion = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${theme.boxShadow.default};

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const StyledTop = styled(AbstractButton)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  color: ${({ theme, $isOpened }) =>
    $isOpened ? theme.color.purple : theme.color.white};
  background-color: ${({ theme }) => theme.color.pink};
  width: 100%;
  transition: color 0.2s ease-in-out;
`;

export const StyledIcon = styled(Icon.ArrowDown)`
  transition: transform 0.2s ease-in-out;

  ${({ $isOpened, $isReverse }) =>
    $isOpened &&
    !$isReverse &&
    css`
      transform: rotate(180deg);
    `};

  ${({ $isOpened, $isReverse }) =>
    $isReverse &&
    !$isOpened &&
    css`
      transform: rotate(180deg);
    `};
`;

export const StyledBody = styled(motion.div)`
position: relative;
height: 0;
overflow: hidden;
background-color: ${({ theme }) => theme.color.white};
`;

export const StyledContent = styled.div`
  padding: 30px;
`;
