import { ModalActionType, ModalDispatchAction } from './reducers/modal';
import { DataActionType, DataDispatchAction } from './reducers/data';

export const openModal = (mediaId: string): ModalDispatchAction => ({
    type: ModalActionType.OpenModal,
    payload: { mediaId }
});

export const closeModal = (): ModalDispatchAction => ({
  type: ModalActionType.CloseModal
});

export const searchVideo = (query: string): DataDispatchAction => ({
  type: DataActionType.SearchVideo,
  payload: { query }
});