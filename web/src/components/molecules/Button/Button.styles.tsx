import { size } from 'polished';
import styled, { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { ease } from '../../../styles/config/easing';
import { typeStyle } from '../../../styles/config/typeStyles';
import { FontWeight, TransitionDuration } from '../../../styles/config/variables';
import { AbstractButton } from '../../atoms/AbstractButton/AbstractButton';
import { ButtonTheme, StyledButtonProps } from './Button.data';

const dark = css`
	background-color: ${({ theme }) => theme.color.black};
	color: ${({ theme }) => theme.color.white};

	&:hover:not(:disabled),
	&:focus:not(:disabled) {
		background-color: ${({ theme }) => theme.color.blackFaded};
	}
`;

const light = css`
	background-color: ${({ theme }) => theme.color.white};
	color: ${({ theme }) => theme.color.black};

	&:hover:not(:disabled),
	&:focus:not(:disabled) {
		background-color: ${({ theme }) => theme.color.whiteFaded};
	}
`;

const disabled = css`
	background-color: ${({ theme }) => theme.color.blackFaded};
	color: ${({ theme }) => theme.color.whiteFaded};
	cursor: not-allowed;
`;

const onlyIcon = css`
	${size('3.5rem')};
	min-height: auto;
	border-radius: 50%;
	padding: 0;

	svg {
		${size('1.6rem')};
		margin-left: 0;
	}
`;

const themes: { [key in ButtonTheme]: FlattenInterpolation<ThemeProps<DefaultTheme>> } = {
	dark,
	light,
};

export const StyledButton = styled(AbstractButton)<StyledButtonProps>`
	${typeStyle.normal};
	font-weight: ${FontWeight.Bold};
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0.2rem 2.5rem;
	min-height: 4rem;
	border-radius: 4.6rem;
	transition: ${TransitionDuration.Normal} ${ease.easeOutSine};
	transition-property: color, background-color;

	${({ $buttonTheme }) => themes[$buttonTheme]};

	&:disabled {
		${disabled};
	}

	svg {
		${size('2.6rem')};
		margin-left: 1rem;
	}

	${({ $onlyIcon }) => $onlyIcon && onlyIcon}
`;
