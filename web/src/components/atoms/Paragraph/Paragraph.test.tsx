import renderer from 'react-test-renderer';
import Noop from '../Noop';
import Paragraph from './index';
import { renderWithTheme } from '../../../utils/testsWithTheme';

describe('Paragraph', () => {
	describe('Render', () => {
		it('Renders Paragraph', () => {
			const { getByTestId } = renderWithTheme(
				<Paragraph>
					<Noop />
				</Paragraph>,
			);

			const element = getByTestId('Paragraph');

			expect(element).toBeTruthy();
		});

		it('Renders as span tag', () => {
			const { getByTestId } = renderWithTheme(
				<Paragraph as="span">
					<Noop />
				</Paragraph>,
			);

			const element = getByTestId('Paragraph');

			expect(element.tagName).toBe('SPAN');
		});

		it('Renders correctly', () => {
			const tree = renderer
				.create(
					<Paragraph>
						<Noop />
					</Paragraph>,
				)
				.toJSON();

			expect(tree).toMatchSnapshot();
		});
	});
	describe('Content', () => {
		it('Has valid content', () => {
			const { getByTestId } = renderWithTheme(<Paragraph>Paragraph text</Paragraph>);

			const element = getByTestId('Paragraph');

			expect(element).toHaveTextContent('Paragraph text');
		});

		it('Can have elements as children', () => {
			const { getByTestId } = renderWithTheme(
				<Paragraph>
					<span>P</span>aragraph
				</Paragraph>,
			);

			const element = getByTestId('Paragraph');
			const child = element.querySelector('span');

			expect(element).toContainElement(child);
		});
	});
});
