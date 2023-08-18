/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useCallback, useMemo } from "react";

import classes from "./Style.module.css";
import {
  pushProduct,
  removeOneProduct,
} from "./../../../store/slices/products";

export const CartItem = (props) => {
  const { title, quantity, price, id } = props.item;
  const dispatch = useDispatch();

  const handleIncrease = useCallback(() => {
    dispatch(pushProduct({ id }));
  }, [dispatch, id]);
  const handleDecrease = useCallback(() => {
    dispatch(removeOneProduct(id));
  }, [dispatch, id]);

  const total = useMemo(() => {
    return +quantity * +price;
  }, [price, quantity]);

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleDecrease}>-</button>
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>
    </li>
  );
};
