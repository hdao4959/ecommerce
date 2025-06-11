import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axiosInstance from '../utils/axios';
import { formatPrice } from '../utils/formatPrice.js'
import authService from '../services/authService.js';
import addressService from '../services/addressService.js';
import checkoutService from '../services/checkoutService.js';
const Checkout = () => {
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const { sub: googleId } = JSON.parse(authService.getAccount());
  const { items } = useSelector(state => state.checkout);
  const [listItem, setListItem] = useState([]);
  const [form, setForm] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    province: '',
    district: '',
    ward: '',
    note: '',
    items: items,
  });

  const itemMap = items.reduce((acc, item) => {
    acc[item._id.toString()] = item
    return acc
  }, {})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    switch (name) {
      case 'province': {
        setDistricts([]);
        setWards([]);
        loadDistricts(value);
        break;
      }
      case 'district': {
        setWards([]);
        loadWards(value)
        break;
      }
      default: {

      }
    }

  };

  const loadDistricts = async (idProvince) => {
    const responseDistricts = await addressService.getDistrictsByProvince(idProvince);
    setDistricts(responseDistricts.data)
  }
  const loadWards = async (idDistrict) => {
    const responseWards = await addressService.getWardsByDistrict(idDistrict);
    setWards(responseWards.data)
  }


  const totalPrice = listItem.reduce((sum, item) => {
    sum = itemMap[item._id].quantity * item.price
    return sum;
  }, 0)


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phoneNumber || !form.province || !form.district || !form.ward) {
      alert("Vui lòng nhập đầy đủ thông tin bắt buộc!");
      return;
    }
    const responseHandleCheckout = await checkoutService.handleCheckout({
      ...form,
      amount: totalPrice
    })
    if (responseHandleCheckout && responseHandleCheckout.data.vnpUrl) {
      window.location.href = responseHandleCheckout.data.vnpUrl;
    }

  };




  useEffect(() => {
    (async () => {
      try {
        const responseCheckout = await checkoutService.previewCheckout(items)
        setListItem(responseCheckout.data.data.items)

        const responseProvinces = await addressService.getProvinces();
        setProvinces(responseProvinces.data)

        const account = await authService.getAccountByGoogleId(googleId)
        setForm(
          {
            name: account.name || '',
            phoneNumber: account.phoneNumber || '',
            email: account.email || '',
            province: '',
            district: '',
            ward: '',
            note: '',
            items: items
          }
        )
      } catch (error) {
        console.log(error);
      }
    })()
  }, [])



  return (
    <div className='container py-4'>
      <h2 className='mb-4'>Thông tin đặt hàng</h2>
      <form className='mb-5'>
        <div className='mb-3'>
          <label className='form-label'>Họ và tên *</label>
          <input type='text' className='form-control' name='name' placeholder='Họ và tên'
            value={form.name} onChange={handleChange} required />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Số điện thoại *</label>
          <input type='text' className='form-control' name='phoneNumber' placeholder='Số điện thoại'
            value={form.phoneNumber} onChange={handleChange} required />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Email</label>
          <input type='email' className='form-control' name='email' placeholder='Email'
            value={form.email} onChange={handleChange} />
        </div>


        <div className='mb-3 row row-cols-3' >
          <div className='col'>
            <label className='form-label'>Thành phố *</label>
            <select className='form-control' name="province" id="" value={form.province} onChange={handleChange}>
              <option value="">--Chọn Thành phố--</option>
              {
                provinces && provinces.length > 0 && provinces.map(province => (
                  <option key={province._id} value={province.code}>{province.name}</option>
                ))
              }
            </select>
          </div>
          <div className='col'>
            <label className='form-label'>Quận/huyện *</label>
            <select className='form-control' name="district" id="" value={form.district} onChange={handleChange}>
              <option value="">--Chọn Quận/Huyện</option>
              {
                districts && districts.length > 0 && districts.map(district => (
                  <option key={district._id} value={district.code}>{district.name}</option>
                ))
              }
            </select>
          </div>
          <div className='col'>
            <label className='form-label'>Phường/Thị xã *</label>
            <select className='form-control' name="ward" id="" value={form.ward} onChange={handleChange}>
              <option value="">--Chọn Phường/Thị xã</option>
              {wards && wards.length > 0 && wards.map(ward => (
                <option key={ward._id} value={ward.code}>{ward.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className='mb-3'>
          <label className='form-label'>Ghi chú</label>
          <textarea style={{ width: "100%", height: "100px" }} className='form-control' name="note" onChange={handleChange} id=""></textarea>
        </div>


      </form>

      <h4>Danh sách sản phẩm:</h4>
      <ul className='list-group mb-3'>
        {listItem.map(item => (
          <li key={item?._id} className='list-group-item d-flex justify-content-between align-items-center'>
            <div>
              {item?.variant?.product?.name} {item?.variant?.name} {item?.color?.name} <span className='fw-bold'>x{itemMap[item?._id].quantity}</span>
            </div>
            <span className='text-danger fw-bold'>{formatPrice((item.price * itemMap[item?._id].quantity))}</span>
          </li>
        ))}
      </ul>
      <h5>Tổng tiền: {formatPrice(totalPrice)}</h5>
      <button onClick={handleSubmit} type='submit' className='btn btn-primary'> Đặt hàng </button>
    </div>
  );
};

export default Checkout;
