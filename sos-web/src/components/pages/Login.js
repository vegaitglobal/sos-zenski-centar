import { StyledLogin, StyledContainer } from './Login.styles';
import image from '../../assets/home-background.svg';
import LoginForm from '../organisms/LoginForm/LoginForm';

export const Login = () => {
  return (
    <StyledLogin>
      <StyledContainer>
        <img src={image} alt="img" />
        <LoginForm />
      </StyledContainer>
    </StyledLogin>
  );
};
