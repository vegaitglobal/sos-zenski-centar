import styled from 'styled-components';
import { AbstractButton } from '../../atoms/AbstractButton/AbstractButton';
import { Heading } from '../../atoms/Heading/Heading';

export const StyledShell = styled.div`
  flex-grow: 1;
  padding: 40px 0;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

export const StyledTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledHeading = styled(Heading)`
  position: relative;
  padding-bottom: 20px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.color.purple};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 40px;
    background-color: ${({ theme }) => theme.color.purple};
  }

  span {
    color: ${({ theme }) => theme.color.purpleLight};
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
  }
`;

export const StyledClose = styled(AbstractButton)`
  opacity: 1;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;
