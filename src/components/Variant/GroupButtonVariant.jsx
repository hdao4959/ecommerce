import React, { memo, useState } from 'react'
import ButtonVariant from './Button/ButtonVariant'

const GroupButtonVariant = ({ variants }) => {
  const [activeVariant, setActiveVariant] = useState(null)

  return (
    <div className='variants-product row gap-1'>
      {
        variants.map(variant => {
          return <ButtonVariant
            key={variant.id}
            data={variant}
            active={activeVariant == variant.id}
            onClick={
              () => setActiveVariant(activeVariant != variant.id ? variant.id : null)
            }
          />
        })
      }
    </div>
  )
}

export default memo(GroupButtonVariant)
