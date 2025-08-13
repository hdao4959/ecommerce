import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BottomNavigator from '../components/BottomNavigator'
import { useEffect } from 'react'
import { useState } from 'react'
const MainLayout = () => {
  const [account, setAccount] = useState({})

  useEffect(() => {
    const acc = JSON.parse(sessionStorage?.getItem('account'));
    setAccount(acc)
  }, [])
  
  return (
    <>

      <div id='body'>
        <Header account={account} />
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
