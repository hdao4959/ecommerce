import React from 'react'
import CardProduct from './CardProduct'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const CardContainer = ({ products }) => {
  return (
    <>
      {/* <div className='card-container row g-1 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6' > */}
      <div className='card-container'>
        {
          products.map((product) =>
            <>
              <CardProduct product={product} />
              <CardProduct product={product} />
              <CardProduct product={product} />
              <CardProduct product={product} />
              <CardProduct product={product} />
            </>
          )
        }


      </div>
      <div className='text-center' >
        <button className='button-load-more'>
          <span>Xem thêm 20 sản phẩm <ArrowDropDownIcon/></span>
          </button>
      </div>
    </>

  )
}

export default CardContainer
