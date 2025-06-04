import React, { useEffect, useState } from 'react'
import CardContainer from '../components/Product/CardContainer'
import "../Style/Css/CardProduct.css"
import { mockData } from '../data/mock-data'
import LoadMore from '../components/Button/LoadMore'
import Menu from '../components/Menu'
import axiosInstance from '../utils/axios'
const Home = () => {
  const categories = mockData.categories;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const {data} = await axiosInstance.get('/');
        setProducts(data.data.products)
      } catch (error) {
        console.log(error);
      }

    })()
  }, [])
  return (
    <>
      <Menu categories={categories} />

      <section id='section-outstanding-products' className='my-3'>
        <h2>Điện thoại nổi bật nhất</h2>
        <CardContainer products={products} />
        <LoadMore quantity={20} />
      </section>
      <section id='section-outstanding-products' className='my-3'>
        <h2>Điện thoại nổi bật nhất</h2>
        <CardContainer products={products} />
        <LoadMore quantity={20} />

      </section>
    </>

  )
}

export default Home
