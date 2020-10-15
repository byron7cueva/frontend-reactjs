import React, { PropsWithChildren } from 'react';

import './controls.css';

export const Controls = (props: PropsWithChildren<unknown>): JSX.Element => (
  <div className="VideoPlayerControls">
    {props.children}
  </div>
);