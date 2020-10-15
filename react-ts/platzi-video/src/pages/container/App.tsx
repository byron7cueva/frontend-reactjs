import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Videos } from './Videos';
import { Header } from '../components/Header';
import { Home } from '../components/Home';
import { NotFound } from '../components/NotFound';
import { store } from '../../store/store';

export const App = (): JSX.Element => (
  <React.StrictMode>
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
  </React.StrictMode>
);