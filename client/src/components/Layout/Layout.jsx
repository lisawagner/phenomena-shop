import React from 'react'

import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <>
        <Banner />
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default Layout