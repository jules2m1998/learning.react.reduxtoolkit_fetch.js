import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isCartShown: false,
};

const { reducer: productReducer, actions } = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct(state, { payload }) {
      state.products.push(payload);
    },
    increaseAmount(state, { payload: paload }) {
      const current = state.products.find((x) => x.id === paload);
      current.quantity++;
    },
    decreaseAmount(state, { payload }) {
      const current = state.products.find((x) => x.id === payload);
      current.quantity--;
    },
    toggleCartVisibitity(state) {
      state.isCartShown = !state.isCartShown;
    },
    removeProduct(state, { payload }) {
      const current = state.products.find((x) => x.id === payload);
      if (current)
        state.products = state.products.filter((x) => x.id !== payload);
    },
    init(state, { payload }) {
      state.products = payload;
    },
  },
});

export const {
  addProduct,
  increaseAmount,
  decreaseAmount,
  toggleCartVisibitity,
  removeProduct,
  init,
} = actions;

const pushProduct = (product) => async (dispatch, getState) => {
  const { products } = getState();
  const data = products.products;
  const current = data.find((x) => x.id === product.id);
  if (current) {
    const { ok } = await fetch(`http://localhost:3000/products/${product.id}`, {
      method: "PUT",
      body: JSON.stringify({ ...product, quantity: current.quantity + 1 }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (ok) dispatch(increaseAmount(product.id));
  } else {
    const response = await fetch("http://localhost:3000/products", {
      method: "POST",
      body: JSON.stringify({ ...product }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) dispatch(addProduct(product));
    const json = await response.json();
    console.log(json);
  }
};

const removeOneProduct = (id) => async (dispatch, getState) => {
  const { products } = getState();
  const data = products.products;
  const current = data.find((x) => x.id === id);

  if (!current) return;

  if (current.quantity > 1) {
    const { ok } = await fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
      body: JSON.stringify({ ...current, quantity: current.quantity - 1 }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (ok) dispatch(decreaseAmount(id));
  } else {
    const { ok } = await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });
    if (ok) dispatch(removeProduct(id));
  }
};

const initProductAsync = () => async (dispatch) => {
  const response = await fetch(`http://localhost:3000/products/`);
  if (!response.ok) return;
  const data = await response.json();
  dispatch(init(data));
};
export { productReducer, pushProduct, removeOneProduct, initProductAsync };
