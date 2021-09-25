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
  defaultOpened = false,
  ...props
}) => {
  const [expanded, setExpanded] = useState(defaultOpened);

  const handleOnClick = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded]);

  return (
    <StyledAccordion {...props}>
      <StyledTop $isOpened={expanded} onClick={handleOnClick}>
        <Heading>{title}</Heading>
        <StyledIcon $isOpened={expanded} />
      </StyledTop>
      <StyledContent {...animation} animate={expanded ? 'open' : 'collapsed'}>
        {children}
      </StyledContent>
    </StyledAccordion>
  );
};
