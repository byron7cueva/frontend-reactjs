import React from 'react';

import './playlist.css';
import { Media } from '../../../types/Media';
import { MediaItem } from '../MediaItem';
import { Play } from '../../../icons/components/Play';
import { Pause } from '../../../icons/components/Pause';
import { Volume } from '../../../icons/components/Volume';
import { FullScreen } from '../../../icons/components/FullScreen';

interface PlaylistProps {
  data: Media[]
}

export const Playlist = (props: PlaylistProps) => (
  <div className="Playlist">
    <Play size={32} color="red" />
    <Pause size={32} color="red" />
    <Volume size={32} color="red" />
    <FullScreen size={32} color="red" />
    {
      props.data.map(item => (
        <MediaItem key={item.id} {...item} />
      ))
    }
  </div>
);
