import React from "react";
import { useAppContext } from "../../core/context";
import { ShoppingCartComponent } from "./shopping-cart.component";
// import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
// import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

export const ShoppingCartContainer: React.FC = () => {
  const { checkedProductList, updateCartList } = useAppContext();

  return (
    <ShoppingCartComponent
      updateCartList={updateCartList}
      checkedProductList={checkedProductList}
    />
  );
};
