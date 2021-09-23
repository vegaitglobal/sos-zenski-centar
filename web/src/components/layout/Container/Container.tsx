import { forwardRef } from 'react';
import { ContainerProps } from './Container.data';
import { StyledContainer } from './Container.styles';

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
	({ children, ...props }, ref) => (
		<StyledContainer data-testid="Container" ref={ref} {...props}>
			{children}
		</StyledContainer>
	),
);
