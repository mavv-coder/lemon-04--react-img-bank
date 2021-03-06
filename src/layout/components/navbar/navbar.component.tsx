import React from "react";
import { switchRoutes } from "../../../core/router";
import { LinkComponent } from "../link";
import * as classes from "./navbar.styles";

// Material UI ~ Components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import IconButton from "@material-ui/core/IconButton";

interface Props {
  visibleCart: boolean;
  setVisibleCart: (value: boolean) => void;
}

export const NavbarComponent: React.FC<Props> = (props) => {
  const { setVisibleCart, visibleCart } = props;
  const { albumList, movieList } = switchRoutes;

  return (
    <AppBar position="static">
      <Toolbar className={classes.flexContainer}>
        <Typography variant="h1" className={classes.title}>
          Movie Posters & Album Covers Collection
        </Typography>
        <div className={classes.flexContainer}>
          <Typography>
            <LinkComponent
              destinationPath={movieList}
              linkClassName={classes.linkText}
              activeClassName={classes.activeLink}
              linkName="Movies"
            />
          </Typography>
          <Typography>
            <LinkComponent
              destinationPath={albumList}
              linkClassName={classes.linkText}
              activeClassName={classes.activeLink}
              linkName="Albums"
            />
          </Typography>
        </div>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => setVisibleCart(!visibleCart)}
        >
          <ShoppingCartOutlinedIcon className={classes.icon} />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
