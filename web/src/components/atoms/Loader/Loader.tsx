import { ReactElement } from 'react';
import { LoaderProps } from './Loader.data';
import {
	StyledAnimatingCircle,
	StyledBaseCircle,
	StyledLoader,
	StyledLoaderHolder,
} from './Loader.styles';

export const Loader = (props: LoaderProps): ReactElement => (
	<StyledLoaderHolder data-testid="Loader" {...props}>
		<StyledLoader>
			<StyledBaseCircle />
			<StyledAnimatingCircle />
		</StyledLoader>
	</StyledLoaderHolder>
);
