import React from 'react'
import { Card } from 'react-bootstrap'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
import env from '../../config/env.js'
const CardProduct = ({ product }) => {
  const serverBaseUrl = env.VITE_SERVER_BASE_URL
    
  return (
       <Card className='card-product'>
    {/* <Card key={product.id} className='col-5 col-md-3 col-lg-2'> */}
        <Link to={`/products/${product.slug}?id=${product.variants[0].colors[0]._id}`} className='text-dark text-decoration-none'>
        <div className='img_product ' >
          <img src={`${serverBaseUrl}${product.variants[0].colors[0].img}`} alt="" />
          <p className='name_product'>{product?.name} {product?.variants[0]?.name}</p>
          <p className='text-danger fw-bold price_product'>{formatPrice(product?.variants[0]?.colors[0]?.price)}</p>
        </div>
        <div className='footer-product'>
          <div className='stars'>
            <StarIcon fontSize='small' />
            <StarIcon fontSize='small' />
            <StarIcon fontSize='small' />
            <StarIcon fontSize='small' />
            <StarIcon fontSize='small' />

          </div>
          <div className='div-favorite'>
            <span>Yêu thích</span>
            <FavoriteBorderIcon className='icon-favorite' fontSize='small' color='warning' />
          </div>
        </div>
    </Link>
      </Card>
  )
}

export default CardProduct
