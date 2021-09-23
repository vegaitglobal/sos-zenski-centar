import styled from 'styled-components';
import { typeStyle } from '../../../styles/config/typeStyles';
import { StyledHeadingProps } from './Heading.data';

export const StyledHeading = styled.h1<StyledHeadingProps>`
	${({ $type }) => typeStyle[$type]};
	${({ $fontWeight }) => $fontWeight && `font-weight:  ${$fontWeight}`};
	${({ $textTransform }) => $textTransform && `text-transform:  ${$textTransform}`};
	${({ $textAlign }) => $textAlign && `text-align: ${$textAlign}`};
	${({ theme, $color }) => $color && `color:  ${theme.color[$color]}`};
`;
