import { css, FlattenSimpleInterpolation } from 'styled-components';
import { HeadingType } from '../../components/atoms/Heading/Heading.data';
import { ParagraphType } from '../../components/atoms/Paragraph/Paragraph.data';
import { fluidType } from '../helpers/fluidType';
import { FontWeight } from './variables';

type TypeStyles = ParagraphType | HeadingType;

export const typeStyle: Record<TypeStyles, FlattenSimpleInterpolation> = {
	[HeadingType.H1]: css`
		${fluidType(40, 52)};
		line-height: 1.1;
		font-weight: ${FontWeight.Bold};
	`,
	[HeadingType.H2]: css`
		${fluidType(34, 42)};
		line-height: 1.2;
	`,
	[HeadingType.H3]: css`
		${fluidType(30, 38)};
		line-height: 1.3;
	`,
	[HeadingType.H4]: css`
		${fluidType(24, 30)};
		line-height: 1.3;
	`,
	[HeadingType.H5]: css`
		${fluidType(20, 26)};
		line-height: 1.4;
	`,
	[HeadingType.H6]: css`
		${fluidType(18, 22)};
		line-height: 1.4;
	`,
	[ParagraphType.Large]: css`
		font-size: 1.6rem;
		line-height: 1.2;
	`,
	[ParagraphType.Normal]: css`
		font-size: 1.4rem;
		line-height: 1.2;
	`,
	[ParagraphType.Small]: css`
		font-size: 1.2rem;
		line-height: 1.2;
	`,
} as const;

export type TypeStyleType = typeof typeStyle;
