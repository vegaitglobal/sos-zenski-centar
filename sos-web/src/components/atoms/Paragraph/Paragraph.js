import { forwardRef } from 'react';
import { StyledParagraph } from './Paragraph.styles';

export const Paragraph = forwardRef(
  (
    {
      type,
      as = 'p',
      fontWeight,
      textTransform,
      textAlign,
      color,
      children,
      ...props
    },
    ref,
  ) => (
    <StyledParagraph
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
    </StyledParagraph>
  ),
);
