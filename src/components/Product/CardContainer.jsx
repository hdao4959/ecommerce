import React from 'react'
import CardProduct from './CardProduct'
const CardContainer = ({ products }) => {
  return (
    <>
      {/* <div className='card-container row g-1 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6' > */}
      <div className='card-container'>
        {
          products.map((product, index) =>
              <CardProduct key={index} product={product} />
             
          )
        }
      </div>
    
    </>

  )
}

export default CardContainer
