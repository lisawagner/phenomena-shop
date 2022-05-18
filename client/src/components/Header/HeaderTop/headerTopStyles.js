import styled from 'styled-components';

import { DEVICE } from '../../../constants/Breakpoints'


export const HeaderTopWrap = styled.div`
  display: none;

  @media ${DEVICE.mobileL} {
    margin-top: 4.5rem;
    display: block;
    padding: 12px 0;
    border-bottom: 1px solid var(--cultured);
  }

  @media ${DEVICE.laptop} {
    margin-top: 0px;
  }
`

export const TopContainer = styled.div`

  @media ${DEVICE.mobileL} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }
`

export const SocialContainer = styled.ul`

  @media ${DEVICE.mobileL} {
    display: none;
  }

  @media ${DEVICE.laptop} {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`

export const SocialList = styled.li``

export const SocialLink = styled.a`
    padding: 5px;
    background: hsl(0, 0%, 95%);
    border-radius: var(--border-radius-sm);
    color: var(--sonic-silver);
    transition: var(--transition-timing);

    &:hover {
      background: var(--salmon-pink);
    color: var(--white);
    }

`

export const AlertContainer = styled.div`
  color: var(--sonic-silver);
  /* font-size: var(--fs-9); */
  font-size: 0.75rem;
  text-transform: uppercase;
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