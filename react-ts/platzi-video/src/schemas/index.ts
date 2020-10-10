import { normalize, schema } from 'normalizr';

import { Category } from '../types/Category';
import { Media } from '../types/Media';
import api from '../../data/api.json';

export interface CategoryEntity extends Omit<Category, 'playlist'> {
  playlist: string[]
}

// schema.Entity('nombre de la key que va contener los datos', definicion del esquema, opciones)
const media = new schema.Entity<Media>('media', {}, {
  idAttribute: 'id',
  processStrategy: (value, parent, key) => ({ ...value, category: parent.id })
});
const category = new schema.Entity<Category>('categories', {
  playlist: new schema.Array(media)
});
const categories = { categories: new schema.Array(category) };

const normalizedData = normalize<unknown, {
  categories: {
    [key: string]: CategoryEntity
  },
  media: {
    [key: string]: Media
  }
}, { categories: string[]}>(api, categories);

export {
  normalizedData
}