import { css, FlattenSimpleInterpolation } from 'styled-components';

export const pseudo = (
	display = 'block',
	position = 'absolute',
	content = '',
): FlattenSimpleInterpolation => css`
	content: '${content}';
	display: ${display};
	position: ${position};
`;
