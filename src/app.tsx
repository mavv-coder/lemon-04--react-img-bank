import React from "react";
import { RouterComponent } from "./core/router";
import { ShoppingCart } from "./pods/Shopping-cart/shopping-cart.component";
import { useAppContext } from "./core/context";

export const App = () => {
  const { visibleCart } = useAppContext();
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <RouterComponent />
      {visibleCart && <ShoppingCart />}
    </div>
  );
};
