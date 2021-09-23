import { MouseEvent, ReactNode } from 'react';

export interface ModalProps {
	children: ReactNode;
	onClose: (event: MouseEvent) => void;
}
