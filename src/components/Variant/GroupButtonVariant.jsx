import React, { memo, useEffect, useState } from 'react'
import ButtonVariant from './Button/ButtonVariant'
import { useLocation } from 'react-router-dom';

const GroupButtonVariant = ({ variants = [], productLine = {} }) => {

  const [variant, setVariant] = useState(null)
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id')
  const idVariant = searchParams.get('var')



  useEffect(() => {
    const foundVariant = Array.isArray(variants) && variants?.find(variant => Array.isArray(variant?.colors) && variant?.colors?.some(color => color?.color_id == id));
    setVariant(foundVariant)

  }, [id, variants])
  
  return (
    <div className='variants-product row row-cols-3 gap-1'>
      {Array.isArray(variants) && variant &&
        variants?.map((item) => {
          return <ButtonVariant
            key={item._id}
            data={item}
            productLine={productLine}
            active={item?._id == idVariant}
          />
        })
      }
    </div>
  )
}

export default memo(GroupButtonVariant)
