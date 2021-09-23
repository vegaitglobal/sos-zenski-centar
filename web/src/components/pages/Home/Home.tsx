import { ReactElement } from 'react';
import { Path } from '../../../routes/Path';
import Container from '../../layout/Container';
import Page from '../../layout/Page';
import Button from '../../molecules/Button';

export const Home = (): ReactElement => {
	return (
		<Page>
			<Container>
				<Button href={Path.Styleguide}>Styleguide</Button>
			</Container>
		</Page>
	);
};
