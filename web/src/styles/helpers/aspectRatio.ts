import { css, FlattenSimpleInterpolation } from 'styled-components';
import { pseudo } from './pseudo';

const calculateRatio = ([width, height]: readonly [number, number]): number =>
	(height / width) * 100;

export const aspectRatio = (
	aspectRatio: readonly [number, number],
	position = 'relative',
): FlattenSimpleInterpolation => css`
	position: relative;

	&::before {
		${pseudo('block', position)};
		padding-top: ${calculateRatio(aspectRatio)}%;
	}
`;
