import React, {PropsWithChildren} from 'react';
import { Link } from 'react-router-dom';

import './modal.css';

interface ModalProps {
  onClickClose: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function Modal(props: PropsWithChildren<ModalProps>): JSX.Element {
  return (
    <div className="Modal">
      {props.children}
      <Link
        to={{
          pathname: '/videos'
        }}
      >
        <button onClick={props.onClickClose} className="Modal-close" />
      </Link>
    </div>
  )
}