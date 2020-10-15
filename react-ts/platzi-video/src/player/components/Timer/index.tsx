import React from 'react';

import './timer.css';

interface TimerProps {
  duration: number;
  currentTime: number;
}

export const Timer = (props: TimerProps): JSX.Element => {

  const leftPad = (time: string): string => {
    const pad = '00';
    return `${pad.substring(0, pad.length - time.length)}${time}`;
  }

  const formatedTime = (seconds: number): string => {
    const minutes = Math.floor(seconds/60);
    const sec = Math.floor(seconds % 60);
    return `${leftPad(minutes.toString())}:${leftPad(sec.toString())}`;
  }

  return (
    <div className="Timer">
      <p>
        <span>{formatedTime(props.currentTime)} / {formatedTime(props.duration)}</span>
      </p>
    </div>
  );
}