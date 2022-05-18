import { Link } from 'react-router-dom'
import {
  MdSearch,
  MdPersonOutline,
  MdOutlineFavoriteBorder,
  MdOutlineShoppingCart,
  } from 'react-icons/md'

import { HeaderMainWrapper, BrandLink, MainContainer, SearchBar, SearchInput, SearchBtn, UserActionsWrap, ActionBtn, Count, TopActionsContainer, ActionSelect } from './headerMainStyles'

const HeaderMain = () => {
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
              <Link to="/" >
                <MdPersonOutline />
              </Link>
            </ActionBtn>
            <ActionBtn>
              <Link to="/" >
                <MdOutlineFavoriteBorder />
                <Count>0</Count>
              </Link>
            </ActionBtn>
            <ActionBtn>
              <Link to="/cart" >
                <MdOutlineShoppingCart />
                <Count>0</Count>
              </Link>
            </ActionBtn>
          </UserActionsWrap>

        </MainContainer>
      </HeaderMainWrapper>
    </>
    

  )
}

export default HeaderMain