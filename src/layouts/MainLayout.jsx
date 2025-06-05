import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BottomNavigator from '../components/BottomNavigator'
const MainLayout = () => {
  return (
    <>
    
      <div id='body'>
        <Header />
        <article className='px-3 px-sm-4 px-md-5'>
          <Outlet />
        </article>
        <Footer />
        <BottomNavigator />
      </div>
    </>
  )
}

export default MainLayout
