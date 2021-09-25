import { Paragraph } from '../atoms/Paragraph/Paragraph';
import {
  StyledLogoutButton,
  StyledLogoutHeader,
  StyledSeparator,
} from './LogoutHeader.styles';

export const LogoutHeader = ({ username = 'masapoznanovic@gmail.com' }) => {
  return (
    <StyledLogoutHeader>
      <Paragraph type="small" color="grey">
        {username}
      </Paragraph>
      <StyledSeparator />
      <StyledLogoutButton>
        <Paragraph type="medium" color="pink">
          Logout
        </Paragraph>
      </StyledLogoutButton>
    </StyledLogoutHeader>
  );
};
