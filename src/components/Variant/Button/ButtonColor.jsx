import React, { useContext } from 'react'
import { formatPrice } from '../../../utils/formatPrice'
import { useNavigate } from 'react-router-dom';
import env from '../../../config/env';
import { ProductLineContext } from '../../../contexts/DetailProviders/ProductLineContext';
const ButtonColor = ({ data, colorMap, active }) => {
  const {productLine} = useContext(ProductLineContext)
  const serverBaseUrl = env.VITE_SERVER_BASE_URL
 
  const searchParams = new URLSearchParams(location.search)
  const idVariant = searchParams.get('var')
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/products/" + productLine?.slug + "?var=" + idVariant + "&id=" + data?.color_id)
  }
  return (
    <>
      <button onClick={handleNavigate} style={{height: 'auto',minHeight: '60px'}}
        className={`btn border border-2 ${active ? ' border-danger' : ''} col d-flex justify-content-center p-1`}>
        <div className='align-content-center'>
          <img className='img-fluid' style={{width: '40px'}} src={`${serverBaseUrl}${data?.img}`} alt="" />
        </div>
        <div className='d-flex flex-column mx-1' style={{minWidth: '0px'}}>
          <span className='fw-bold text-truncate'>{colorMap[data.color_id]}</span>
          <span className='price-product-variant text-truncate text-dark'>{formatPrice(data?.price)}</span>
        </div>
      </button>
    </>
  )
}

export default ButtonColor
