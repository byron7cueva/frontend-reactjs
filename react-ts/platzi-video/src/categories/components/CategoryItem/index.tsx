import React from 'react';

import './category.css';
import { CategoryEntity } from '../../../schemas';
import { Playlist } from '../../../playlist/components/Playlist';

interface CategoryItemProps {
  data: CategoryEntity;
}

export function CategoryItem(props: CategoryItemProps): JSX.Element {
  const { data: { title, description, playlist } } = props;
  return (
    <div className="Category">
      <p className="Category-description">{description}</p>
      <h2 className="Category-title">{title}</h2>
      <Playlist data={playlist} />
    </div>
  );
}