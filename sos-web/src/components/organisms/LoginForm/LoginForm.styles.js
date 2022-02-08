import styled from 'styled-components';
import { Icon } from '../../atoms/Icon/Icon';
import { Container } from '../../layout/Container/Container';

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 0 50%;
  padding: 50px;

  h1 {
    position: relative;
    margin-bottom: 40px;

    &::after {
      content: '';
      position: absolute;
      top: calc(100% + 20px);
      left: 50%;
      transform: translateX(-50%);
      height: 1px;
      width: 47px;
      background-color: #57415f;
    }
  }

  p {
    margin-bottom: 20px;
  }
`;

export const StyledLogo = styled(Icon.Logo)`
  margin-bottom: 20px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledButtonHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 70px;
`;

export const LoginFail = styled.span`
  color: red;
  background-color: ${({ theme }) => theme.color.pinkLight};
  border-radius: 3px;
  padding: 3px;
  font-size: 12px;
  text-align: center;
`;
