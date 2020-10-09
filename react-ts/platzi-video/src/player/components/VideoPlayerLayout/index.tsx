import React, { PropsWithChildren } from 'react';

import './video-player-layout.css';

interface VideoPlayerLayoutProps {
  setRef: (instance: HTMLDivElement | null) => void;
}

export const VideoPlayerLayout = (props: PropsWithChildren<VideoPlayerLayoutProps>): JSX.Element => (
  <div className="VideoPlayer" ref={props.setRef}>
    {props.children}
  </div>
);