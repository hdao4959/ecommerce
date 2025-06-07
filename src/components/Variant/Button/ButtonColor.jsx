import React, { useEffect } from 'react'
import { formatPrice } from '../../../utils/formatPrice'
import { useNavigate } from 'react-router-dom';
import { mockData } from '../../../data/mock-data';
import axiosInstance from '../../../utils/axios';
import env from '../../../config/env';
const ButtonColor = ({ data, colorMap, active, productLine }) => {
  const serverBaseUrl = env.VITE_SERVER_BASE_URL
 

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/products/" + productLine?.slug + "?id=" + data?._id)
  }
  return (
    <>
      <button onClick={handleNavigate} style={{height: 'auto',minHeight: '60px'}}
        className={`btn border ${active ? ' border-2 border-danger' : ''} col d-flex justify-content-center p-1`}>
        <div className='align-content-center'>
          <img className='img-fluid' style={{width: '40px'}} src={`${serverBaseUrl}${data?.img}`} alt="" />
        </div>
        <div className='d-flex flex-column mx-1' style={{minWidth: '0px'}}>
          <span className='fw-bold text-truncate'>{colorMap[data.color_id]}</span>
          <span className='price-product-variant text-truncate'>{formatPrice(data?.price)}</span>
        </div>
      </button>
    </>
  )
}

export default ButtonColor
