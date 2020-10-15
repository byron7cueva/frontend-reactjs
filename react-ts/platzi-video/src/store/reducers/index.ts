import { combineReducers } from 'redux';

import { dataReducer } from './data';
import { modalReducer } from './modal';
import { isLoadingReducer } from './isLoading';

export const rootReducer = combineReducers({
  // Se utilizan los kyes para agregarlos al store
  data: dataReducer,
  modal: modalReducer,
  isLoading: isLoadingReducer
});