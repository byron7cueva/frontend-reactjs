import React from 'react';

import './playlist.css';
import { Media } from '../../../types/Media';
import { MediaContainer } from '../../containers/MediaContainer';

interface PlaylistProps {
  data: string[],
  onClickMedia: (media: Media) => void
}

export const Playlist = (props: PlaylistProps): JSX.Element => (
  <div className="Playlist">
    {
      props.data.map(mediaId => (
        <MediaContainer key={mediaId} id={mediaId} onClick={props.onClickMedia} />
      ))
    }
  </div>
);
