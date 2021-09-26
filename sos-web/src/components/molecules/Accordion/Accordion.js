import React, { useCallback, useState } from 'react';
import { Heading } from '../../atoms/Heading/Heading';
import {
  StyledAccordion,
  StyledTop,
  StyledIcon,
  StyledContent,
} from './Accordion.styles';

const animation = {
  variants: {
    open: { height: 'auto', paddingTop: 30, paddingBottom: 30 },
    collapsed: { height: 0, paddingTop: 0, paddingBottom: 0 },
  },
  transition: { duration: 0.2 },
  initial: 'collapsed',
  exit: 'collapsed',
};

export const Accordion = ({
  title,
  children,
  isReverse,
  isClickable = true,
  defaultOpened = false,
  ...props
}) => {
  const [expanded, setExpanded] = useState(!isClickable ? true : defaultOpened);

  const handleOnClick = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  return (
    <StyledAccordion {...props}>
      <StyledTop
        $isOpened={expanded}
        onClick={isClickable ? handleOnClick : () => null}
        as={isClickable ? 'button' : 'div'}
      >
        <Heading>{title}</Heading>
        {isClickable && (
          <StyledIcon $isOpened={expanded} $isReverse={isReverse} />
        )}
      </StyledTop>
      <StyledContent {...animation} animate={expanded ? 'open' : 'collapsed'}>
        {children}
      </StyledContent>
    </StyledAccordion>
  );
};
