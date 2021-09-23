import renderer from 'react-test-renderer';
import Image from './index';
import { renderWithTheme } from '../../../utils/testsWithTheme';

const imageProps = {
	alt: 'background',
	src: 'https://picsum.photos/200',
};

describe('Image', () => {
	describe('Render', () => {
		it('Renders Image', () => {
			const { getByTestId } = renderWithTheme(<Image {...imageProps} />);

			const element = getByTestId('Image');

			expect(element).toBeTruthy();
		});

		it('Renders correctly', () => {
			const tree = renderer.create(<Image {...imageProps} />).toJSON();

			expect(tree).toMatchSnapshot();
		});
	});

	describe('Attributes', () => {
		it('has correct alt text', () => {
			const { getByTestId } = renderWithTheme(<Image {...imageProps} />);

			const element = getByTestId('ImageElement');

			expect(element).toHaveAttribute('alt', imageProps.alt);
		});

		it('has correct source', () => {
			const { getByTestId } = renderWithTheme(<Image {...imageProps} />);

			const element = getByTestId('ImageElement');

			expect(element).toHaveAttribute('src', imageProps.src);
		});
	});
});
