import renderer from 'react-test-renderer';
import Noop from '../../atoms/Noop';
import Page from './index';
import { renderWithTheme } from '../../../utils/testsWithTheme';

describe('Page', () => {
	describe('Render', () => {
		it('Renders Page', () => {
			const { getByTestId } = renderWithTheme(
				<Page>
					<Noop />
				</Page>,
			);

			const element = getByTestId('Page');

			expect(element).toBeTruthy();
		});

		it('Renders correctly', () => {
			const tree = renderer
				.create(
					<Page>
						<Noop />
					</Page>,
				)
				.toJSON();

			expect(tree).toMatchSnapshot();
		});
	});

	describe('Content', () => {
		it('Can have elements as children', () => {
			const { getByTestId } = renderWithTheme(
				<Page>
					<span>Child</span>
				</Page>,
			);

			const element = getByTestId('Page');
			const child = element.querySelector('span');

			expect(element).toContainElement(child);
		});
	});
});
