import React from "react";
import { MovieListContainer } from "../pods/movie-list";
import { NavbarContainer } from "../layout/components/navbar";
import { ShoppingCartContainer } from "../layout/components/shopping-cart";
import { useAppContext } from "../core/context";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export const MovieListScene: React.FC = () => {
  const { visibleCart } = useAppContext();
  const classes = useStyles();
  return (
    <>
      <NavbarContainer />
      <div className={classes.flexContainer}>
        <MovieListContainer />
        {visibleCart && <ShoppingCartContainer />}
      </div>
    </>
  );
};
