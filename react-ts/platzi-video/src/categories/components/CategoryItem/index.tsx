import React from 'react';

import './category.css';
import { Category } from '../../../types/Category';
import { Playlist } from '../../../playlist/components/Playlist';

interface CategoryItemProps {
  data: Category;
  onClickMedia: () => void
}

export function CategoryItem(props: CategoryItemProps): JSX.Element {
  const { data: { title, description, playlist } } = props;
  return (
    <div className="Category">
      <p className="Category-description">{description}</p>
      <h2 className="Category-title">{title}</h2>
      <Playlist data={playlist} onClickMedia={props.onClickMedia} />
    </div>
  );
}