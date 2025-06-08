import { createSlice } from "@reduxjs/toolkit"
import cartService from "../../services/cartService"

const initialState = {
  items: JSON.parse(cartService.getCart())
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existItemId = state.items.find(item => item._id == action.payload._id)
      if (existItemId) {
        state.items = state.items.map(item => {
          if (item._id == action.payload._id) {
            return ({
              ...item,
              quantity: item.quantity + 1
            })
          } else {
            return item
          }
        })
      } else {
        state.items.push(action.payload)
      }
      cartService.saveCart(state.items)
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item._id != action.payload);
      cartService.saveCart(state.items)
    },
    increaseQuantityItem: (state, action) => {
      state.items = state.items.map(item => {
        return item._id == action.payload ? ({
          ...item,
          quantity: item.quantity + 1
        }) : item
      })
      cartService.saveCart(state.items)


    },
    decreaseQuantityItem: (state, action) => {
      state.items = state.items.map(item => {
        if (item._id == action.payload) {
          if (item.quantity == 1) {
            return item
          }
          return ({
            ...item, quantity: item.quantity - 1
          })
        }
        return item
      })
      cartService.saveCart(state.items)
    }
  }
})
export const {
  addToCart, removeFromCart, increaseQuantityItem, decreaseQuantityItem
} = cartSlice.actions
export default cartSlice.reducer

