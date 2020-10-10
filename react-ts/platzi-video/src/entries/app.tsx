import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Videos } from '../pages/container/Videos';
import { Header } from '../pages/components/Header';
import { Home } from '../pages/components/Home';
import { NotFound } from '../pages/components/NotFound';
import { store } from '../store/store';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/videos" component={Videos} />
            <Redirect from="/v" to="/videos" />
            <Route component={NotFound} />
          </Switch>
        </>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
