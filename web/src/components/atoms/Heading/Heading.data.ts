import type { ReactNode } from 'react';
import { ColorType } from '../../../styles/config/theme';
import type { FontWeight, TextAlign, TextTransform } from '../../../styles/config/variables';

export enum HeadingType {
	H1 = 'h1',
	H2 = 'h2',
	H3 = 'h3',
	H4 = 'h4',
	H5 = 'h5',
	H6 = 'h6',
}

export interface HeadingProps {
	as?: string | React.ComponentType<unknown>;
	type?: HeadingType;
	fontWeight?: FontWeight;
	textTransform?: TextTransform;
	textAlign?: TextAlign;
	color?: ColorType;
	children: ReactNode;
}

export interface StyledHeadingProps {
	$type: HeadingType;
	$fontWeight?: FontWeight;
	$textTransform?: TextTransform;
	$textAlign?: TextAlign;
	$color?: ColorType;
}
