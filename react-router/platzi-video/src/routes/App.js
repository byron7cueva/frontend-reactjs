import React from 'react';
import {
  BrowserRouter, // Encapsula todos elementos para poder trabajar con la navegación
  Route, // Permite añadir el elemento que necesito
  Switch // Garantiza que solo se renderiza el primer Route que haga match con la ruta
} from 'react-router-dom';

import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        {/*Si no hay ninguna ruta establecida va hacer render de esa ruta */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
