import React from "react";
import { RouterComponent } from "./core/router";
import { useAppContext } from "./core/context";
import { ShoppingCartScene } from "./scenes/shopping-cart.scene";

export const App = () => {
  const { visibleCart } = useAppContext();
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <RouterComponent />
      {visibleCart && <ShoppingCartScene />}
    </div>
  );
};
