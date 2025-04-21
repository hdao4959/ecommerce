import React from 'react'
import '../../Style/Css/Menu.css'
import Left from './Left'
import Right from './Right'
import Center from './Center'
const Menu = () => {
  return (
    <div id='menu' className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
      <Left/>
      <Center/>
      <Right/>

    </div>
  )
}

export default Menu
