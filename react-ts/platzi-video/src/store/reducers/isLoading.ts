import { stat } from "fs";

export enum IsLoadingActionType {
  IsLoading = 'IS_LOADING'
}

export interface IsLoadingState {
  active: boolean;
}

const initialState: IsLoadingState = {
  active: false
}

export function isLoadingReducer(state = initialState, action) {
  switch(action.type) {
    case IsLoadingActionType.IsLoading:
      return {...state, active: action.payload.active}
    default: return state;
  }
}