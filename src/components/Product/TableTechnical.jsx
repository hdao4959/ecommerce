import React, { useContext, useEffect } from 'react'
import { VariantContext } from '../../contexts/DetailProviders/VariantContext'

const TableTechnical = () => {
  const {variant} = useContext(VariantContext)
  return (
      <div className='border border-1 rounded ' style={{ maxHeight: "500px", overflowY: 'auto' }}>
        <table className='table table-striped '>
          <tbody >
            {
              variant?.variant_specification?.map((spec, index) =>
                <tr key={index}>
                  <td>{spec?.specification?.name}</td>
                  <td>{spec?.value}</td>
                </tr>
              )
            }
          </tbody>
        </table >
      </div>
  )
}

export default TableTechnical
