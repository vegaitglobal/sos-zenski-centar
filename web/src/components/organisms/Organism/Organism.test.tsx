import { renderWithTheme } from '../../../utils/testsWithTheme';
import Organism from './index';

describe('Organism', () => {
	it('Renders Organism', () => {
		const { getByTestId } = renderWithTheme(<Organism />);

		const element = getByTestId('Organism');

		// TODO Write proper tests
		expect(element).toBeTruthy();
	});
});
