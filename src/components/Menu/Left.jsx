import React from 'react'
import { Card } from 'react-bootstrap'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
const Left = ({categories}) => {
  return (
    
    // <Card id='menu-left' >
    <Card  className='flex-fill d-none d-md-block col-md-3 col-lg-3 col-xl-2 p-0'>

      {/* <Card.Body id='links-category' > */}
      <Card.Body className='p-0'>

        {categories.map((cate) => 
        <Link key={cate.id} href='' className='link-category'>
          <span >{cate.name}</span>
          <ArrowForwardIosIcon fontSize='inherit'/>
        </Link>
        )}
      </Card.Body>

    </Card>
  )
}

export default Left
