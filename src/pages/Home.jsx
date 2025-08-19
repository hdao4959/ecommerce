import { useContext, useEffect, useState } from 'react'
import CardContainer from '../components/Product/CardContainer'
import "../Style/Css/CardProduct.css"
import LoadMore from '../components/Button/LoadMore'
import Menu from '../components/Menu'
import productService from '../services/productService'
import useApi from '../hooks/useApi'
import { CollectionsContext } from '../contexts/HomeProviders/CollectionsProvider'

const Home = () => {
  const {collections, setCollections} = useContext(CollectionsContext)
  const {data:dataListProduct} = useApi(productService.getCollectionsForHomePage, true);

  useEffect(() => {
     if(dataListProduct){
      setCollections(dataListProduct.collections)
     }
  }, [dataListProduct])
  
  
  return (
    <>
      <Menu />
    {
      collections.length > 0 && collections.map((collection, index) => (
      <section key={index}  id='section-outstanding-products'>
        <h2>{collection.category}</h2>
        <CardContainer products={collection.products} />
        <LoadMore/>
      </section>
      ))
    }
    </>

  )
}

export default Home
