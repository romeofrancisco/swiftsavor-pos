import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth/authSlice'
import productsReducer from './slices/products/productSlice'
import categoriesReducer from './slices/categories/categorySlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    categories: categoriesReducer,
  }
})