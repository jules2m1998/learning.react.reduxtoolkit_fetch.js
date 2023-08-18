/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { Card } from "../../ui";
import classes from "./Style.module.css";
import { CartItem } from "../CartItem";

export const Cart = (props) => {
  const products = useSelector((state) => state.products.products);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {products.map((x) => (
          <CartItem key={x.id} item={x} />
        ))}
      </ul>
    </Card>
  );
};
