import React from 'react'
import { mockData } from '../../data/mock-data'
import CardProduct from './CardProduct'

const SpecialProducts = () => {
  return (
    <section className='my-3'>
      <h3>Điện thoại nổi bật nhất</h3>
      <div id='section_products'>
        {
          mockData.products.map((product) =>
            <>
            <CardProduct product={product}/>
            <CardProduct product={product}/>
            <CardProduct product={product}/>
            <CardProduct product={product}/>
            <CardProduct product={product}/>
            </>
          )
        }


      </div>

    </section>
  )
}

export default SpecialProducts
