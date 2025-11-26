import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("wishlist")) || {},
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToList(state, action) {
      const productId = action.payload.id;
      state.items[productId] = action.payload;      
      localStorage.setItem("wishlist", JSON.stringify(state.items));
    },
    removeFromList(state, action) {
      const productId = action.payload.id;
      delete state.items[productId];
      localStorage.setItem("wishlist", JSON.stringify(state.items));
    },
    clearList(state) {
      state.items = {};
      localStorage.setItem("wishlist", JSON.stringify(state.items));
    },
  },
});
export const { addToList, removeFromList, clearList } = wishlistSlice.actions;

export default wishlistSlice.reducer;
