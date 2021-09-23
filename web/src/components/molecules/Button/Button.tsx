import { forwardRef, MouseEvent } from 'react';
import { ElementType } from '../../atoms/AbstractButton/AbstractButton.data';
import { ButtonProps, ButtonTheme } from './Button.data';
import { StyledButton } from './Button.styles';

export const Button = forwardRef<ElementType, ButtonProps>(
	({ children, icon, buttonTheme = ButtonTheme.Dark, onClick, ...props }, ref) => {
		const handleClick = (event: MouseEvent<ElementType>): void => {
			event.currentTarget.blur();
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			onClick?.(event);
		};

		return (
			<StyledButton
				{...props}
				ref={ref}
				$buttonTheme={buttonTheme}
				$onlyIcon={!children && !!icon}
				onClick={handleClick}
				data-testid="Button"
			>
				{children}
				{icon}
			</StyledButton>
		);
	},
);
