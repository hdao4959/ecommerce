import React, { useState } from 'react'
import { mockData } from '../data/mock-data'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { formatPrice } from '../utils/formatPrice';
const Cart = () => {
  const cart = mockData.orders[0].order_products
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
            cart.map((c, index) => {
              totalPrice += c.price * c.quantity
              return (
                <>
                  <div key={index} className='cart-item row row-cols-2'>
                    <div className='col-2'>
                      <img style={{ width: '70px' }} src={`${c.img_thumbnail}`} alt="" />
                    </div>
                    <div className='col-10'>
                      <div className='d-flex justify-content-between'>
                        <h4>{c.productLine} {c.variant} {c.color}</h4>
                        <button className='btn'><DeleteOutlineIcon /></button>
                      </div>
                      <div className='d-flex justify-content-between'>
                        <p className='text-danger'>{formatPrice(c.price)}</p>
                        <p><button className='btn btn-md border'>-</button>
                          <button className='btn '>{c.quantity}</button>
                          <button className='btn btn-md border'>+</button>
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )
            }
            )
          }
        </div>

        <div className='cart-footer row row-cols-2 my-2'>
          <div className='col-9 text-start'>
            Tạm tính: {formatPrice(totalPrice)}
          </div>
          <div className='col-3 text-end '>
            <button className='btn btn-danger '>Mua ngay</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
