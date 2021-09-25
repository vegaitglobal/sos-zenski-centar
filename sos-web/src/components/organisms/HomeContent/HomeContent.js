import {
  StyledHomeButton,
  StyledHomeButtonsContainer,
  StyledHomeContent,
  StyledHeading,
  StyledSeparator,
  StyledTitle,
} from './HomeContent.styles';
import { Icon } from '../../atoms/Icon/Icon';
import { rgba } from 'polished';
import { theme } from '../../../styles/config/theme';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import { LogoutHeader } from '../../molecules/LogoutHeader/LogoutHeader';

export const HomeContent = () => {
  return (
    <StyledHomeContent $backgroundColor={rgba(theme.color.pink, 0.3)}>
      <LogoutHeader username={'mock@email.com'}></LogoutHeader>
      <StyledTitle>
        <StyledSeparator />
        <Paragraph type="large" color="grey" fontWeight="">
          Odaberite opciju.
        </Paragraph>
      </StyledTitle>
      <StyledHomeButtonsContainer>
        <StyledHomeButton href="/forms">
          <Icon.Plus />
          <StyledHeading type="h2">Evidentiraj novi poziv</StyledHeading>
        </StyledHomeButton>
        <StyledHomeButton href="/reports">
          <Icon.Report />
          <StyledHeading type="h2">Pogledaj izveštaje</StyledHeading>
        </StyledHomeButton>
      </StyledHomeButtonsContainer>
    </StyledHomeContent>
  );
};
