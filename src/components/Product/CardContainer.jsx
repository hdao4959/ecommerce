import React from 'react'
import CardProduct from './CardProduct'
const CardContainer = ({ products }) => {

  return (
      <div className='card-container'>
        {
          products.map((product, index) =>
              <CardProduct key={index} product={product} />
             
          )
        }
      </div>

  )
}

export default CardContainer
