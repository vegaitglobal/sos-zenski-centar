import renderer from 'react-test-renderer';
import Noop from '../../atoms/Noop';
import Container from './index';
import { renderWithTheme } from '../../../utils/testsWithTheme';

describe('Container', () => {
	describe('Render', () => {
		it('Renders Container', () => {
			const { getByTestId } = renderWithTheme(
				<Container>
					<Noop />
				</Container>,
			);

			const element = getByTestId('Container');

			expect(element).toBeTruthy();
		});

		it('Renders correctly', () => {
			const tree = renderer
				.create(
					<Container>
						<Noop />
					</Container>,
				)
				.toJSON();

			expect(tree).toMatchSnapshot();
		});
	});

	describe('Content', () => {
		it('Can have elements as children', () => {
			const { getByTestId } = renderWithTheme(
				<Container>
					<span>Child</span>
				</Container>,
			);

			const element = getByTestId('Container');
			const child = element.querySelector('span');

			expect(element).toContainElement(child);
		});
	});
});
