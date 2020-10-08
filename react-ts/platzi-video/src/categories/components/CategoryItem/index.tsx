import React from 'react';

import { Category } from '../../../types/Category';
import { Playlist } from '../../../playlist/components/Playlist';

export function CategoryItem(props: Category): JSX.Element {
  return (
    <div>
      <p>{props.description}</p>
      <h2>{props.title}</h2>
      <Playlist data={props.playlist} />
    </div>
  );
}