import React from 'react'

const LoadMore = ({quantity, handleLoadMore}) => {
  return (
    <div className='text-center' >
        <button onClick={() => handleLoadMore(quantity)} className='button-load-more '>
          <span>Xem thêm {quantity} sản phẩm <i className="fa-solid fa-caret-down"></i></span>
          </button>
      </div>
  )
}

export default LoadMore
