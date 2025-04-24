import React, { memo } from 'react'
import ButtonVariant from './Button/ButtonVariant'
import { useLocation } from 'react-router-dom';

const GroupButtonVariant = ({ variants }) => {

  const location = useLocation()
  const search = new URLSearchParams(location.search);
  const id = search.get('id')

  const variantId = variants?.find(variant => variant?.colors?.some(color => color?._id == id))._id;

  return (
    <div className='variants-product row row-cols-3 gap-1'>
      {
        variants?.map((variant, index) => {
          return <ButtonVariant
            key={index}
            data={variant}
            active={variant?._id == variantId}
          />
        })
      }
    </div>
  )
}

export default memo(GroupButtonVariant)
