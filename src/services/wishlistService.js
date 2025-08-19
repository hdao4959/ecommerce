import axiosInstance from '../utils/axios.jsx'

const add = (productId) => {
  return axiosInstance.post('/wishlist/', {
    productId
  })
}

export default {
  add
}