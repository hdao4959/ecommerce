import React, { useState } from 'react'
import { mockData } from '../data/mock-data'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { formatPrice } from '../utils/formatPrice';
import { useEffect } from 'react';
import axiosInstance from '../utils/axios';
import env from '../config/env';
const Cart = () => {
  const [itemsCart, setItemsCart] = useState([]);

  const cart = localStorage.getItem('cart');
  const cartMap = JSON.parse(cart).reduce((acc, c) => {
    acc[c._id.toString()] = c;
    return acc
  }, {})


  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosInstance.post('/cart', { cart });
        setItemsCart(data.data.items);
      } catch (error) {
        console.log(error);
      }
    })()
  }, [cart])

  // let  [totalPrice, setTotalPrice] = useState(0);
  let totalPrice = 0
  return (
    <div className='d-flex justify-content-center' >

      <div className='cart mt-2 col-lg-7 text-center h-100'>

        <div className='cart-header'>
          <h4>Giỏ hàng của bạn</h4>
        </div>
        <div className='cart-body p-3 border border-3 rounded-3 bg-light' style={{ maxHeight: "350px", overflowY: 'auto' }}>

          {
            itemsCart.map((item, index) => {
              totalPrice += item.price * cartMap[item._id]?.quantity
              return (
                <div key={index} className='cart-item row row-cols-2'>
                  <div className='col-2'>
                    <img style={{ width: '70px' }} src={`${env.VITE_SERVER_BASE_URL}${item.img}`} alt="" />
                  </div>
                  <div className='col-10'>
                    <div className='d-flex justify-content-between'>
                      <h4 className='text-truncate'>{item?.variant?.product?.name} {item?.variant?.name} {item?.color?.name}</h4>
                      <button className='btn'><DeleteOutlineIcon /></button>
                    </div>
                    <div className='d-flex justify-content-between'>
                      <p className='text-danger'>{formatPrice(item.price)}</p>
                      <p><button className='btn btn-md border'>-</button>
                        <button className='btn '>{cartMap[item._id]?.quantity}</button>
                        <button className='btn btn-md border'>+</button>
                      </p>
                    </div>
                  </div>
                </div>
              )
            }
            )
          }
        </div>

        <div className='cart-footer row row-cols-2 my-2'>
          <div className='col-6 text-start'>
            Tạm tính: <span className='text-danger fw-bold'>{formatPrice(totalPrice)}</span>
          </div>
          <div className='col-6 text-end '>
            <button className='btn btn-danger '>Mua ngay</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
