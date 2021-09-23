import { forwardRef } from 'react';
import { FlexProps } from './Flex.data';
import { StyledFlex } from './Flex.styles';

export const Flex = forwardRef<Element, FlexProps>(
	(
		{
			flexDirection,
			justifyContent,
			alignItems,
			flexWrap,
			flexGrow,
			flexShrink,
			children,
			elementType = 'div',
			...props
		},
		ref,
	) => (
		<StyledFlex
			data-testid="Flex"
			ref={ref}
			as={elementType}
			$flexDirection={flexDirection}
			$justifyContent={justifyContent}
			$alignItems={alignItems}
			$flexWrap={flexWrap}
			$flexGrow={flexGrow}
			$flexShrink={flexShrink}
			{...props}
		>
			{children}
		</StyledFlex>
	),
);
