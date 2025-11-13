import { configureStore } from '@reduxjs/toolkit'
import apiReducer from '../features/apiSlice'
import userReducer from '../features/userSlice'

export const store = configureStore({
  reducer: {
    api: apiReducer,
    user: userReducer,
  },
})

