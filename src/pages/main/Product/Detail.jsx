import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {

  const { id } = useParams()
  // const a = Route.params
  // console.log(params);
  
  return (
    <div>
      Chi tiết sản phẩm
      {id}
    </div>
  )
}

export default Detail
