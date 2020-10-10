import { createStore, Store, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { rootReducer } from './reducers';

// Custom middleware
/*
const logger = ({getState, dispatch}) => next => action => {
  console.log('Viejo estado', getState());
  console.log('Enviar la accion', action);
  const value = next(action);
  console.log('Nuevo estado', getState());
  return value;
}
*/

export const store: Store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(logger, thunk))
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);