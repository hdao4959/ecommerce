import axios from 'axios'
import env from '../config/env.js'
import authService from '../services/authService.js'
const axiosInstance = axios.create({
  baseURL: env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
})

axiosInstance.interceptors.request.use((config) => {
  const token = authService.getToken()
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default axiosInstance