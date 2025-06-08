import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice.js'
import checkoutReducer from "./slices/checkoutSlice.js";
import accountReducer from './slices/accountSlice.js'
export const store = configureStore({
  reducer:{
    account: accountReducer,
    cart: cartReducer,
    checkout: checkoutReducer
  }
})

