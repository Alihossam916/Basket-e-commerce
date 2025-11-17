import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
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
      } else {
        // New product, add with quantity 1
        state.items[productId] = {
          ...action.payload,
          quantity: 1
        };
      }
    },
    removeItem: (state, action) => {
      const productId = action.payload.id;
      if (state.items[productId]) {
        if (state.items[productId].quantity > 1) {
          // Decrease quantity
          state.items[productId].quantity -= 1;
        } else {
          // Remove item completely when quantity reaches 0
          delete state.items[productId];
        }
      }
    },
    clearItem: (state, action) => {
      const productId = action.payload.id;
      delete state.items[productId];
    },
  },
});
export const { addItem, removeItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;
