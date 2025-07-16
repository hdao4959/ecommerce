import React, { useState } from 'react'
import { mockData } from '../data/mock-data'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { formatPrice } from '../utils/formatPrice';
import { useEffect } from 'react';
import axiosInstance from '../utils/axios';
import env from '../config/env';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantityItem, increaseQuantityItem, removeFromCart } from '../redux/slices/cartSlice';
import { checkoutFromCart } from '../redux/slices/checkoutSlice';
const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [itemsCart, setItemsCart] = useState([]);
  const cart = useSelector(state => state.cart.items);

  const [cartMap, setCartMap] = useState({});


  const handleIncreaseQuantityItem = (idItem) => {
    dispatch(increaseQuantityItem(idItem))
  }
  const handleDecreaseQuantityItem = (idItem) => {
    dispatch(decreaseQuantityItem(idItem))
  }



  const handleRemoveItem = (idItem) => {
    dispatch(removeFromCart(idItem))
  }

  const handleCheckout = () => {
    dispatch(checkoutFromCart(cart))
    navigate('/checkout')
  }

  const fetchCart = async () => {
    if (cart?.length != 0) {
      try {
        const { data } = await axiosInstance.post('/cart', {
          cart: JSON.stringify(cart)
        });
        setItemsCart(data.data.items);
      } catch (error) {
        console.log(error);
      }
    } else {
      setItemsCart([]);
    }
  }
  useEffect(() => {
    setCartMap(cart.reduce((acc, c) => {
      acc[c._id.toString()] = c;
      return acc
    }, {}))
    fetchCart();
  }, [cart])

  let totalPrice = 0
  return (
    <div className='d-flex justify-content-center' >

      <div className='cart mt-2 col-lg-7 text-center h-100'>

        <div className='cart-header'>
          <h4>Giỏ hàng của bạn</h4>
        </div>
        {
          
            itemsCart && itemsCart.length != 0 ?
              (<>
                <div className='cart-body p-3 border border-3 rounded-3 bg-light' style={{ maxHeight: "350px", overflowY: 'auto' }}>
                  {
                    itemsCart.map((item, index) => {
                      totalPrice += item.price * cartMap[item._id]?.quantity
                      return (
                        <div key={index} className='cart-item row row-cols-2'>
                          <div className='col-2'>
                            <img style={{ width: '70px' }} src={`${env.VITE_SERVER_BASE_URL}${item.img}`} alt="" />
                          </div>
                          <div className='col-9'>

                            <div className='d-flex justify-content-between'>
                              <h4 className='text-truncate'>{item?.variant?.product?.name} {item?.variant?.name} {item?.color?.name}</h4>
                            </div>
                            <div className='d-flex justify-content-between'>
                              <p className='text-danger'>{formatPrice(item.price)}</p>
                              <p><button onClick={() => handleDecreaseQuantityItem(item._id)} className='btn btn-md border'>-</button>
                                <button className='btn'>{cartMap[item._id]?.quantity}</button>
                                <button onClick={() => handleIncreaseQuantityItem(item._id)} className='btn btn-md border'>+</button>
                              </p>
                            </div>
                          </div>
                          <div className='col-1 d-flex justify-content-center align-items-center'>
                            <button onClick={() => handleRemoveItem(item._id)} className='btn text-danger'><DeleteOutlineIcon /></button>

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
                    <button onClick={() => handleCheckout()} className='btn btn-danger '>Mua ngay</button>
                  </div>
                </div>
              </>) : (
                <>
                  <img width={300} src={`${env.VITE_CLIENT_BASE_URL}/empty-cart-7359557-6024626.jpg`} alt="" />
                  <p>Không có sản phẩm nào trong giỏ hàng</p>
                  <Link to="/">Trang chủ</Link>
                </>
              )

        }


      </div>
    </div>
  )
}

export default Cart
