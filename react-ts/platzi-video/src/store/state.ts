import { DataInitialState } from './reducers/data';
import { ModalInitialState } from './reducers/modal';

export interface InitialState {
  data: DataInitialState;
  modal: ModalInitialState;
}