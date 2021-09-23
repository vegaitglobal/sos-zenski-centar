import { Breakpoints } from './variables';

/*

	Usage:
		In styled-components -

				${respondTo(media.up(Breakpoints.XxLarge))} {
					background: red;
				}
				${respondTo(media.down(Breakpoints.Medium))} {
					background: yellow;
				}
				${respondTo(media.only(Breakpoints.Large))} {
					background: green;
				}
				${respondTo(media.between(Breakpoints.Large, Breakpoints.XLarge))} {
					background: blue;
				}

		In tsx -

				const isLarge = useMedia(media.up(Breakpoints.Large));

*/

const BREAKPOINT_DIFFERENCE = 0.02;

const getNext = (breakpoint: Breakpoints): Breakpoints => {
	const currentIndex = Object.values(Breakpoints).indexOf(breakpoint);

	const [, value] = Object.entries(Breakpoints)[currentIndex + 1] ?? [];

	return value as Breakpoints;
};

const up = (breakpoint: Breakpoints): string => `(min-width: ${breakpoint}px)`;

const down = (breakpoint: Breakpoints): string =>
	`(max-width: ${breakpoint - BREAKPOINT_DIFFERENCE}px)`;

const only = (breakpoint: Breakpoints): string =>
	`(min-width: ${breakpoint}px)${
		getNext(breakpoint) ? ` and (max-width: ${getNext(breakpoint) - BREAKPOINT_DIFFERENCE}px)` : ''
	}`;

const between = (breakpoint: Breakpoints, breakpointSec: Breakpoints): string =>
	`(min-width: ${breakpoint}px)${
		breakpointSec > breakpoint ? `and (max-width: ${breakpointSec - BREAKPOINT_DIFFERENCE}px)` : ''
	}`;

export const media = {
	up,
	down,
	only,
	between,
};
