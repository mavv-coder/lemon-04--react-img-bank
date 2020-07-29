import React from "react";
import { ProductInfoEntity } from "../../core/context";
import { useStyles } from "./shopping-cart.styles";

// Material UI ~ Components
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

interface Props {
  checkedProductList: ProductInfoEntity[];
  updateCartList: (product: ProductInfoEntity) => void;
}

export const ShoppingCartComponent: React.FC<Props> = (props) => {
  const { checkedProductList, updateCartList } = props;
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <div className={classes.flexContainer}>
        <ShoppingCartOutlinedIcon className={classes.cartIcon} />
        <Typography className={classes.title}>Shopping Cart</Typography>
      </div>
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
    </Paper>
  );
};
