import React from 'react'
import CardContainer from '../../components/Product/CardContainer'
import "../../Style/Css/CardProduct.css"
import { mockData } from '../../data/mock-data'

const Home = () => {
  return (
    <>
    <section id='section-outstanding-products' className='my-3'>
      <h2>Điện thoại nổi bật nhất</h2>
      <CardContainer products={mockData.products} />
    </section>
    <section id='section-outstanding-products' className='my-3'>
      <h2>Điện thoại nổi bật nhất</h2>
      <CardContainer products={mockData.products} />
    </section>
    </>

  )
}

export default Home
