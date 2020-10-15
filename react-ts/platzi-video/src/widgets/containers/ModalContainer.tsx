import { ReactPortal } from 'react';
import { createPortal } from 'react-dom';

interface ModalContainerProps {
  children: JSX.Element
}

export const ModalContainer = (props: ModalContainerProps): ReactPortal => createPortal(
  props.children,
  document.getElementById('modal-container')
);