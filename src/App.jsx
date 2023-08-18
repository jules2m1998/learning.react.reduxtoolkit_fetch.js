import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { Cart, Layout, Products } from "./components";
import { initProductAsync } from "./store/slices/products";

function App() {
  const isCartVisible = useSelector((state) => state.products.isCartShown);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initProductAsync());
  }, [dispatch]);

  return (
    <Layout>
      {isCartVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
