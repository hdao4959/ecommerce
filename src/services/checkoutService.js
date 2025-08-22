import axiosInstance from "../utils/axios";

const saveCheckoutState = (state) => {
  localStorage.setItem('checkout', JSON.stringify(state))
}

const loadCheckoutState = () => {
  const checkout = localStorage.getItem('checkout');
  return JSON.parse(checkout)
}

const previewCheckout = async (items) => {
  const responseCheckout = await axiosInstance.post('/checkout', {
    cart: JSON.stringify(items)
  })

  return responseCheckout
}

const handleCheckout =  (data) => {
    data = {
      ...data, 
      bankCode: '',
      orderDescription: '',
      orderType: 'other',
      language: ''
    }
    return axiosInstance.post('create_payment_url', data);
}
export default {
  saveCheckoutState, loadCheckoutState, previewCheckout, handleCheckout
}