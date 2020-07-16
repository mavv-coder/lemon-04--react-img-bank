import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import { LoginPage } from "../pods/login";
import { ImgList } from "../pods/picture-list";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.login]}
          component={LoginPage}
        />
        <Route exact={true} path={switchRoutes.imgList} component={ImgList} />
      </Switch>
    </Router>
  );
};
