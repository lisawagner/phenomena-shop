import styled from 'styled-components';
import { DEVICE } from '../../constants/Breakpoints';


// mobile-bottom-navigation
export const MobileNavWrap = styled.div`
  background: var(--white);
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 30px 10px 20px;
  /* padding: 10px 15px 5px 0; */
  z-index: 5;

  @media ${DEVICE.laptop} {
    display: none;
  }
`

//action-btn
export const ActionBtn = styled.button`
  position: relative;
  font-size: 26px;
  color: var(--eerie-black);
  padding: 10px;
`

//right
export const UserActions = styled.div`
  display: flex;
`

// count
export const CountStyle = styled.span`
  background: var(--powder-blue);
  color: var(--white);
  position: absolute;
  top: 0;
  right: 0;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  padding: 2px 4px;
  border-radius: 20px;
`