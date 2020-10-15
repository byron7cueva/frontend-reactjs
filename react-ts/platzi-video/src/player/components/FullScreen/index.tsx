import React from 'react';

import './full-screen.css';
import { FullScreen as FullScreenIcon } from '../../../icons/components/FullScreen';

interface FullScreenProps {
  onClick: () => void
}

export const FullScreen = (props: FullScreenProps): JSX.Element => (
  <div className="FullScreen" onClick={props.onClick}>
    <FullScreenIcon size={25} color="white" />
  </div>
);