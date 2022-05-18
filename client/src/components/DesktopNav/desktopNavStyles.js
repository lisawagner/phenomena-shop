import styled from 'styled-components';
import { DEVICE } from '../../constants/Breakpoints';


export const DesktopNavigation = styled.nav`
  display: none;

  @media ${DEVICE.laptop} {
    display: block;
  }
`

export const DesktopNavWrap = styled.div`
  /* padding: 0 15px; */
  /* margin: auto */
`

export const DesktopMenuList = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 1rem;
`

// |||||switch to react-router-dom Links
export const MenuLink = styled.a`
  position: relative;
  color: var(--onyx);
  font-size: var(--fs-7);
  font-weight: 600;
  text-transform: uppercase;
  padding: 15px 0;
  transition: var(--transition-timing);

  &:hover {
    color: var(--salmon-pink);
    cursor: pointer;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--salmon-pink);
    transform: scaleX(0);
    transform-origin: left;
    transition: var(--transition-timing);
  }

  &:hover::after {
    transform: scaleX(1);
  }

`

//need to switch to rrd Link
export const TempLink = styled.a`
  color: var(--sonic-silver);
  text-transform: capitalize;
  padding: 4px 20px;
  transition: var(--transition-timing);

  &:hover {
    color: var(--salmon-pink);
    cursor: pointer;
  }
`
