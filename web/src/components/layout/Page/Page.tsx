import { ReactElement } from 'react';
import { PageProps } from './Page.data';
import { StyledPage } from './Page.styles';

export const Page = ({ children, ...props }: PageProps): ReactElement => (
	<StyledPage data-testid="Page" {...props}>
		{children}
	</StyledPage>
);
