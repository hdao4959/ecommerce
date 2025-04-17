import React from 'react'
import "../../Style/Css/Header.css"
const Header = () => {
  return (

    <header>
      <span id='logo'>HairPhones</span>
      <form action="" id='form-search'>
        <input type="text" placeholder='Bạn cần tìm gì?' />
      </form>
      <div id='header-right'>
        <button className='button-header'>Giỏ hàng</button>
        <button className='button-header'>Đăng nhập</button>

      </div>
    </header>
  )
}


export default Header
