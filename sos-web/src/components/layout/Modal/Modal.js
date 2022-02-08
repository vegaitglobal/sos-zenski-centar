import React from 'react';
import reactDom from 'react-dom';
import { useModalContext } from '../../../hooks/useModalContext';
import { Icon } from '../../atoms/Icon/Icon';
import SRLabel from '../../atoms/SRLabel/SRLabel';
import { StyledClose, StyledContainer, StyledModal } from './Modal.styles';
import FocusTrap from 'focus-trap-react';

const Modal = ({ children, id }) => {
  const { isOpen, getControl } = useModalContext();
  const { close } = getControl(id);

  if (!isOpen(id)) return null;

  return reactDom.createPortal(
    <FocusTrap>
      <StyledModal onClick={close}>
        <StyledContainer onClick={(e) => e.stopPropagation()}>
          <StyledClose onClick={close}>
            <SRLabel>Zatvori</SRLabel>
            <Icon.Close />
          </StyledClose>
          {children}
        </StyledContainer>
      </StyledModal>
    </FocusTrap>,
    document.getElementById('modal'),
  );
};

export default Modal;
