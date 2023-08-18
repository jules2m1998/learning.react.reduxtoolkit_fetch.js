import { useDispatch, useSelector } from "react-redux";
import classes from "./Style.module.css";
import { useMemo, useCallback } from "react";
import { toggleCartVisibitity } from "../../../store/slices/products";

export const CartButton = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const productCount = useMemo(() => {
    return products.reduce((acc, x) => acc + x.quantity, 0);
  }, [products]);
  const handleHiddeCart = useCallback(() => {
    dispatch(toggleCartVisibitity());
  }, [dispatch]);

  return (
    <button className={classes.button} onClick={handleHiddeCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{productCount}</span>
    </button>
  );
};
