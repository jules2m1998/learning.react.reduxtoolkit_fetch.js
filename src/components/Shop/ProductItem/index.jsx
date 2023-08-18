/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useCallback } from "react";

import { Card } from "../../ui";
import classes from "./Style.module.css";
import { pushProduct } from "../../../store/slices/products";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description, id } = props;

  const handleAddProduct = useCallback(() => {
    dispatch(pushProduct({ title, quantity: 1, id, price: +price }));
  }, [dispatch, id, price, title]);

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddProduct}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
