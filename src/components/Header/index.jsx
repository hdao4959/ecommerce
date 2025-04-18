import React from 'react'
import "../../Style/Css/Header.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Header = () => {
  return (

    <header>
      <span id='logo'>HairPhones</span>
      <form action="" id='form-search'>
        <input type="text" placeholder='Bạn cần tìm gì?' />
      </form>
      <div id='header-right'>
        <button className='button-header'><span><AddShoppingCartIcon/> Giỏ hàng</span></button>
        <button className='button-header button-signin'><span>Đăng nhập</span></button>

      </div>
    </header>
  )
}


export default Header
