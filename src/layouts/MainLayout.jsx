import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Menu from '../components/Menu'
import "../Style/Css/index.css"
import Footer from '../components/Footer'
import BottomNavigator from '../components/BottomNavigator'
import { mockData } from '../data/mock-data'
const MainLayout = () => {
  const categories = mockData.categories;
  return (
    <div id='body'>
      <Header />
      <article className='px-3 px-sm-4 px-md-5'>

        <Menu categories={categories}/>
        <Outlet />
      </article>
        <Footer />
      <BottomNavigator />
    </div>
  )
}

export default MainLayout
