import React, { memo, useState } from 'react'
import ButtonColor from './Button/ButtonColor'

const GroupButtonColor = ({ variant }) => {
  
  const [activeVariant, setActiveVariant] = useState(null);


  console.log(activeVariant);
  return (
    <div className='colors-product row gap-1'>
      {
        variant.colors.map((color) => {
          return <ButtonColor 
          key={color.id} 
          active={activeVariant == color.id} 
          data={{ ...color, price: variant.price }} 
          onClick={() => setActiveVariant(color.id != activeVariant ? color.id : null)} />
        })
      }
    </div>
  )

  
}

export default memo(GroupButtonColor)
