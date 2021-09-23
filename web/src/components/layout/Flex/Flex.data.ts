import { ElementType, ReactElement } from 'react';

export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexJustify =
	| 'flex-start'
	| 'flex-end'
	| 'center'
	| 'space-between'
	| 'space-around'
	| 'initial'
	| 'inherit';
export type FlexAlign =
	| 'stretch'
	| 'center'
	| 'flex-start'
	| 'flex-end'
	| 'baseline'
	| 'initial'
	| 'inherit';
export type FlexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';
export type FlexGrowShrink = '0' | '1';

export interface FlexProps {
	flexDirection?: FlexDirection;
	justifyContent?: FlexJustify;
	alignItems?: FlexAlign;
	flexWrap?: FlexWrap;
	flexGrow?: FlexGrowShrink;
	flexShrink?: FlexGrowShrink;
	elementType?: ElementType;
	children: ReactElement;
}

export interface StyledFlexProps {
	$flexDirection: FlexDirection;
	$justifyContent: FlexJustify;
	$alignItems: FlexAlign;
	$flexWrap: FlexWrap;
	$flexGrow: FlexGrowShrink;
	$flexShrink: FlexGrowShrink;
}
