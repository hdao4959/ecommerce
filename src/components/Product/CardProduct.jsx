import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
import env from '../../config/env.js'
import useApi from '../../hooks/useApi.js'
import wishlistService from '../../services/wishlistService.js'
const CardProduct = ({ product, setPrd }) => {
  const { data: dataAddWishlist, loading: loadingAddWishlist, response: responseAddWishlist, fetchApi: fetchAddWishlist } = useApi(wishlistService.add)
  const serverBaseUrl = env.VITE_SERVER_BASE_URL

  const handleAddWishlist = (item) => {
    if (!loadingAddWishlist) {
      fetchAddWishlist(item?.product_id)
    }
  }

  useEffect(() => {
    if (responseAddWishlist?.success) {
      setPrd(prev => prev.map(item =>
        item._id == product._id ?
          {
            ...item, inWishlist: dataAddWishlist?.action == "added" ?
              product.inWishlist = true :
              product.inWishlist = false
          } :
          item))
    }
  }, [responseAddWishlist])
  return (
    <Card className='card-product'>
      <Link to={`/products/${product?.slug}?var=${product?.variant?._id}&id=${product?.variant?.color?.color_id}`} className='text-dark text-decoration-none'>
        <div className='img_product ' >
          <img src={`${serverBaseUrl}${product?.variant?.color?.img}`} alt="" />
          <p className='name_product'>{product?.name} {product?.variant?.name}</p>
          <p className='text-danger fw-bold price_product'>{formatPrice(product?.variant?.color?.price)}</p>
        </div>
      </Link>
      <div className='footer-product px-2'>
        <div className='stars'>
          <i className="fa-solid fs-5 text-warning fa-star"></i>
          <i className="fa-solid fs-5 text-warning fa-star"></i>
          <i className="fa-solid fs-5 text-warning fa-star"></i>
          <i className="fa-solid fs-5 text-warning fa-star"></i>
          <i className="fa-solid fs-5 text-warning fa-star"></i>

        </div>
        <div onClick={() => handleAddWishlist(product?.variant)} className='div-favorite'>
          {/* <span>Yêu thích</span> */}
          {
            <i className={`fa-regular fs-5 ${product?.inWishlist ? "fw-bold" : ""} text-warning fa-heart`}></i>
          }
        </div>
      </div>
    </Card>
  )
}

export default CardProduct
