import React, { PureComponent } from 'react';

import './video.css';

interface VideoProps {
  src: string;
  autoPlay: boolean;
  pause: boolean;
  onLoadedMetadata: (event: React.SyntheticEvent<HTMLVideoElement, Event>) => void;
  onTimeUpdate: (event: React.SyntheticEvent<HTMLVideoElement, Event>) => void;
  onSeeking: (event: React.SyntheticEvent<HTMLVideoElement, Event>) => void;
  onSeeked: (event: React.SyntheticEvent<HTMLVideoElement, Event>) => void;
}

export class Video extends PureComponent<VideoProps> {
  videoRef: HTMLVideoElement | null = null;

  componentDidUpdate(prevProps: VideoProps): void {
    if (this.props.pause !== prevProps.pause) {
      this.tooglePlay();
    }
  }

  tooglePlay(): void {
    this.props.pause? this.videoRef?.pause() : this.videoRef?.play();
  }

  setVideoRef = (instance: HTMLVideoElement | null): void  => {
    this.videoRef = instance;
  }

  render(): JSX.Element {
    const {
      src,
      autoPlay,
      onLoadedMetadata,
      onTimeUpdate,
      onSeeking,
      onSeeked
    } = this.props;
    
    return (
      <div className="Video">
        <video
          ref={this.setVideoRef}
          src={src}
          autoPlay={autoPlay}
          onLoadedMetadata={onLoadedMetadata}
          onTimeUpdate={onTimeUpdate}
          onSeeking={onSeeking}
          onSeeked={onSeeked}
        />
      </div>
    );
  }
}