import { forwardRef } from 'react';
import { StyledHeading } from './Heading.styles';

export const Heading = forwardRef(
  (
    {
      type,
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
