import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import InfoIcon from '@mui/icons-material/Info';
const BottomNavigator = () => {
  return (
    <div id='bottom-navigator'>
      <div id='bottom-nav-items'>
        <div className='item-nav'>
          <HomeIcon className='nav-icon' />
          Trang chủ
        </div>
        <div className='item-nav'>
          <ArticleIcon className='nav-icon' />
          Danh mục
        </div>
        <div className='item-nav'>
          <InfoIcon className='nav-icon' />
          Cửa hàng
        </div>
        <div className='item-nav'>
          <AccountCircleIcon className='nav-icon' />
          Đăng nhập
        </div>
        <div className='item-nav'>
          <MoreHorizIcon className='nav-icon' />
          Xem thêm
        </div>
      </div>
    </div>
  )
}

export default BottomNavigator
