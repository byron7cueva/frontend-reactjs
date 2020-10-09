import { Action, Reducer } from 'redux';

export interface ModalInitialState {
  visibility: boolean;
  mediaId: string | null;
}

export enum ModalActionType {
  OpenModal = 'OPEN_MODAL',
  CloseModal = 'CLOSE_MODAL'
}

export interface ModalDispatchAction extends Action<ModalActionType> {
  payload: Partial<ModalInitialState>;
}

const initialState: ModalInitialState = {
  visibility: false,
  mediaId: null
}

export const modalReducer: Reducer<ModalInitialState, ModalDispatchAction> = (state = initialState, action): ModalInitialState => {
  switch (action.type) {
    case ModalActionType.OpenModal: return state;
    case ModalActionType.CloseModal: return state;
    default: return state;
  }
}