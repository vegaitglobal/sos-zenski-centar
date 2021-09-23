import { ReactElement } from 'react';
import { Backdrop } from '../../atoms/Backdrop/Backdrop';
import { StyledCloseButton, StyledModal } from './Modal.styles';
import FocusLock from 'react-focus-lock';
import { ModalProps } from './Modal.data';

export const Modal = ({ onClose, children, ...props }: ModalProps): ReactElement => (
	<Backdrop onBackdropClick={onClose}>
		<FocusLock>
			<StyledModal {...props}>
				<StyledCloseButton onClick={onClose}>Close</StyledCloseButton>
				{children}
			</StyledModal>
		</FocusLock>
	</Backdrop>
);
