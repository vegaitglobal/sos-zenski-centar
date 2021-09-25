import	{ StyledLogin, StyledContainer } from "./Login.styles";
import LoginForm from "../LoginForm/LoginForm";
import image from '../../assets/home-background.svg'

export const Login = () => {
	return (
		<StyledLogin>
			<StyledContainer>
				<img src={image} alt="img"/>
				<LoginForm/>
			</StyledContainer>
		</StyledLogin>
	);
};