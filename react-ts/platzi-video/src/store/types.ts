import { Category } from '../types/Category';
import { Media } from '../types/Media';

export interface InitialState {
  data: {
    categories: Category[]
  },
  search: Media[]
}