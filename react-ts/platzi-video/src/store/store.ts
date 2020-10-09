import { createStore, Store } from "redux";

import { rootReducer } from './reducers';

export const store: Store = createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);