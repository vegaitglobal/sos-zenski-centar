import { useCallback } from 'react';
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

import { useCategoryContext } from '../../../hooks/useCategoryContext';

export const HomeContent = () => {
  let email = localStorage.getItem('email');
  const { categories, selectCategory } = useCategoryContext();

  const Services = useCallback(() => {
    return categories.map((service, i) => {
      return (
        <StyledHomeButton key={i} href="/forms" onClick={() => selectCategory(service)}>
          <Icon.Plus />
          <StyledHeading type="h2">{service.label}</StyledHeading>
        </StyledHomeButton>
      );
    });
  }, [categories, selectCategory]);

  return (
    <StyledHomeContent $backgroundColor={rgba(theme.color.pink, 0.3)}>
      <LogoutHeader username={email}></LogoutHeader>
      <StyledTitle>
        <StyledSeparator />
        <Paragraph type="large" color="grey" fontWeight="">
          Odaberite opciju.
        </Paragraph>
      </StyledTitle>
      <StyledHomeButtonsContainer>
        <Services />
      </StyledHomeButtonsContainer>
      <StyledHomeButtonsContainer>
        <StyledHomeButton href="/reports">
          <Icon.Report />
          <StyledHeading type="h2">Pogledaj izveštaje</StyledHeading>
        </StyledHomeButton>
      </StyledHomeButtonsContainer>
    </StyledHomeContent>
  );
};
