import styled from 'styled-components';
import { Link } from 'react-router-dom'

import { DEVICE } from '../../../constants/Breakpoints';


export const HeaderMainWrapper = styled.div`
  width: 100%;
  /* background: pink; */

  @media ${DEVICE.tablet} {
    margin-top: 1rem;
  }
`

// container for branding and searchbar
export const MainContainer = styled.div`
  margin-top: 2rem;
  padding: 20px 15px;
  /* border-bottom: 1px solid var(--smokey-haze); */

  @media ${DEVICE.mobileL} {
    margin-top: 3rem;
  }

  @media ${DEVICE.tablet} {
    /* background: green; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* max-width: 90%; */
    /* margin: auto; */
    margin-right: 2rem;
    margin-left: 2rem;
    gap: 80px;
  }

  @media ${DEVICE.laptop} {
    margin: auto 2rem;
  }
`

// header-logo
export const BrandLink = styled(Link)`
  display: block;
  text-align: center;
  font-weight: 700;
  /* margin-bottom: 20px; */
  /* color: var(--teal); */
  text-transform: uppercase;
  font-size: 2.25rem;
  /* font-size: 1rem; */
  /* letter-spacing: 2px; */

  @media ${DEVICE.tablet} {
    /* background-color: orange; */
    font-size: 2rem;  
  }
`

export const SearchBar = styled.div`
  position: relative;
  min-width: 300px;

  @media ${DEVICE.tablet} {
    flex-grow: 1;
  }
`

// search-field
export const SearchInput = styled.input.attrs({
  type: 'search',
  placeholder: 'Find your happy...'
})`
  color: var(--onyx);
  font-size: 0.875rem;
  padding: 10px 15px;
  padding-right: 50px;
  border: 1px solid var(--cultured);
  border-radius: var(--border-radius-md);
`

export const SearchBtn = styled.button`
  position: absolute;
  top: 60%;
  right: 0;
  transform: translateY(-50%);
  color: var(--onyx);
  font-size: 1.5rem;
  padding-right: 10px;

  &:hover {
    color: var(--salmon-pink);
  }
`

export const UserActionsWrap = styled.div`
  display: none;

  @media ${DEVICE.laptop} {
    display: flex;
    align-items: center;
    gap: 15px;
  }
`

export const ActionBtn = styled.button`
  position: relative;
    font-size: 35px;
    /* color: var(--onyx); */
    color: var(--sonic-silver);
    padding: 5px;
`

export const Count = styled.span`
  position: absolute;
    top: -3px;
    right: -4px;
    background: var(--powder-blue);
    color: var(--white);
    font-size: 12px;
    font-weight: 400;
    line-height: 1;
    padding: 4px 4px;
    border-radius: 50%;
`
