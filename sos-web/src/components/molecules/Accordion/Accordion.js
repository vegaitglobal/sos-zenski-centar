import React, { useCallback, useState } from 'react';
import { Heading } from '../../atoms/Heading/Heading';
import {
  StyledAccordion,
  StyledTop,
  StyledIcon,
  StyledContent,
  StyledBody,
} from './Accordion.styles';

const animation = {
  variants: {
    open: { height: 'auto' },
    collapsed: { height: 0 },
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
        <Heading type="h3">{title}</Heading>
        {isClickable && (
          <StyledIcon $isOpened={expanded} $isReverse={isReverse} />
        )}
      </StyledTop>
      <StyledBody {...animation} animate={expanded ? 'open' : 'collapsed'}>
        <StyledContent>
          {children}
        </StyledContent>
      </StyledBody>
    </StyledAccordion>
  );
};
