import type { ReactNode } from 'react';
import { ColorType } from '../../../styles/config/theme';
import type { FontWeight, TextAlign, TextTransform } from '../../../styles/config/variables';

export enum ParagraphType {
	Large = 'large',
	Normal = 'normal',
	Small = 'small',
}

export interface ParagraphProps {
	as?: string | React.ComponentType<unknown>;
	type?: ParagraphType;
	fontWeight?: FontWeight;
	textTransform?: TextTransform;
	textAlign?: TextAlign;
	color?: ColorType;
	children: ReactNode;
}

export interface StyledParagraphProps {
	$type: ParagraphType;
	$fontWeight?: FontWeight;
	$textTransform?: TextTransform;
	$textAlign?: TextAlign;
	$color?: ColorType;
}
