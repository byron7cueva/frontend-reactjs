import React from 'react';

import './categories.css';
import { CategoryEntity } from '../../../schemas';
import { CategoryItem } from '../CategoryItem';
import { SearchContainer } from '../../../widgets/containers/SearchContainer';
import { Media } from '../../../types/Media';
import { MediaContainer } from '../../../playlist/containers/MediaContainer';

interface CategoriesProps {
  data: CategoryEntity[];
  search: Media[];
  isLoading: boolean;
}

export function Categories(props: CategoriesProps): JSX.Element {
  return (
    <div className="Categories">
      <SearchContainer />
      {
        props.isLoading ? (
          <p>Buscando..</p>
        ) : (
          props.search.map(media => (
            <MediaContainer key={media.id} id={media.id} />
          ))
        )
      }
      {
        props.data.map(category => (
          <CategoryItem key={category.id} data={category} />
        ))
      }
    </div>
  );
}