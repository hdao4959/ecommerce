import { createSlice } from "@reduxjs/toolkit"
import authService from "../../services/authService"

const initialState = JSON.parse(sessionStorage.getItem('account')) || null
const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    loginWithGoogle: (state, action) => {
      authService.saveAccount(action.payload?.account)
      authService.saveToken(action.payload?.token)
      return action.payload
    },
    logout: (state, action) => {
      authService.removeAccount();
      authService.removeToken()
      return null
    }
  }
})

export const {loginWithGoogle, logout} = accountSlice.actions
export default accountSlice.reducer