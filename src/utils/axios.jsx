import axios from 'axios'
import env from '../config/env.js'
const axiosInstance = axios.create({
  baseURL: env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
})

export default axiosInstance