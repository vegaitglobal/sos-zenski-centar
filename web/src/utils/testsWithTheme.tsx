import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ReactElement, ComponentType, ReactNode } from 'react';
import { theme } from '../styles/config/theme';

export const componentWithTheme = (component: ReactNode): ReactElement => (
	<ThemeProvider theme={theme}>{component}</ThemeProvider>
);

export const renderWithTheme = (component: ReactElement, options?: RenderOptions): RenderResult => {
	const wrapper: ComponentType = ({ children }) => componentWithTheme(children);

	return render(component, { wrapper, ...options });
};
