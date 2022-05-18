import React from 'react'
import DesktopNav from '../DesktopNav/DesktopNav'
import MobileNav from '../MobileNav/MobileNav'
import HeaderMain from './HeaderMain/HeaderMain'
// import HeaderTop from './HeaderTop/HeaderTop'

const Header = () => {
  return (
    <>
      {/* <HeaderTop /> */}
      <HeaderMain />
      <DesktopNav />
      <MobileNav />
    </>
  )
}

export default Header