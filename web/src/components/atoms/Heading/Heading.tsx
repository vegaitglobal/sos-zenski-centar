import { forwardRef } from 'react';
import { HeadingProps, HeadingType } from './Heading.data';
import { StyledHeading } from './Heading.styles';

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
	(
		{
			type = HeadingType.H1,
			as = type,
			fontWeight,
			textTransform,
			textAlign,
			color,
			children,
			...props
		},
		ref,
	) => (
		<StyledHeading
			data-testid="Heading"
			ref={ref}
			as={as}
			$type={type}
			$fontWeight={fontWeight}
			$textTransform={textTransform}
			$textAlign={textAlign}
			$color={color}
			{...props}
		>
			{children}
		</StyledHeading>
	),
);
