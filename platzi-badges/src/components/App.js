import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "../pages/Home";
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import NotFound from "../pages/NotFound";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/badges" exact component={Badges} />
            <Route path="/badges/new" exact component={BadgeNew} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
