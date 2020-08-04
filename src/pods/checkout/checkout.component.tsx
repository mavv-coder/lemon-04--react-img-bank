import React from "react";
import { useStyles } from "./checkout.styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { ProductInfoEntity } from "../../core/context";

interface Props {
  checkedProductList: ProductInfoEntity[];
}

export const CheckoutComponent: React.FC<Props> = (props) => {
  const classes = useStyles();
  const { checkedProductList } = props;

  return (
    <Container>
      <Typography>Checkout</Typography>
      <ul className={classes.list}>
        {checkedProductList.length > 0 &&
          checkedProductList.map((product) => (
            <li key={product.id} className={classes.listItem}>
              <img src={product.picUrl} className={classes.listImg} />
              <Typography>{product.title}</Typography>
            </li>
          ))}
      </ul>
    </Container>
  );
};
