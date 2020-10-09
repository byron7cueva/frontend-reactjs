import { createStore, Store } from "redux";

import { InitialState } from './types';
import { dataReducer, DataDispatchAction } from './reducers/data';
import data from '../../data/api.json';

const initialState: InitialState = {
  data: {
    ...data
  },
  search: []
};

export const store: Store = createStore<InitialState, DataDispatchAction, null, null>(
  dataReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);