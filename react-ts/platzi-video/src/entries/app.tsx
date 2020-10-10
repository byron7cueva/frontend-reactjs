import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Home } from '../pages/container/Home';
import { store } from '../store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
