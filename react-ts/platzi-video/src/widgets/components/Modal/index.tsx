import React, {PropsWithChildren} from 'react';

import './modal.css';

interface ModalProps {
  onClickClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function Modal(props: PropsWithChildren<ModalProps>): JSX.Element {
  return (
    <div className="Modal">
      {props.children}
      <button onClick={props.onClickClose} className="Modal-close" />
    </div>
  )
}