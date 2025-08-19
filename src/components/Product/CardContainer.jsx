import React, { useEffect, useState } from 'react'
import CardProduct from './CardProduct'
const CardContainer = ({ products }) => {
  const [prd, setPrd] = useState([])
  useEffect(() => {
    if(products){
      setPrd(products)
    }
  }, [products])

  return (
      <div className='card-container my-3'>
        {
          products?.length > 0 && products.map((product, index) =>
              <CardProduct key={index} product={product} setPrd={setPrd}  />
          )
        }
      </div>

  )
}

export default CardContainer
