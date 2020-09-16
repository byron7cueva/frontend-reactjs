import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "../pages/Home";
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import NotFound from "../pages/NotFound";
import BadgeEdit from "../pages/BadgeEdit";
import BadgeDetailsContainer from "../pages/BadgeDetailsContainer";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/badges" exact component={Badges} />
            <Route path="/badges/new" exact component={BadgeNew} />
            <Route
              path="/badges/:badgeId"
              exact
              component={BadgeDetailsContainer}
            />
            <Route path="/badges/:badgeId/edit" exact component={BadgeEdit} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
