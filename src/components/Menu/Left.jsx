import React from 'react'
import { Card } from 'react-bootstrap'
import { mockData } from '../../data/mock-data'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
const Left = () => {
  return (
    <Card id='menu-left'>

      <Card.Body id='links-category'>

        {mockData.categories.map((cate) => 
        <Link href='' className='link-category'>
          <span >{cate.name}</span>
          <ArrowForwardIosIcon fontSize='inherit'/>
        </Link>
        )}
        {mockData.categories.map((cate) => 
        <Link href='' className='link-category'>
          <span >{cate.name}</span>
          <ArrowForwardIosIcon fontSize='inherit'/>
        </Link>
        )}
        {mockData.categories.map((cate) => 
        <Link href='' className='link-category'>
          <span >{cate.name}</span>
          <ArrowForwardIosIcon fontSize='inherit'/>
        </Link>
        )}
        {mockData.categories.map((cate) => 
        <Link href='' className='link-category'>
          <span >{cate.name}</span>
          <ArrowForwardIosIcon fontSize='inherit'/>
        </Link>
        )}
        {mockData.categories.map((cate) => 
        <Link href='' className='link-category'>
          <span >{cate.name}</span>
          <ArrowForwardIosIcon fontSize='inherit'/>
        </Link>
        )}
        {mockData.categories.map((cate) => 
        <Link href='' className='link-category'>
          <span >{cate.name}</span>
          <ArrowForwardIosIcon fontSize='inherit'/>
        </Link>
        )}
        {mockData.categories.map((cate) => 
        <Link href='' className='link-category'>
          <span >{cate.name}</span>
          <ArrowForwardIosIcon fontSize='inherit'/>
        </Link>
        )}
        {mockData.categories.map((cate) => 
        <Link href='' className='link-category'>
          <span >{cate.name}</span>
          <ArrowForwardIosIcon fontSize='inherit'/>
        </Link>
        )}
        {mockData.categories.map((cate) => 
        <Link href='' className='link-category'>
          <span >{cate.name}</span>
          <ArrowForwardIosIcon fontSize='inherit'/>
        </Link>
        )}
        {mockData.categories.map((cate) => 
        <Link href='' className='link-category'>
          <span >{cate.name}</span>
          <ArrowForwardIosIcon fontSize='inherit'/>
        </Link>
        )}
       

      </Card.Body>

    </Card>
  )
}

export default Left
