import renderer from 'react-test-renderer';
import AbstractButton from './index';
import { renderWithTheme } from '../../../utils/testsWithTheme';

describe('AbstractButton', () => {
	it('Renders AbstractButton', () => {
		const { getByTestId } = renderWithTheme(<AbstractButton />);

		const element = getByTestId('AbstractButton');

		expect(element).toBeTruthy();
	});

	it('Renders correctly', () => {
		const tree = renderer.create(<AbstractButton />).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
