import { createStore, Store } from "redux";

import { InitialState } from './types';
import { dataReducer, DataDispatchAction } from './reducers/data';
import { normalizedData } from '../schemas';

const initialState: InitialState = {
  data: {
    entities: normalizedData.entities,
    categories: normalizedData.result.categories
  },
  search: []
};

export const store: Store = createStore<InitialState, DataDispatchAction, null, null>(
  dataReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);