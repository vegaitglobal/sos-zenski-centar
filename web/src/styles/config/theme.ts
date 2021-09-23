import { rgba } from 'polished';

export const color = {
	white: '#fff',
	whiteFaded: rgba('#fff', 0.5),
	black: '#000',
	blackFaded: rgba('#000', 0.5),
} as const;

/* styled-components theme */
export const theme = {
	color,
} as const;

export type ThemeType = typeof theme;
export type ColorType = keyof typeof color;

// Overwrite styled-components DefaultTheme
declare module 'styled-components' {
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface DefaultTheme extends ThemeType {}
}
