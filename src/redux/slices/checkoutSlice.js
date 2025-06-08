import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState: {
    items: [],
    fromCart: false,
  },
  reducers: {
    setCheckoutItems: (state, action) =>{
      state.items = action.payload;
      state.fromCart = false;
    },
    checkoutFromCart: (state, action) => {
      state.items = action.payload;
      state.fromCart = true;
    },
    clearCheckout: (state, action)=> {
      state.items = [];
      state.fromCart = false;
    }
  }
})

export const {setCheckoutItems, checkoutFromCart, clearCheckout} = checkoutSlice.actions

export default checkoutSlice.reducer

