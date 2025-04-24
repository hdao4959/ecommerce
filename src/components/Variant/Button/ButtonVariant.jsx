import React from 'react'
import { formatPrice } from '../../../utils/formatPrice'
import { useNavigate } from 'react-router-dom'
import { mockData } from '../../../data/mock-data';
import { useLocation } from 'react-router-dom'

const ButtonVariant = ({ data, active }) => {
  const location = useLocation()
  const search = new URLSearchParams(location.search);
  const idParam = search.get('id')

  const productLine = mockData.products.find(product =>
    product.variants.find(variant =>
      variant.colors.some(color => color._id == idParam)))

  const idVariant = data._id

  const variant = productLine.variants.find(variant => variant._id == idVariant)

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/products/" + productLine.slug + "?id=" + variant.colors[0]._id)
  }

  return (
    <button 
      onClick={handleNavigate}
      className={`btn border ${active ? 'border-2 border-danger' : ''} col d-flex flex-column p-1`}>
      <span className='fw-bold'>{data.name}</span>
      <span className='price-product-variant'>{formatPrice(data.price)}</span>
    </button>
  )
}

export default ButtonVariant
