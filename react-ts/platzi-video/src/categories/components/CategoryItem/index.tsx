import React from 'react';

import './category.css';
import { Category } from '../../../types/Category';
import { Playlist } from '../../../playlist/components/Playlist';

export function CategoryItem(props: Category): JSX.Element {
  return (
    <div className="Category">
      <p className="Category-description">{props.description}</p>
      <h2 className="Category-title">{props.title}</h2>
      <Playlist data={props.playlist} />
    </div>
  );
}