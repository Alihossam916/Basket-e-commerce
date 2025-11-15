import { configureStore } from '@reduxjs/toolkit'
import apiReducer from '../features/apiSlice'
import userReducer from '../features/userSlice'
import filterReducer from '../features/filterSlice'

export const store = configureStore({
  reducer: {
    api: apiReducer,
    filter: filterReducer,
    user: userReducer,
  },
})

