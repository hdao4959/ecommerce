import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Menu from '../components/Menu'

const MainLayout = () => {
  return (
    <div>
      <Header/>
      <Menu/>
      <main>
     <Outlet/>
      </main>
    </div>
  )
}

export default MainLayout
