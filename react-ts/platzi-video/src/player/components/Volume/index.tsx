import React from 'react';

import './volume.css';
import { Volume as VolumeIcon } from '../../../icons/components/Volume';

interface VolumeProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Volume = (props: VolumeProps): JSX.Element => (
  <button className="Volume">
    <VolumeIcon size={25} color="white" />
    <div className="Volume-range">
      <input
        type="range"
        min={0}
        max={1}
        step={.05}
        onChange={props.onChange}
      />
    </div>
  </button>
);