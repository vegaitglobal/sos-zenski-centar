import renderer from 'react-test-renderer';
import Button from './index';
import { renderWithTheme, componentWithTheme } from '../../../utils/testsWithTheme';
import { Icon } from '../../atoms/Icon/Icon';

describe('Button', () => {
	describe('Render', () => {
		it('Renders Button', () => {
			const { getByTestId } = renderWithTheme(<Button />);

			const element = getByTestId('Button');

			expect(element).toBeTruthy();
		});

		it('Renders Icon', () => {
			const { getByTestId } = renderWithTheme(<Button icon={<Icon.Logo />} />);

			const element = getByTestId('Button');
			const child = element.querySelector('svg');

			expect(element).toContainElement(child);
		});

		it('Can be anchor tag', () => {
			const { getByTestId } = renderWithTheme(<Button href="https://www.google.com" />);

			const element = getByTestId('Button');

			expect(element).toContainHTML('</a>');
			expect(element).toHaveAttribute('href', 'https://www.google.com');
		});

		it('Can be button tag', () => {
			const { getByTestId } = renderWithTheme(<Button />);

			const element = getByTestId('Button');

			expect(element).toContainHTML('</button>');
		});

		it('Renders correctly', () => {
			const tree = renderer.create(componentWithTheme(<Button />)).toJSON();

			expect(tree).toMatchSnapshot();
		});
	});

	describe('Content', () => {
		it('Can have elements as children', () => {
			const { getByTestId } = renderWithTheme(
				<Button>
					<span>Child</span>
				</Button>,
			);

			const element = getByTestId('Button');
			const child = element.querySelector('span');

			expect(element).toContainElement(child);
		});
	});

	describe('Attributes', () => {
		it('Can be disabled', () => {
			const { getByTestId } = renderWithTheme(<Button disabled />);

			const element = getByTestId('Button');

			expect(element).toBeDisabled();
		});
	});
});
