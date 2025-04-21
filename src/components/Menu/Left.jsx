import React from 'react'
import { Card } from 'react-bootstrap'
import { mockData } from '../../data/mock-data'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
const Left = () => {
  return (
    
    // <Card id='menu-left' >
    <Card  className='d-none d-md-block col-md-4 col-lg-3'>

      {/* <Card.Body id='links-category' > */}
      <Card.Body >

        {mockData.categories.map((cate) => 
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
