import { configureStore } from '@reduxjs/toolkit'
import apiReducer from '../features/apiSlice'
import userReducer from '../features/userSlice'
import filterReducer from '../features/filterSlice'
import cartReducer from '../features/cartSlice'
import wishlistReducer from '../features/wishlistSlice'

export const store = configureStore({
  reducer: {
    api: apiReducer,
    filter: filterReducer,
    user: userReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
})

