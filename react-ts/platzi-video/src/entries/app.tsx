import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { Videos } from '../pages/container/Videos';
import { Header } from '../pages/components/Header';
import { Home } from '../pages/components/Home';
import { store } from '../store/store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/videos" component={Videos} />
        </>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
