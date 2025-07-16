import React from 'react'
import { formatPrice } from '../../../utils/formatPrice'
import { useNavigate } from 'react-router-dom'
import { mockData } from '../../../data/mock-data';
import { useLocation } from 'react-router-dom'

const ButtonVariant = ({ data, active, productLine = {} }) => {
  
  const location = useLocation()
  const search = new URLSearchParams(location.search);
  const idParam = search.get('id')
  
  const idVariant = data._id

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/products/" + productLine.slug + "?id=" + data.colors[0]._id)
  }

  return (
    <button 
      onClick={handleNavigate} style={{height: '60px'}}
      className={`btn border border-2 ${active ? 'border-danger' : ''} col d-flex flex-column justify-content-center p-1`}>
      <span className='fw-bold text-truncate'>{data.name}</span>
    </button>
  )
}

export default ButtonVariant
