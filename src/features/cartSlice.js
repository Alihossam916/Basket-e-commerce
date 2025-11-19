import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const productId = action.payload.id;
      if (state.items[productId]) {
        // Product exists, increment quantity
        state.items[productId].quantity += 1;
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      } else {
        // New product, add with quantity 1
        state.items[productId] = {
          ...action.payload,
          quantity: 1
        };
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },
    removeItem: (state, action) => {
      const productId = action.payload.id;
      if (state.items[productId]) {
        if (state.items[productId].quantity > 1) {
          // Decrease quantity
          state.items[productId].quantity -= 1;
          localStorage.setItem("cartItems", JSON.stringify(state.items));
        } else {
          // Remove item completely when quantity reaches 0
          delete state.items[productId];
          localStorage.setItem("cartItems", JSON.stringify(state.items));
        }
      }
    },
    clearItem: (state, action) => {
      const productId = action.payload.id;
      delete state.items[productId];
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
  },
});
export const { addItem, removeItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;
