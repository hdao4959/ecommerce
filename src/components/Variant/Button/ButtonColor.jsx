import React from 'react'
import { formatPrice } from '../../../utils/formatPrice'
import { useNavigate } from 'react-router-dom';
import { mockData } from '../../../data/mock-data';

const ButtonColor = ({ data, active }) => {
  const productLine = mockData?.products?.find(product => product?.variants?.some(variant => variant.colors.some(color => color.id == data.id)))

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/products/" + productLine?.slug + "?id=" + data?.id)
  }
  return (
    <>
      <button onClick={handleNavigate}
        className={`btn border ${active ? ' border-2 border-danger' : ''} col d-flex justify-content-start p-1`}>
        <div className='align-content-center'>
          <img width={"40px"} src={data?.img_thumbnail} alt="" />
        </div>
        <div className='d-flex flex-column mx-1'>
          <span className='fw-bold'>{data?.name}</span>
          <span className='price-product-variant'>{formatPrice(data?.price)}</span>
        </div>
      </button>
    </>
  )
}

export default ButtonColor
