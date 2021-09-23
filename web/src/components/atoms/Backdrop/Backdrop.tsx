import { MouseEvent, useCallback, useRef, ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { useLockBodyScroll } from 'react-use';
import { BackdropProps } from './Backdrop.data';
import { StyledBackdrop } from './Backdrop.styles';

const container = document.getElementById('modal') as HTMLDivElement;

export const Backdrop = ({ children, onBackdropClick, ...props }: BackdropProps): ReactElement => {
	const backdrop = useRef<HTMLDivElement>(null);
	const body = useRef(document.body);

	useLockBodyScroll(true, body);

	const backdropClickHandler = useCallback(
		(event: MouseEvent) => {
			event.stopPropagation();
			event.nativeEvent.stopImmediatePropagation();

			if (event.target !== backdrop.current) {
				return;
			}

			onBackdropClick(event);
		},
		[onBackdropClick, backdrop],
	);

	const content = (
		<StyledBackdrop ref={backdrop} onClick={backdropClickHandler} {...props}>
			{children}
		</StyledBackdrop>
	);

	return createPortal(content, container);
};
