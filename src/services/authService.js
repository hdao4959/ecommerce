import axiosInstance from "../utils/axios";

const getAccount = () => {
  return sessionStorage.getItem('account') || null
}

const getToken = () => {
  return sessionStorage.getItem('token') || null
}

const loginWithGoogle = (credential) => {
  if (!credential) return
  return axiosInstance.post('/auth/google', { token: credential })
}

const saveAccount = (data) => {
  if (!data) return
  const value = typeof data == "object" ? JSON.stringify(data) : data
  sessionStorage.setItem('account', value)
}
const removeAccount = () => {
  sessionStorage.removeItem('account')
}

const removeToken = () => {
  sessionStorage.removeItem('token')
}

const saveToken = (token) => {
  sessionStorage.setItem('token', token)
}

const getInforAccount = () => {
  return axiosInstance.get('/auth/info')
}



const register = (data) => {
  if (!data) return
  return axiosInstance.post('/auth/register', data)
}

const login = (data) => {
  if (!data) return
  return axiosInstance.post('/auth/login', data)
}

export default {
  loginWithGoogle,
  saveAccount,
  removeAccount,
  getAccount,
  register,
  removeToken,
  login,
  saveToken,
  getToken,
  getInforAccount
}