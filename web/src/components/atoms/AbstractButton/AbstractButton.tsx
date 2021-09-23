import { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import { ElementType, NativeProps } from './AbstractButton.data';

export const AbstractButton = forwardRef<ElementType, NativeProps>(
	({ children, ...props }, ref) => {
		let Component: 'a' | 'button' | typeof NavLink = 'button';

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const componentProps = { ...props } as any;

		if (props.href && !props.href.startsWith('/')) {
			Component = 'a';

			delete componentProps.to;
			componentProps.target = '_blank';
			componentProps.rel = 'noopener noreferrer';
		} else if (props.href) {
			Component = NavLink;
			delete componentProps.href;
			componentProps.to = props.href;
		} else if (props.type == null) {
			componentProps.type = 'button';
		}

		return (
			<Component data-testid="AbstractButton" ref={ref} {...componentProps}>
				{children}
			</Component>
		);
	},
);
