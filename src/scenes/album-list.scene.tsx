import React from "react";
import { AlbumListContainer } from "../pods/album-list";
import { NavbarContainer } from "../layout/components/navbar";
import { ShoppingCartContainer } from "../layout/components/shopping-cart";
import { useAppContext } from "../core/context";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export const AlbumListScene: React.FC = () => {
  const { visibleCart } = useAppContext();
  const classes = useStyles();

  return (
    <>
      <NavbarContainer />
      <div className={classes.flexContainer}>
        <AlbumListContainer />
        {visibleCart && <ShoppingCartContainer />}
      </div>
    </>
  );
};
