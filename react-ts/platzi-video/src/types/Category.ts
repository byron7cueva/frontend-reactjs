import { Media } from './Media';

export interface Category {
  id: string;
  description: string;
  title: string;
  playlist: Media[]
}