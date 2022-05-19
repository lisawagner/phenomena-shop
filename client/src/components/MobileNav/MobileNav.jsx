import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SlideNav from './SlideNav'

import {
  MdOutlineHome,
  MdOutlineFavoriteBorder,
  MdOutlineShoppingCart,
  MdOutlineMenu,
  } from 'react-icons/md'

import { MobileNavWrap, ActionBtn, UserActions, CountStyle } from './mobileNavStyles'

const MobileNav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const cartQty = useSelector(state => state.cart.quantity)

  return (
    <>
      <MobileNavWrap clicked={click}>

        <ActionBtn onClick={handleClick}>
          <MdOutlineMenu name="menu-outline" />
        </ActionBtn>

        <UserActions>
          <ActionBtn>
            <Link to="/">
              <MdOutlineHome name="home-outline" />
            </Link>
          </ActionBtn>
          <ActionBtn>
            <Link to="/">
              <MdOutlineFavoriteBorder name="heart-outline" />
              <CountStyle>2</CountStyle>
            </Link>
          </ActionBtn>
          <ActionBtn>

            <Link to="/cart">
              <MdOutlineShoppingCart name="bag-handle-outline" />
              <CountStyle>{cartQty}</CountStyle>
              {/* <CountStyle>0</CountStyle> */}
            </Link>

          </ActionBtn>
        </UserActions>

      </MobileNavWrap>
      <SlideNav click={click} handleClick={handleClick} />

    </>
  )
}

export default MobileNav