import { Dispatch } from 'redux';
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

// Accion utilizando redux-thunk
export const searchAsyncVideo = (query: string) => {
  return (dispatch: Dispatch): void =>  {
    // Aqui se realizaria los fetch a un API
    // Nos permite atender una llamada asincrona
    setTimeout(() => {
      // Ejecuta una accion normal
      dispatch(searchVideo(query));
    }, 5000);
  }
}

/*
({
  type: DataActionType.SearchAsyncVideo,
  payload: { query }
});
*/