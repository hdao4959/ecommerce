import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
import env from '../../config/env.js'
const CardProduct = ({ product }) => {
  const serverBaseUrl = env.VITE_SERVER_BASE_URL
  return (
    <Card className='card-product'>
      <Link to={`/products/${product?.slug}?var=${product?.variant?._id}&id=${product?.variant?.color?.color_id}`} className='text-dark text-decoration-none'>
        <div className='img_product ' >
          <img src={`${serverBaseUrl}${product?.variant?.color?.img}`} alt="" />
          <p className='name_product'>{product?.name} {product?.variant?.name}</p>
          <p className='text-danger fw-bold price_product'>{formatPrice(product?.variant?.color?.price)}</p>
        </div>
        <div className='footer-product'>
          <div className='stars'>
            <i className="fa-solid text-warning fa-star"></i>
            <i className="fa-solid text-warning fa-star"></i>
            <i className="fa-solid text-warning fa-star"></i>
            <i className="fa-solid text-warning fa-star"></i>
            <i className="fa-solid text-warning fa-star"></i>
           
          </div>
          <div className='div-favorite'>
            <span>Yêu thích</span>
            <i className="fa-regular text-warning fa-heart"></i>
          </div>
        </div>
      </Link>
    </Card>
  )
}

export default CardProduct
