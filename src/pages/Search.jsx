import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import Menu from '../components/Menu'
import useApi from '../hooks/useApi'
import categoryService from '../services/categoryService'
import CardContainer from '../components/Product/CardContainer'
import LoadMore from '../components/Button/LoadMore'
import Spinner from '../components/Spinner'
import productService from '../services/productService'
const Search = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const q = queryParams.get('q')
  const [query, setQuery] = useState({
    sortBy: 'created_at',
    orderBy: 'asc',
    offset: 0,
    limit: 10
  })
  const { loading: loadingForSearchProducts, data: dataProducts, fetchApi: fetchSearchProducts} = useApi(productService.search);


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
    const params = new URLSearchParams({
      ...query, q
    })
      fetchSearchProducts(params)
  }, [q, query?.sortBy, query?.orderBy, query?.offset, query?.limit])
  return (
    <>
      <Menu />
      <div className='row row-cols-1 row-cols-md-2'>
        <div className='col' >
          <h3>Tìm thấy <strong className='text-danger'>{dataProducts?.meta?.totalFiltered}</strong> sản phẩm với từ khoá <strong>{q}</strong></h3>
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
        loadingForSearchProducts ?
          <Spinner/> :
          <CardContainer products={dataProducts?.items} />

      }
      {
        <LoadMore quantity={dataProducts?.meta?.totalFiltered} handleLoadMore={handleLoadMore} />
      }
    </>
  )
}

export default Search
