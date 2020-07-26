import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import IconButton from "@material-ui/core/IconButton";
import { useAppContext } from "../../core/context";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    fontSize: "30px",
  },
}));

export const Navbar: React.FC = () => {
  const classes = useStyles();
  const { setVisibleCart, visibleCart } = useAppContext();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Movie Posters & Album Covers Collection
          </Typography>
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
