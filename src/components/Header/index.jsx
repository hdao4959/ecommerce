import React from 'react'
import "../../Style/Css/Header.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
const Header = () => {
  return (

    <header className='row row-cols-2 row-cols-md-3 align-items-center px-3 px-sm-4 px-md-5'>
      <Link id='logo' to={"/"} className='text-decoration-none'> HairPhones</Link>
      <form action="" id='form-search'>
        <input type="text" placeholder='Bạn cần tìm gì?' />
      </form>
      <div  className='text-end d-none d-md-block align-items-center' >
        <button className='btn button-header bg-light'><span><AddShoppingCartIcon/></span></button>
        <button className='btn button-header button-signin bg-light'><span>Đăng nhập</span></button>
      </div>
    </header>
  )
}


export default Header
