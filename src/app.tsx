import React from "react";
import { RouterComponent } from "./router";
import { ShoppingCart } from "./layout/Shopping-cart/shopping-cart.component";

export const App = () => {
  const [visible, setVisible] = React.useState(true);

  // Crear un interruptor que muestre el Cart

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <RouterComponent />
      {visible && <ShoppingCart />}
    </div>
  );
};
