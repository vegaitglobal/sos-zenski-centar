import renderer from 'react-test-renderer';
import Loader from './index';
import { renderWithTheme, componentWithTheme } from '../../../utils/testsWithTheme';

describe('Loader', () => {
	it('Renders Loader', () => {
		const { getByTestId } = renderWithTheme(<Loader />);

		const element = getByTestId('Loader');

		expect(element).toBeTruthy();
	});

	it('Renders correctly', () => {
		const tree = renderer.create(componentWithTheme(<Loader />)).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
