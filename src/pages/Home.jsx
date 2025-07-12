import { useEffect, useState } from 'react'
import CardContainer from '../components/Product/CardContainer'
import "../Style/Css/CardProduct.css"
import LoadMore from '../components/Button/LoadMore'
import Menu from '../components/Menu'
import productService from '../services/productService'
import useApi from '../hooks/useApi'

const Home = () => {
  const [responseProducts, setResponseProducts] = useState([]);
  const {data:dataListProduct} = useApi(productService.getListProductForHomePage, true);

  useEffect(() => {
     if(dataListProduct){
      setResponseProducts(Object.values(dataListProduct))
     }
  }, [dataListProduct])
  
  return (
    <>
      <Menu />
    {
      responseProducts.length > 0 && responseProducts.map((collection, index) => (
      <section key={index}  id='section-outstanding-products' className='my-3'>
        <h2>{collection.category}</h2>
        <CardContainer products={collection.products} />
        <LoadMore />
      </section>
      ))
    }
    </>

  )
}

export default Home
