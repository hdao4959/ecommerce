import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const LoadMore = ({quantity, handleLoadMore}) => {
  return (
    <div className='text-center' >
        <button onClick={() => handleLoadMore(quantity)} className='button-load-more '>
          <span>Xem thêm {quantity} sản phẩm <ArrowDropDownIcon/></span>
          </button>
      </div>
  )
}

export default LoadMore
