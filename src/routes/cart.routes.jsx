import React from 'react'
import Cart from "../pages/Cart.jsx"
import Checkout from '../pages/Checkout.jsx'

const cartRoutes = [
  {
    path: '/cart', element: <Cart/>
  },
  {
    path: '/checkout', element: <Checkout/>
  }
]

export default cartRoutes
