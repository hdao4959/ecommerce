import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Menu from '../../components/Menu'
import useApi from '../../hooks/useApi'
import categoryService from '../../services/categoryService'
import CardContainer from '../../components/Product/CardContainer'
import LoadMore from '../../components/Button/LoadMore'
const index = () => {
  const { id } = useParams()
  const [query, setQuery] = useState({
    sortBy: 'created_at',
    orderBy: 'asc',
    offset: 0,
    limit: 10
  })
  const [products, setProducts] = useState([]);

  const { data: dataProductsForCate, fetchApi: getProductForCategory } = useApi(categoryService.getProductsForCategory);

  useEffect(() => {
    if (dataProductsForCate?.products?.length > 0) {
      setProducts(prev => {
        const newProducts = dataProductsForCate.products.filter(p => {
          return !prev.some(oldProduct => oldProduct._id == p._id)
        })
        return [...prev, ...newProducts]
      })
    }
  }, [dataProductsForCate?.products])

  const changeQuery = (sortBy, orderBy) => {
    if (sortBy !== query?.sortBy || orderBy !== query?.orderBy) {
      setProducts([]);
      setQuery(prev => ({
        ...prev,
        sortBy,
        orderBy,
        offset: 0,
        limit: 10
      }))
    }
  }

  useEffect(() => {
    getProductForCategory(id, query)
  }, [id, query?.sortBy, query?.orderBy, query?.offset, query?.limit])

  return (
    <>
      <Menu />
      <div className='row row-cols-1 row-cols-md-2'>
        <div className='col' >
          <h3>{dataProductsForCate?.category?.parent?.name} {dataProductsForCate?.category?.name}</h3>
        </div>
        <div className='col d-flex justify-content-md-end justify-content-start gap-2'>
          <button onClick={() => changeQuery('price', 'desc')}
            className={`btn ${query?.sortBy == 'price' && query?.orderBy == 'desc' ?
              ('border-2 border-primary') : ""} rounded-5`}
            style={{ backgroundColor: '#cccccc' }}>
            Giá Cao - Thấp</button>
          <button onClick={() => changeQuery('price', 'asc')}
            className={`btn ${query?.sortBy == 'price' && query?.orderBy == 'asc' ?
              ('border-2 border-primary') : ""} rounded-5`}
            style={{ backgroundColor: '#cccccc' }}>Giá Thấp - Cao</button>
        </div>
      </div>
      <CardContainer products={products} />
      {
        dataProductsForCate?.totalVariants > dataProductsForCate?.totalVariantFiltered &&
        <LoadMore quantity={dataProductsForCate.totalVariants - dataProductsForCate.totalVariantFiltered} />
      }
    </>
  )
}

export default index
