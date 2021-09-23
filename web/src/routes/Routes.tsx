import { lazy, ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/pages/Home';
import { Path } from './Path';

const NotFound = lazy(async () => ({
	default: (await import('../components/pages/NotFound')).default,
}));

const Styleguide = lazy(async () => ({
	default: (await import('../components/pages/Styleguide')).default,
}));

export const Routes = (): ReactElement => (
	<Switch>
		{process.env.NODE_ENV === 'development' && (
			<Route path={Path.Styleguide} exact>
				<Styleguide />
			</Route>
		)}
		<Route path={Path.Home} exact>
			<Home />
		</Route>
		<Route path={Path.NotFound}>
			<NotFound />
		</Route>
	</Switch>
);
