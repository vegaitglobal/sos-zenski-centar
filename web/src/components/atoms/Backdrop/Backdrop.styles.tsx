import { position } from 'polished';
import styled from 'styled-components';
import { zIndex } from '../../../styles/config/zIndex';

export const StyledBackdrop = styled.div`
	${position('fixed', 0)};
	background-color: ${({ theme }) => theme.color.blackFaded};
	z-index: ${zIndex('overlay')};
	padding: 2vw;
`;
