import styled from 'styled-components';
import { AbstractButton } from '../../atoms/AbstractButton/AbstractButton';
import { Heading } from '../../atoms/Heading/Heading';

export const StyledHomeContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
`;

export const StyledHomeButton = styled(AbstractButton)`
  background-color: white;
  width: 230px;
  min-height: 160px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 20px;
  margin: 10px;
  padding: 30px;
  text-align: center;

  svg {
    width: 40px;
    height: 40px;
    color: ${({ theme }) => theme.color.pink};
    transition: color 0.2s ease-in-out;
    margin-bottom: 12px;
  }

  &:hover {
    svg {
      color: ${({ theme }) => theme.color.purple};
    }
  }
`;

export const StyledHomeButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: fit-content;
  padding: 16px 0;
`;

export const StyledHeading = styled(Heading)`
  color: ${({ theme }) => theme.color.purple};
  margin: auto 0;
`;

export const StyledTitle = styled.div``;

export const StyledSeparator = styled.div`
  width: 47px;
  border: 1px solid ${({ theme }) => theme.color.black};
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
`;
