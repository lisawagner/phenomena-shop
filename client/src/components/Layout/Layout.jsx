import React from 'react'
import { Outlet } from 'react-router-dom'

import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <>
        <Banner />
        <Header />
        <div className="main">
          <Outlet />
        </div>
        {/* {children} */}
        <Footer />
    </>
  )
}

export default Layout