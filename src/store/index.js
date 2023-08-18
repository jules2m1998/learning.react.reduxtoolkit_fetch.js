import { configureStore } from "@reduxjs/toolkit";
import { productReducer as products } from "./slices";

const store = configureStore({
  reducer: {
    products,
  },
});

export default store;
