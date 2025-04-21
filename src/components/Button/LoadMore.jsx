import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const LoadMore = ({quantity}) => {
  return (
    <div className='text-center' >
        <button className='button-load-more '>
          <span>Xem thêm {quantity} sản phẩm <ArrowDropDownIcon/></span>
          </button>
      </div>
  )
}

export default LoadMore
