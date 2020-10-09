import React from 'react';

import './playlist.css';
import { Media } from '../../../types/Media';
import { MediaItem } from '../MediaItem';

interface PlaylistProps {
  data: Media[],
  onClickMedia: (media: Media) => void
}

export const Playlist = (props: PlaylistProps): JSX.Element => (
  <div className="Playlist">
    {
      props.data.map(item => (
        <MediaItem key={item.id} data={item} onClick={props.onClickMedia} />
      ))
    }
  </div>
);
