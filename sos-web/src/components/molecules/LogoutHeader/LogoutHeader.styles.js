import styled from 'styled-components';
import { AbstractButton } from '../../atoms/AbstractButton/AbstractButton';

export const StyledLogoutHeader = styled.div`
  position: absolute;
  right: 60px;
  top: 70px;
  display: flex;
  flex-direction: row;
  width: fit-content;
  align-items: center;
`;

export const StyledSeparator = styled.div`
  height: 24px;
  border: 1px solid ${({ theme }) => theme.color.grey};
  margin: 0px 12px;
`;

export const StyledLogoutButton = styled(AbstractButton)`
  color: ${({ theme }) => theme.color.pink};
  transition: color 0.2s ease-in-out;

  &:hover {
    p {
      color: ${({ theme }) => theme.color.purple};
    }
  }
`;
