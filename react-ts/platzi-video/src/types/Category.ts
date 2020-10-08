import { Media } from './Media';

export interface Category {
  id: number;
  description: string;
  title: string;
  playlist: Media[]
}