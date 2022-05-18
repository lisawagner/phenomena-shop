import styled from 'styled-components';
import { DEVICE } from '../../constants/Breakpoints';


// top area //
export const MobileNavigationMenu = styled.nav`
  background: var(--white);
  position: fixed;
  top: 0;
  width: 70%;
  left: ${ (props) => (props.clicked ? "0" : "-100%" ) };
  height: 100vh;
  padding: 20px;
  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.1);
  overflow-y: scroll;
  overscroll-behavior: contain;

  transition: 0.5s ease;
  z-index: 20;

  @media ${DEVICE.tablet} {
    width: 50%;
  }
`

export const SlideNavTop = styled.div`
  padding-bottom: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--cultured);
`

export const SlideNavTitle = styled.h2`
  color: var(--salmon-pink);
  /* font-size: var(--fs-4); */
  font-weight: 600;
`

export const CloseNavBtn = styled.button`
  color: var(--eerie-black);
  font-size: 22px;
`

// menu area //
//mobile-menu-category-list
export const MobileMenu = styled.ul`
  margin-bottom: 30px;
`

// menu-category
export const MenuCategory = styled.li`
  border-bottom: 1px solid var(--cultured);
`

export const TopActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const ActionSelect = styled.select`
  border: none;
  display: block;
  /* min-width: 80px; */
  padding: 5px 0;
  font: inherit;
  color: var(--sonic-silver);
  font-size: 0.813rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: var(--transition-timing);
`

// social icons //
