import React from 'react';

import './categories.css';
import { Category } from '../../../types/Category';
import { CategoryItem } from '../CategoryItem';
import { SearchContainer } from '../../../widgets/containers/SearchContainer';
import { Media } from '../../../types/Media';
import { MediaItem } from '../../../playlist/components/MediaItem';

interface CategoriesProps {
  data: Category[],
  search: Media[],
  onClickMedia: (media: Media) => void
}

export function Categories(props: CategoriesProps): JSX.Element {
  return (
    <div className="Categories">
      <SearchContainer />
      {
        props.search.map(media => (
          <MediaItem key={media.id} data={media} onClick={props.onClickMedia} />
        ))
      }
      {
        props.data.map(category => (
          <CategoryItem key={category.id} data={category} onClickMedia={props.onClickMedia} />
        ))
      }
    </div>
  );
}