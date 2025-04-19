import React from 'react'
import { formatPrice } from '../../../utils/formatPrice'

const ButtonColor = ({ data , active, onClick}) => {
  
  return (
    <>
      <button onClick={onClick}
       className={`btn border ${active ? 'border-danger' : ''} col-3 col-md-4 d-flex justify-content-start p-1`}>
        <div className='align-content-center'>
          <img width={"40px"} src={data.img_thumbnail} alt="" />
        </div>
        <div className='d-flex flex-column mx-1'>
          <span className='fw-bold'>{data.name}</span>
          <span className='price-product-variant'>{formatPrice(data.price)}</span>
        </div>
      </button>
    </>
  )
}

export default ButtonColor
