import React from 'react';

import './play-pause.css';
import { Play } from '../../../icons/components/Play';
import { Pause } from '../../../icons/components/Pause';

interface PlayPauseProps {
  pause: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const PlayPause = (props: PlayPauseProps): JSX.Element => (
  <div className="PlayPause">
    { props.pause ? (
      <button onClick={props.onClick}>
        <Play size={25} color="white" />
      </button>
    ) : (
      <button onClick={props.onClick}>
      <Pause size={25} color="white" />
    </button>
    )}
  </div>
);