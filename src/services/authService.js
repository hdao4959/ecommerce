import axiosInstance from "../utils/axios";

const loginWithGoogle = async (credential) => {
  if(!credential) return
  const {data} = await axiosInstance.post('/auth/google', {token: credential})
  return data.data.account
}
const saveAccount = (data) => {
  if(!data) return
  const value = typeof data == "object" ?  JSON.stringify(data) : data
  localStorage.setItem('account', value)
}
const removeAccount = () => {
  localStorage.removeItem('account')
}

export default {
  loginWithGoogle, saveAccount, removeAccount
}