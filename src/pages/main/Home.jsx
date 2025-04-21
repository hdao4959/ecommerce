import React from 'react'
import CardContainer from '../../components/Product/CardContainer'
import "../../Style/Css/CardProduct.css"
import { mockData } from '../../data/mock-data'
import LoadMore from '../../components/Button/LoadMore'

const Home = () => {
  return (
    <>
    <section id='section-outstanding-products' className='my-3'>
      <h2>Điện thoại nổi bật nhất</h2>
      <CardContainer products={mockData.products} />
      <LoadMore quantity={20}/>
    </section>
    <section id='section-outstanding-products' className='my-3'>
      <h2>Điện thoại nổi bật nhất</h2>
      <CardContainer products={mockData.products} />
      <LoadMore quantity={20}/>

    </section>
    </>

  )
}

export default Home
