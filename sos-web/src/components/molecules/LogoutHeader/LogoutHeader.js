import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import {
  StyledLogoutButton,
  StyledLogoutHeader,
  StyledSeparator,
} from './LogoutHeader.styles';

export const LogoutHeader = ({ username }) => {
  return (
    <StyledLogoutHeader>
      <Paragraph type="small" color="grey">
        {username}
      </Paragraph>
      <StyledSeparator />
      <StyledLogoutButton href="/login">
        <Paragraph type="medium" color="pink">
          Logout
        </Paragraph>
      </StyledLogoutButton>
    </StyledLogoutHeader>
  );
};
