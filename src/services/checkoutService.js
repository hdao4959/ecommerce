const saveCheckoutState = (state) => {
  localStorage.setItem('checkout', JSON.stringify(state))
}

const loadCheckoutState = () => {
    const checkout = localStorage.getItem('checkout') ;
    return JSON.parse(checkout)
}

export default {
  saveCheckoutState, loadCheckoutState
}