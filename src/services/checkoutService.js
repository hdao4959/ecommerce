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

const handleCheckout = async (data) => {
  try {
    data = {
      ...data, 
      bankCode: '',
      orderDescription: 'Thanh toán đơn hàng',
      orderType: 'other',
      language: ''
    }
    const response = await axiosInstance.post('create_payment_url', data);
    return response.data
  } catch (error) {
    console.log(error);

  }

}
export default {
  saveCheckoutState, loadCheckoutState, previewCheckout, handleCheckout
}