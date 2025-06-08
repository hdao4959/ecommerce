import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../utils/axios';
import { DataArray } from '@mui/icons-material';
import {formatPrice} from '../utils/formatPrice.js'
const Checkout = () => {
  const {items, fromCart} = useSelector(state => state.checkout);
    console.log(items);
    
  const [listItem, setListItem] = useState([]);


//   console.log("listItem:", listItem);
  
  // let cartItems = useSelector(state => state.cart.items);
  
  const itemMap = items.reduce((acc, item) => {
    acc[item._id.toString()] = item
    return acc
  }, {})

  useEffect(() => {
    (async() => {
      const {data} = await axiosInstance.post('/checkout', {
        cart: JSON.stringify(items)
      })
      setListItem(data.data.items)
    })()
  }, [])
  
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!form.name || !form.phone || !form.address) {
    //   alert("Vui lòng nhập đầy đủ thông tin bắt buộc!");
    //   return;
    // }

    alert('Đặt hàng thành công!');
  };
const total = listItem.reduce((sum, item) => {
  sum = itemMap[item._id].quantity * item.price
  return sum;
}, 0)


  return (
    <div className='container py-4'>
      <h2 className='mb-4'>Thông tin đặt hàng</h2>
      <form className='mb-5'>
        <div className='mb-3'>
          <label className='form-label'>Họ và tên *</label>
          <input
            type='text'
            className='form-control'
            name='name'
            placeholder='Họ và tên'
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Số điện thoại *</label>
          <input
            type='text'
            className='form-control'
            name='phone'
            placeholder='Số điện thoại'
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Email</label>
          <input
            type='email'
            className='form-control'
            name='email'
            placeholder='Email'
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Địa chỉ giao hàng *</label>
          <input
            type='text'
            className='form-control'
            name='address'
            placeholder='Địa chỉ'
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>
      </form>

      <h4>Danh sách sản phẩm:</h4>
      <ul className='list-group mb-3'>
        {listItem.map(item => (
          <li key={item?.variant?.product?._id} className='list-group-item d-flex justify-content-between align-items-center'>
            <div>
              {item?.variant?.product?.name} {item?.variant?.name} {item?.color?.name} <span className='fw-bold'>x{itemMap[item?._id].quantity}</span>
            </div>
            <span className='text-danger fw-bold'>{formatPrice((item.price * itemMap[item?._id].quantity))}</span>
          </li>
        ))}
      </ul>
      <h5>Tổng tiền: {formatPrice(total)}</h5>
       <button  onClick={handleSubmit} type='submit' className='btn btn-primary'>
          Đặt hàng
        </button>
    </div>
  );
};

export default Checkout;
