import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {
  MdSearch,
  MdPersonOutline,
  MdOutlineFavoriteBorder,
  MdOutlineShoppingCart,
  } from 'react-icons/md'

import { HeaderMainWrapper, BrandLink, MainContainer, SearchBar, SearchInput, SearchBtn, UserActionsWrap, ActionBtn, Count, TopActionsContainer, ActionSelect } from './headerMainStyles'

const HeaderMain = () => {
  const cartQty = useSelector(state => state.cart.quantity)
  console.log(`your cart contains: ${cartQty}`);

  return (
    <>
      <HeaderMainWrapper>
        <MainContainer>

          <BrandLink to="/">Phenomena</BrandLink>

          <SearchBar>
            <SearchInput />
            <SearchBtn>
              <MdSearch />
            </SearchBtn>
          </SearchBar>

          <UserActionsWrap>
            <ActionBtn>
              <Link to="/login" >
                <MdPersonOutline />
              </Link>
            </ActionBtn>
            <ActionBtn>
              <Link to="/" >
                <MdOutlineFavoriteBorder />
                {/* <Count>{quantity}</Count> */}
                <Count>4</Count>
              </Link>
            </ActionBtn>
            <ActionBtn>

              <Link to="/cart" >
                <MdOutlineShoppingCart />
                <Count>{cartQty}</Count>
                {/* <Count>7</Count> */}
              </Link>

            </ActionBtn>
          </UserActionsWrap>

        </MainContainer>
      </HeaderMainWrapper>
    </>
    

  )
}

export default HeaderMain