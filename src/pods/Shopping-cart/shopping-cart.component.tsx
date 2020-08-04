import React from "react";
import { ProductInfoEntity } from "../../core/context";
import { useStyles } from "./shopping-cart.styles";
import { Link } from "react-router-dom";
import { switchRoutes } from "../../core/router";

// Material UI ~ Components
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

interface Props {
  checkedProductList: ProductInfoEntity[];
  updateCartList: (product: ProductInfoEntity) => void;
  setCheckedProductList: (value: ProductInfoEntity[]) => void;
}

export const ShoppingCartComponent: React.FC<Props> = (props) => {
  const { checkedProductList, updateCartList, setCheckedProductList } = props;
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
      <Divider />
      {checkedProductList.length > 0 && (
        <footer className={classes.flexContainer}>
          <Button
            className={classes.btn}
            variant="contained"
            color="secondary"
            onClick={() => setCheckedProductList([])}
          >
            Empty Cart
          </Button>
          <Button className={classes.btn} variant="contained" color="primary">
            <Link to={switchRoutes.checkout} className={classes.link}>
              Check Out
            </Link>
          </Button>
        </footer>
      )}
    </Paper>
  );
};
