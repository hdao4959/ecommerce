import React from 'react'
import Cart from "../pages/Cart.jsx"
import Checkout from '../pages/Checkout/index.jsx'
import CheckoutProviders from '../contexts/CheckoutProviders/index.jsx'

const cartRoutes = [
  {
    path: '/cart', element: <Cart />
  },
  {
    path: '/checkout', element: (
      <CheckoutProviders>
        <Checkout />
      </CheckoutProviders>
    )
  }
]

export default cartRoutes
