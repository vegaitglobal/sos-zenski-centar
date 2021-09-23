import { size } from 'polished';
import styled from 'styled-components';
import AbstractButton from '../../atoms/AbstractButton';

export const StyledModal = styled.div`
	position: relative;
	background: ${({ theme }) => theme.color.white};
`;

export const StyledCloseButton = styled(AbstractButton)`
	${size('4rem')};
	position: absolute;
	top: 4rem;
	right: 4rem;
`;
