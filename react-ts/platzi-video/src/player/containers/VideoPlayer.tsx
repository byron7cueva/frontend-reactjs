import React, { Component } from 'react';
import { connect } from 'react-redux';

import { VideoPlayerLayout } from '../components/VideoPlayerLayout';
import { Video } from '../components/Video';
import { Title } from '../components/Title';
import { PlayPause } from '../components/PlayPause';
import { Timer } from '../components/Timer';
import { Controls } from '../components/Controls';
import { ProgressBar } from '../components/ProgressBar';
import { Spinner } from '../components/Spinner';
import { Volume } from '../components/Volume';
import { FullScreen } from '../components/FullScreen';
import { InitialState } from '../../store/state';
import { Media } from '../../types/Media';

interface VideoPlayerProps {
  autoPlay: boolean;
  mediaId: string;
}

interface VideoPlayerContainerProps extends Omit<VideoPlayerProps, 'mediaId'>{
  media: Media
}

interface VideoPlayerState {
  pause: boolean;
  duration: number;
  currentTime: number;
  loading: boolean;
}

class VideoPlayerContainer extends Component<VideoPlayerContainerProps, VideoPlayerState> {

  state: VideoPlayerState = {
    pause: true,
    duration: 0,
    currentTime: 0,
    loading: false
  };
  videoRef: HTMLVideoElement | null = null;
  playerRef: HTMLDivElement | null = null;

  setRef = (instance: HTMLDivElement | null): void => {
    this.playerRef = instance;
  }

  tooglePlayPause = (): void => {
    this.setState({pause: !this.state.pause});
  }

  handleLoadedMetadata = (event: React.SyntheticEvent<HTMLVideoElement, Event>): void => {
    this.videoRef = event.currentTarget;
    this.setState({duration: this.videoRef.duration});
  }

  handleTimeUpdate = (event: React.SyntheticEvent<HTMLVideoElement, Event>): void => {
    const video = event.currentTarget;
    this.setState({currentTime: video.currentTime});
  }

  handleChangeProgressBar = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (this.videoRef !== null) {
      this.videoRef.currentTime = Number(event.target.value);
    }
  }

  handleSeeking = (): void => {
    this.setState({loading: true});
  }

  handleSeeked = (): void => {
    this.setState({loading: false});
  }

  handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (this.videoRef) {
      this.videoRef.volume = Number(event.target.value);
    }
  }

  handleClickFullScreen = (): void => {
    if (!document.webkitIsFullScreen) {
      this.playerRef?.webkitRequestFullScreen();
    } else {
      document.exitFullscreen();
    }
  }

  componentDidMount(): void {
    this.setState({pause: !this.props.autoPlay});
  }

  render(): JSX.Element {
    return (
      <VideoPlayerLayout
        setRef={this.setRef}
      >
        <Title title={this.props.media.title} />
        <Controls>
          <PlayPause onClick={this.tooglePlayPause} pause={this.state.pause} />
          <Timer duration={this.state.duration} currentTime={this.state.currentTime} />
          <ProgressBar
            duration={this.state.duration}
            value={this.state.currentTime}
            onChange={this.handleChangeProgressBar}
          />
          <Volume onChange={this.handleVolumeChange} />
          <FullScreen onClick={this.handleClickFullScreen} />
        </Controls>
        <Spinner active={this.state.loading} />
        <Video
          autoPlay={this.props.autoPlay}
          pause={this.state.pause}
          src={this.props.media.src}
          onLoadedMetadata={this.handleLoadedMetadata}
          onTimeUpdate={this.handleTimeUpdate}
          onSeeking={this.handleSeeking}
          onSeeked={this.handleSeeked}
        />
      </VideoPlayerLayout>
    );
  }
}

function mapStateToProps(state: InitialState, props: VideoPlayerProps) {
  return {
    media: state.data.entities.media[props.mediaId]
  }
}

const VideoPlayer = connect(mapStateToProps)(VideoPlayerContainer);

export {
  VideoPlayer
}