import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Menu from '../../components/Menu'
import useApi from '../../hooks/useApi'
import categoryService from '../../services/categoryService'
import CardContainer from '../../components/Product/CardContainer'
import LoadMore from '../../components/Button/LoadMore'
import Spinner from '../../components/Spinner'
const index = () => {
  const { id } = useParams()
  const [query, setQuery] = useState({
    sortBy: 'created_at',
    orderBy: 'asc',
    offset: 0,
    limit: 10
  })

  const { loading: loadingForProductOfCate, data: dataProducts, fetchApi: getProductForCategory } = useApi(categoryService.getProductsForCategory);

  const changeQuery = (sortBy, orderBy) => {
    if (sortBy !== query?.sortBy || orderBy !== query?.orderBy) {
      setQuery(prev => ({
        ...prev,
        sortBy,
        orderBy,
        offset: 0,
        limit: 10
      }))
    }
  }

  const handleLoadMore = (quantity) => {
    setQuery(prev => ({
      ...prev,
      limit: prev.limit + quantity
    }))
  }

  useEffect(() => {
      getProductForCategory(id, query)
  }, [id, query?.sortBy, query?.orderBy, query?.offset, query?.limit])
  return (
    <>
      <Menu />
      <div className='row row-cols-1 row-cols-md-2'>
        <div className='col' >
          <h3>{dataProducts?.category?.parent?.name} {dataProducts?.category?.name}</h3>
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
      {
        loadingForProductOfCate ?
          <Spinner/> :
          <CardContainer products={dataProducts?.products} />

      }
      {
        dataProducts?.totalProducts > dataProducts?.totalProductFiltered &&
        <LoadMore quantity={dataProducts.totalProducts - dataProducts.totalProductFiltered} handleLoadMore={handleLoadMore} />
      }
    </>
  )
}

export default index
