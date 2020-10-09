import { normalize, schema } from 'normalizr';

import { Category } from '../types/Category';
import api from '../../data/api.json';

export interface CategoryEntity extends Omit<Category, 'playlist'> {
  playlist: string[]
}

// schema.Entity('nombre de la key que va contener los datos', definicion del esquema, opciones)
const media = new schema.Entity('media', {}, {
  idAttribute: 'id',
  processStrategy: (value, parent, key) => ({ ...value, category: parent.id })
});
const category = new schema.Entity('categories', {
  playlist: new schema.Array(media)
});
const categories = { categories: new schema.Array(category) };

const normalizedData = normalize(api, categories);

export {
  normalizedData
}