import React, { memo } from 'react'
import ButtonColor from './Button/ButtonColor'
import { useLocation } from 'react-router-dom';

const GroupButtonColor = ({ variant }) => {
  const location = useLocation()
  const search = new URLSearchParams(location.search);
  const idParam = search.get('id')

  return (
    <div className='colors-product row row-cols-3  gap-1'>
      {
        variant?.colors?.map((color) => {
          return <ButtonColor
            key={color?.id}
            active={idParam == color?.id}
            data={{ ...color, price: variant?.price }}
          />
        })
      }
    </div>
  )
}

export default memo(GroupButtonColor)
