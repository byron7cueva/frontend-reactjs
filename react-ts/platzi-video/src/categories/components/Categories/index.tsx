import React from 'react';

import './categories.css';
import { Category } from '../../../types/Category';
import { CategoryItem } from '../CategoryItem';

interface CategoriesProps {
  data: Category[]
}

export function Categories(props: CategoriesProps): JSX.Element {
  return (
    <div className="Categories">
      {
        props.data.map(category => (
          <CategoryItem key={category.id} {...category} />
        ))
      }
    </div>
  );
}