import { createStore, Store, applyMiddleware } from "redux";

import { rootReducer } from './reducers';

const logger = ({getState, dispatch}) => next => action => {
  console.log('Viejo estado', getState());
  console.log('Enviar la accion', action);
  const value = next(action);
  console.log('Nuevo estado', getState());
  return value;
}

export const store: Store = createStore(
  rootReducer,
  {},
  applyMiddleware(logger)
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);