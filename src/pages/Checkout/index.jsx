import React, { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from '../../utils/formatPrice.js'
import authService from '../../services/authService.js';
import checkoutService from '../../services/checkoutService.js';
import useApi from '../../hooks/useApi.js'
import { ListItemContext } from '../../contexts/CheckoutProviders/ListItemProvider.jsx';
import ListItem from './ListItem.jsx';
import { ItemMapContext } from '../../contexts/CheckoutProviders/ItemMapProvider.jsx';
import FormFields from './FormFields.jsx';
import { FormContext } from '../../contexts/CheckoutProviders/FormProvider.jsx';
import { MarkerContext } from '../../contexts/CheckoutProviders/MarkerProvider.jsx';
const Checkout = () => {
  const { data: dataAccount, fetchApi: fetchAccount } = useApi(authService.getInforAccount)
  const { loading: loadingCheckout, data: dataCheckout, fetchApi: fetchCheckout } = useApi(checkoutService.handleCheckout);
  const { data: dataPreviewCheckout, fetchApi: fetchPreviewCheckout } = useApi(checkoutService.previewCheckout)
  const { listItem, setListItem } = useContext(ListItemContext);
  const { itemMap, setItemMap } = useContext(ItemMapContext);
  const { marker } = useContext(MarkerContext)

  const { form, setForm } = useContext(FormContext)
  const [totalPrice, setTotalPrice] = useState(0)

  const { items } = useSelector(state => state.checkout);
  // useEffect(() => {
  //   generateReCaptcha()
  // }, []);

  useEffect(() => {
    if (items?.length) {
      const itemMap = items.reduce((acc, item) => {
        acc[item._id.toString()] = item
        return acc
      }, {})
      setItemMap(itemMap)
    }
  }, [items])


  useEffect(() => {
    if (listItem?.length) {
      const totalPrice = listItem.reduce((sum, item) => {
        sum += itemMap[item._id].quantity * item.price
        return sum;
      }, 0)
      setTotalPrice(totalPrice)
    }
  }, [listItem])

  const handleSubmit = async (e) => {
    if(loadingCheckout) return 
    e.preventDefault();
    if (!form.name || !form.phoneNumber || !form.provinceCode || !form.districtCode || !form.wardCode ||!form.addressDetail) {
      alert("Vui lòng nhập đầy đủ thông tin bắt buộc!");
      return;
    }

    if (!form?.firebaseToken) {
      alert("Bạn chưa xác thực số điện thoại")
      return;
    }

    if (!marker?.lat || !marker?.lng) {
      alert("Bạn chưa cung cấp chính xác địa chỉ")
    }

    fetchCheckout({
      ...form,
      ...marker,
      amount: totalPrice
    })
  };

  useEffect(() => {
    if (dataCheckout?.vnpUrl) {
      window.location.href = dataCheckout.vnpUrl;
    }
  }, [dataCheckout])


  useEffect(() => {
    fetchPreviewCheckout(items)
    if (authService.getToken()) {
      fetchAccount()
    }
  }, [])

  useEffect(() => {
    if (dataAccount?.account) {
      const account = dataAccount.account
      setForm({
        name: account.name || '',
        phoneNumber: account.phoneNumber || '',
        email: account.email || '',
        province: '',
        district: '',
        ward: '',
        note: '',
        items: items
      })
    }
  }, [dataAccount, items])

  useEffect(() => {
    if (dataPreviewCheckout?.items) {
      setListItem(dataPreviewCheckout.items)
    }
  }, [dataPreviewCheckout])





  return (
    <div className='container py-4'>
      <FormFields />
      <ListItem />
      <h5>Tổng tiền: {formatPrice(totalPrice)}</h5>
      <button onClick={handleSubmit} type='submit' disabled={loadingCheckout} className='btn btn-primary'> Đặt hàng </button>
    </div>
  );
};

export default Checkout;
