import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import { LoginPage } from "../../pods/login";
import { PictureListContainer } from "../../pods/picture-list";

export const RouterComponent: React.FC = () => {
  const { pictureList, login, root } = switchRoutes;
  return (
    <Router>
      <Switch>
        <Route exact={true} path={[root, login]} component={LoginPage} />
        <Route
          exact={true}
          path={pictureList}
          component={PictureListContainer}
        />
      </Switch>
    </Router>
  );
};
