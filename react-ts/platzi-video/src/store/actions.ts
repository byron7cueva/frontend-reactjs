import { Dispatch } from 'redux';
import { ModalActionType, ModalDispatchAction } from './reducers/modal';
import { DataActionType, DataDispatchAction } from './reducers/data';
import { IsLoadingActionType } from './reducers/isLoading';

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

export const isLoading = (active: boolean) => ({
  type: IsLoadingActionType.IsLoading,
  payload: { active }
});

// Accion utilizando redux-thunk
export const searchAsyncVideo = (query: string) => {
  return (dispatch: Dispatch): void =>  {
    // Aqui se realizaria los fetch a un API
    // Nos permite atender una llamada asincrona
    dispatch(isLoading(true));
    setTimeout(() => {
      // Ejecuta una accion normal
      dispatch(searchVideo(query));
      dispatch(isLoading(false));
    }, 5000);
  }
}