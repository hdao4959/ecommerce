import React from 'react'

const TableTechnical = ({ variant }) => {
  return (
    <div className='border border-1 rounded ' style={{ maxHeight: "500px", overflowY: 'auto' }}>
      <table className='table table-striped '>
        <tbody >
          {
            variant.product_technical.map((technical, index) =>
              <tr key={index}>
                <td>{technical.name}</td>
                <td>{technical.value}</td>
              </tr>
            )
          }
        </tbody>
      </table >
    </div>
  )
}

export default TableTechnical
