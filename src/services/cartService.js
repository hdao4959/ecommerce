
const getCart = () => {
  const cart = localStorage?.getItem('cart') || [];
  return cart
}

const saveCart = (data) => {
  if (typeof data == 'object') {
    data = JSON.stringify(data);
  }
  localStorage.setItem('cart', data)
}

export default {
  getCart, saveCart 
}