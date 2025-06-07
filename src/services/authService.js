const login = (account) => {
   localStorage.setItem('account', JSON.stringify(account))
   window.location.href = "/";
}

const logout = () => {
  localStorage.removeItem('account')
   window.location.href = "/login";
}
export default {
  login, logout
}