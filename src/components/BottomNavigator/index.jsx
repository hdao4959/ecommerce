import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import InfoIcon from '@mui/icons-material/Info';
const BottomNavigator = () => {
  return (
    <div id='bottom-navigator' className='d-md-none'>
      {/* <div id='bottom-nav-items'> */}
      <div id='bottom-nav-items'>
        <div className='item-nav col'>
          <HomeIcon className='nav-icon' />
          Trang chủ
        </div>
        <div className='item-nav col'>
          <ArticleIcon className='nav-icon' />
          Danh mục
        </div>
        <div className='item-nav col'>
          <InfoIcon className='nav-icon' />
          Cửa hàng
        </div>
        <div className='item-nav col'>
          <AccountCircleIcon className='nav-icon' />
          Đăng nhập
        </div>
        <div className='item-nav col'>
          <MoreHorizIcon className='nav-icon' />
          Xem thêm
        </div>
      </div>
    </div>
  )
}

export default BottomNavigator
