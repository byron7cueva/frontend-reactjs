import { Action, Reducer } from 'redux';

import { InitialState } from '../types';
import { Media } from '../../types/Media';

export enum DataActionType {
  SearchVideo = 'SEARCH_VIDEO'
}

export interface DataDispatchAction extends Action<DataActionType> {
  payload: {
    query: string
  };
}

export const dataReducer: Reducer<InitialState, DataDispatchAction> = (state: InitialState, action): InitialState => {
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