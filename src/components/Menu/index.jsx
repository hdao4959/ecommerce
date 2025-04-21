import React from 'react'
import '../../Style/Css/Menu.css'
import Left from './Left'
import Right from './Right'
import Center from './Center'
const Menu = ({categories}) => {
  return (
    <div id='menu' className='d-flex row row-cols-1 row-cols-lg-2 row-cols-xl-3 my-3' style={{minHeight:"100px"}}>
      <Left categories={categories}/>
      <Center/>
      <Right/>

    </div>
  )
}

export default Menu
