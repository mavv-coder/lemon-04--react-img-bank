import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import IconButton from "@material-ui/core/IconButton";
import { useAppContext } from "../../../core/context";
import { Link } from "react-router-dom";
import { switchRoutes } from "../../../core/router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    marginRight: "30px",
  },
  linkText: {
    textDecoration: "none",
    borderBottom: "1px solid #fff",
    paddingBottom: "6px",
    fontSize: "18px",
    marginRight: "20px",
    color: "#fff",
    "&:hover": {
      color: "#faf300",
      borderBottom: "1px solid #faf300",
    },
  },
  icon: {
    fontSize: "30px",
  },
}));

export const NavbarComponent: React.FC = () => {
  const classes = useStyles();
  const { setVisibleCart, visibleCart } = useAppContext();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.flexContainer}>
          <Typography variant="h6" className={classes.title}>
            Movie Posters & Album Covers Collection
          </Typography>
          <div className={classes.flexContainer}>
            <Typography>
              <Link to={switchRoutes.pictureList} className={classes.linkText}>
                Movies
              </Link>
            </Typography>
            <Typography>
              <Link to={switchRoutes.albumList} className={classes.linkText}>
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
