import React from 'react';

import './categories.css';
import { Category } from '../../../types/Category';
import { CategoryItem } from '../CategoryItem';
import { SearchContainer } from '../../../widgets/containers/SearchContainer';
import { Media } from '../../../types/Media';

interface CategoriesProps {
  data: Category[],
  onClickMedia: (media: Media) => void
}

export function Categories(props: CategoriesProps): JSX.Element {
  return (
    <div className="Categories">
      <SearchContainer />
      {
        props.data.map(category => (
          <CategoryItem key={category.id} data={category} onClickMedia={props.onClickMedia} />
        ))
      }
    </div>
  );
}