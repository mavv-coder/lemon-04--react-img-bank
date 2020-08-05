import React from "react";
import { Link } from "react-router-dom";
import { switchRoutes } from "../../../core/router";
import { useStyles } from "./navbar.styles";

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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.flexContainer}>
          <Typography variant="h6" className={classes.title}>
            Movie Posters & Album Covers Collection
          </Typography>
          <div className={classes.flexContainer}>
            <Typography>
              <Link to={movieList} className={classes.linkText}>
                Movies
              </Link>
            </Typography>
            <Typography>
              <Link to={albumList} className={classes.linkText}>
                Albums
              </Link>
            </Typography>
          </div>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setVisibleCart(!visibleCart)}
          >
            <ShoppingCartOutlinedIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};
