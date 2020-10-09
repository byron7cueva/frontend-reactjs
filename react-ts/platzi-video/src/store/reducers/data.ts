import { Action, Reducer } from 'redux';

import { CategoryEntity, normalizedData } from '../../schemas';
import { Media } from '../../types/Media';

export enum DataActionType {
  SearchVideo = 'SEARCH_VIDEO'
}

export interface DataInitialState {
  entities: {
    categories: {
      [key: string]: CategoryEntity
    },
    media: {
      [key: string]: Media
    }
  },
  categories: string[],
  search: Media[]
}

export interface DataDispatchAction extends Action<DataActionType> {
  payload: {
    query: string
  };
}

const initialState: DataInitialState = {
  entities: normalizedData.entities,
  categories: normalizedData.result.categories,
  search: []
};

export const dataReducer: Reducer<DataInitialState, DataDispatchAction> = (state = initialState, action): DataInitialState => {
  switch (action.type) {
    case DataActionType.SearchVideo: {
      let search: Media[] = [];
      if (action.payload.query) {
        const list = state?.data.categories[2].playlist;
        search = list?.filter(media => media.author.includes(action.payload.query))
      }
      return { ...state, search };
    }
    default: return state;
  }
}