import { ReactElement, Suspense } from 'react';
import { Routes } from '../routes/Routes';
import Loader from './atoms/Loader';

const App = (): ReactElement => {
	return (
		<Suspense fallback={<Loader />}>
			<Routes />
		</Suspense>
	);
};

export default App;
