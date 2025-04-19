import React, { memo } from 'react'
import ButtonVariant from './Button/ButtonVariant'
import { useLocation } from 'react-router-dom';

const GroupButtonVariant = ({ variants }) => {

  const location = useLocation()
  const search = new URLSearchParams(location.search);
  const id = search.get('id')

  const variantId = variants?.find(variant => variant?.colors?.some(color => color?.id == id)).id;

  return (
    <div className='variants-product row gap-1'>
      {
        variants?.map(variant => {
          return <ButtonVariant
            key={variant?.id}
            data={variant}
            active={variant?.id == variantId}
          />
        })
      }
    </div>
  )
}

export default memo(GroupButtonVariant)
