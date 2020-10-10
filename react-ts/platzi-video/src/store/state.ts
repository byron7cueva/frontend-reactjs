import { DataInitialState } from './reducers/data';
import { ModalInitialState } from './reducers/modal';
import { IsLoadingState } from './reducers/isLoading';

export interface InitialState {
  data: DataInitialState;
  modal: ModalInitialState;
  isLoading: IsLoadingState
}