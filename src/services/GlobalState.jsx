import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  cartItem: [],
  qty: 0,
  totalPrice: 0,
};

const GlobalState = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.product = payload;
    },

    addToCart: (state, { payload }) => {
      const check = state.cartItem.findIndex((el) => el.id === payload.id);

      if (check >= 0) {
        state.cartItem[check].qty += 1;
      } else {
        state.cartItem.push({ ...payload, qty: 1 });
      }

      state.qty += 1;
      state.totalPrice += state.qty * payload.price;
    },

    removeCart: (state, { payload }) => {
      const check = state.cartItem.findIndex((el) => el.id === payload.id);

      if (state.cartItem[check].qty > 1) {
        state.cartItem[check].qty -= 1;
      } else {
        state.cartItem = state.cartItem.filter((el) => el.id !== payload.id);
      }
      state.qty -= 1;
      state.totalPrice -= payload.price;
    },
    removeFromCart: (state, { payload }) => {
      state.cartItem = state.cartItem.filter((el) => el.id !== payload.id);
    },

    removeAllCart: (state) => {
      state.cartItem = [];
      state.qty = 0;
    },

    signOut: (state) => {
      state.user = null;
    },
  },
});

export const {
  signOut,
  addProduct,
  addToCart,
  removeCart,
  removeAllCart,
  removeFromCart,
} = GlobalState.actions;

export default GlobalState.reducer;
