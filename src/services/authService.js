import axiosInstance from "../utils/axios";

const getAccount = () =>{
  return localStorage.getItem('account') || null
}

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

const getAccountByGoogleId = async (googleId) => {
  if(!googleId) return null
  const {data} = await axiosInstance.post('/auth/account', {
          googleId: googleId
        })
  return data.data.account
}


export default {
  loginWithGoogle, saveAccount, removeAccount, getAccount, getAccountByGoogleId
}