export enum MediaType {
  Video = 'video',
  Audio = 'audio'
}

export interface Media {
  title: string;
  author: string;
  type: "video",
  cover: string;
  src: string;
  id: string;
}