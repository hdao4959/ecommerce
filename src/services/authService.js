import axiosInstance from "../utils/axios";

const getAccount = () => {
  return sessionStorage.getItem('account') || null
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

const getAccountByGoogleId = async (googleId) => {
  if (!googleId) return null
  const { data } = await axiosInstance.post('/auth/account', {
    googleId: googleId
  })
  return data.data.account
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
  getAccountByGoogleId,
  register,
  removeToken,
  login,
  saveToken
}