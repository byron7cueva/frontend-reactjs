import { CategoryEntity } from '../schemas';
import { Media } from '../types/Media';

export interface InitialState {
  data: {
    entities: {
      categories: {
        [key: string]: CategoryEntity
      },
      media: {
        [key: string]: Media
      }
    },
    categories: string[]
  },
  search: Media[]
}