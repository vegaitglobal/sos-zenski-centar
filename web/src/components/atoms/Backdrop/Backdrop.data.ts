import { MouseEvent, ReactNode } from 'react';

export interface BackdropProps {
	children: ReactNode;
	onBackdropClick: (event: MouseEvent) => void;
}
