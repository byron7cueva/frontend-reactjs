import React from 'react';

import './progress-bar.css';

interface ProgressBarProps {
  duration: number;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProgressBar = (props: ProgressBarProps): JSX.Element => (
  <div className="ProgressBar">
    <input
      type="range"
      min={0}
      max={props.duration}
      value={props.value}
      onChange={props.onChange}
    />
  </div>
);