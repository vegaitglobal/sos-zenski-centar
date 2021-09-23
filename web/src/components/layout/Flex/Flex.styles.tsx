import styled from 'styled-components';
import { StyledFlexProps } from './Flex.data';

export const StyledFlex = styled.div<StyledFlexProps>`
	display: flex;
	${({ $flexDirection }) => $flexDirection && `flex-direction: ${$flexDirection};`}
	${({ $justifyContent }) => $justifyContent && `justify-content: ${$justifyContent};`}
	${({ $alignItems }) => $alignItems && `align-items: ${$alignItems};`}
	${({ $flexWrap }) => $flexWrap && `flex-wrap: ${$flexWrap};`}
  ${({ $flexGrow }) => $flexGrow && `flex-grow: ${$flexGrow};`}
  ${({ $flexShrink }) => $flexShrink && `flex-shrink: ${$flexShrink};`}
`;
