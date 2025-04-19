import React from 'react'
import { Card } from 'react-bootstrap'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
const CardProduct = ({ product }) => {
  return (
    <Card key={product.id} className='card_product'>
        <Link to={`/products/${product.id}`} className='text-dark text-decoration-none'>
        <div className='img_product ' >
          <img src={product.variants[0].colors[0].img_thumbnail} alt="" />
          <p className='name_product'>{product.name}</p>
          <p className='price_product'>{product.variants[0].price}</p>
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
