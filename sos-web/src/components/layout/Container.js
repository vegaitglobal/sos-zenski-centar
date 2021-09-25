import { forwardRef } from 'react';
import { StyledContainer } from './Container.styles';

export const Container = forwardRef(({ children, ...props }, ref) => (
  <StyledContainer ref={ref} {...props}>
    {children}
  </StyledContainer>
));
