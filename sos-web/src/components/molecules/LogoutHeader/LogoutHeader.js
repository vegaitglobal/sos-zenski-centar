import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import {
  StyledLogoutButton,
  StyledLogoutHeader,
  StyledSeparator,
} from './LogoutHeader.styles';

export const LogoutHeader = ({ username }) => {
  const handleLogout = () => {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('email');
    } catch (error) {
      alert(error);
    }
  };
  return (
    <StyledLogoutHeader>
      <Paragraph type="small" color="grey">
        {username}
      </Paragraph>
      <StyledSeparator />
      <StyledLogoutButton href="/login" onClick={handleLogout}>
        <Paragraph type="medium" color="pink">
          Logout
        </Paragraph>
      </StyledLogoutButton>
    </StyledLogoutHeader>
  );
};
