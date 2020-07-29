import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import { LoginScene, PictureListScene, AlbumListScene } from "../../scenes";

export const RouterComponent: React.FC = () => {
  const { pictureList, albumList, login, root } = switchRoutes;
  return (
    <Router>
      <Switch>
        <Route exact={true} path={[root, login]} component={LoginScene} />
        <Route exact={true} path={pictureList} component={PictureListScene} />
        <Route exact={true} path={albumList} component={AlbumListScene} />
      </Switch>
    </Router>
  );
};
