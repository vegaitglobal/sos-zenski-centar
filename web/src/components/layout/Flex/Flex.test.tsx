import renderer from 'react-test-renderer';
import Flex from './index';
import { renderWithTheme } from '../../../utils/testsWithTheme';
import Noop from '../../atoms/Noop';

describe('Flex', () => {
	describe('Render', () => {
		it('Renders Flex', () => {
			const { getByTestId } = renderWithTheme(
				<Flex>
					<Noop />
				</Flex>,
			);

			const element = getByTestId('Flex');

			expect(element).toBeTruthy();
		});

		it('Renders header tag', () => {
			const { getByTestId } = renderWithTheme(
				<Flex elementType="header">
					<Noop />
				</Flex>,
			);

			const element = getByTestId('Flex');

			expect(element.tagName).toBe('HEADER');
		});

		it('Renders correctly', () => {
			const tree = renderer
				.create(
					<Flex>
						<Noop />
					</Flex>,
				)
				.toJSON();

			expect(tree).toMatchSnapshot();
		});
	});

	describe('Content', () => {
		it('Can have elements as children', () => {
			const { getByTestId } = renderWithTheme(
				<Flex>
					<span>Child</span>
				</Flex>,
			);

			const element = getByTestId('Flex');
			const child = element.querySelector('span');

			expect(element).toContainElement(child);
		});
	});
});
