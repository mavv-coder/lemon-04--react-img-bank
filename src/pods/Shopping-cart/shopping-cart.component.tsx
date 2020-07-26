import React from "react";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import { useAppContext } from "../../common/context";

export const ShoppingCart: React.FC = () => {
  const { checkedProductList, updateCartList } = useAppContext();

  return (
    <div style={{ width: "600px" }}>
      <ShoppingCartOutlinedIcon style={{ fontSize: "50px" }} />
      <span>Cart</span>

      {checkedProductList.length > 0 &&
        checkedProductList.map((product) => (
          <div key={product.id}>
            <img src={product.picUrl} style={{ width: 50 }} />
            <span>{product.title}</span>

            <DeleteForeverIcon
              style={{ fontSize: "30px" }}
              onClick={() => updateCartList(product)}
            />
          </div>
        ))}
    </div>
  );
};
