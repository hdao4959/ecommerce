import React from 'react'
import { formatPrice } from '../../../utils/formatPrice'
import { useNavigate } from 'react-router-dom'
import { mockData } from '../../../data/mock-data';

const ButtonVariant = ({ data, active, onClick }) => {
  // const id = data
  // console.log(id);
  
  // const  productLine = mockData.products.find(product => product.slug == slug && product.variants.some(variant => variant.colors.some(color => color.id == id)))
  // console.log(productLine);
  
  const navigate = useNavigate();

  const handleNavigate = () => {
    if(onClick) onClick()
    // navigate("/product/" + productLine.slug + "?id=" + data.id)
  }
  return (
    <button
      onClick={handleNavigate}
      className={` btn border ${active ? 'border-danger' : ''} col-3 col-md-4  col-lg-4 d-flex flex-column p-1`}>
      <span className='fw-bold'>{data.name}</span>
      <span className='price-product-variant'>{formatPrice(data.price)}</span>
    </button>
  )
}

export default ButtonVariant
