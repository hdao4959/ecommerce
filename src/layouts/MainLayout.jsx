import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Menu from '../components/Menu'
import "../Style/Css/index.css"
import Footer from '../components/Footer'
import BottomNavigator from '../components/BottomNavigator'
const MainLayout = () => {
  return (
    <div id='body'>
      <Header />
      <article>
        <Menu />
        <Outlet />
      <Footer />
      </article>
      <BottomNavigator />
    </div>
  )
}

export default MainLayout
