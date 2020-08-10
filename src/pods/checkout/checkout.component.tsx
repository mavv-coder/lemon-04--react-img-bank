import React from "react";
import { ProductInfoEntity } from "../../core/context";
import * as classes from "./checkout.styles";

// Material UI ~ Components
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Typography } from "@material-ui/core";

interface Props {
  checkedProductList: ProductInfoEntity[];
  updateCartList: (product: ProductInfoEntity) => void;
}

export const CheckoutComponent: React.FC<Props> = (props) => {
  const { checkedProductList, updateCartList } = props;

  return (
    <Paper className={classes.root}>
      <Typography className={classes.title}>Checkout</Typography>
      <Divider />
      <ul className={classes.list}>
        {checkedProductList.length > 0 &&
          checkedProductList.map((product) => (
            <li key={product.id} className={classes.listItem}>
              <img src={product.picUrl} className={classes.listImg} />
              <Typography>{product.title}</Typography>
              <HighlightOffIcon
                className={classes.deleteIcon}
                onClick={() => updateCartList(product)}
              />
            </li>
          ))}
      </ul>
      <Divider />
      <Typography className={classes.total}>
        Your cart contains{" "}
        {checkedProductList.length === 1
          ? `${checkedProductList.length} item`
          : `${checkedProductList.length} items`}
      </Typography>
    </Paper>
  );
};
