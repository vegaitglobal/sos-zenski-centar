import { ReactNode } from 'react';
import { NativeProps } from '../../atoms/AbstractButton/AbstractButton.data';

export enum ButtonTheme {
	Dark = 'dark',
	Light = 'light',
}

export interface StyledButtonProps {
	$buttonTheme: ButtonTheme;
	$onlyIcon: boolean;
}

export interface ButtonProps extends NativeProps {
	icon?: ReactNode;
	buttonTheme?: ButtonTheme;
}
