import React, { memo, useEffect } from 'react'
import ButtonVariant from './Button/ButtonVariant'
import { useLocation } from 'react-router-dom';

const GroupButtonVariant = ({ variants = [], productLine = {} }) => {

  const location = useLocation()
  const search = new URLSearchParams(location.search);
  const id = search.get('id')
  let variantId
  const foundVariant = Array.isArray(variants) && variants?.find(variant => Array.isArray(variant?.colors) && variant?.colors?.some(color => color?._id == id));
  
  if(foundVariant){
    variantId = foundVariant._id || null
  }



  return (
    <div className='variants-product row row-cols-3 gap-1'>
      {Array.isArray(variants) &&
        variants?.map((variant, index) => {
          return <ButtonVariant
            key={index}
            data={variant}
            productLine={productLine}
            active={variant?._id == variantId}
          />
        })
      }
    </div>
  )
}

export default memo(GroupButtonVariant)
