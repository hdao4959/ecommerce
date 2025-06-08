import { createSlice } from "@reduxjs/toolkit"
import authService from "../../services/authService"

const initialState = JSON.parse(localStorage.getItem('account')) || null
const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem('account', JSON.stringify(action.payload))
      return action.payload
    },
    logout: (state, action) => {
      authService.removeAccount();
      return null
    }
  }
})

export const {login, logout} = accountSlice.actions
export default accountSlice.reducer