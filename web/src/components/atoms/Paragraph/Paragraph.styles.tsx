import styled from 'styled-components';
import { typeStyle } from '../../../styles/config/typeStyles';
import { StyledParagraphProps } from './Paragraph.data';

export const StyledParagraph = styled.p<StyledParagraphProps>`
	${({ $type }) => typeStyle[$type]};
	${({ $fontWeight }) => $fontWeight && `font-weight:  ${$fontWeight}`};
	${({ $textTransform }) => $textTransform && `text-transform:  ${$textTransform}`};
	${({ $textAlign }) => $textAlign && `text-align: ${$textAlign}`};
	${({ theme, $color }) => $color && `color:  ${theme.color[$color]}`};
`;
