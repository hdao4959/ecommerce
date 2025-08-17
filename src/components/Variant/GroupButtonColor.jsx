import React, { memo, useContext } from 'react'
import ButtonColor from './Button/ButtonColor'
import { useLocation } from 'react-router-dom';
import { ProductLineContext } from '../../contexts/DetailProviders/ProductLineContext';
import { VariantContext } from '../../contexts/DetailProviders/VariantContext';

const GroupButtonColor = ({ colorMap }) => {
  const {variant} = useContext(VariantContext)
  const location = useLocation()
  const search = new URLSearchParams(location.search);
  const idColor = search.get('id')

  return (
    <div className='colors-product row row-cols-3 gap-1'>
      {
        variant?.colors?.map((color, index) => {
          return <ButtonColor
            key={index}
            active={idColor == color?.color_id}
            colorMap={colorMap}
            data={{ ...color, price: color?.price ?? variant?.price }}
          />
        })
      }
    </div>
  )
}

export default memo(GroupButtonColor)
