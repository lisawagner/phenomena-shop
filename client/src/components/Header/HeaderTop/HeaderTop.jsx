import React from 'react'

import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaTiktok,
} from 'react-icons/fa'

import { HeaderTopWrap, TopContainer, SocialContainer, AlertContainer, TopActionsContainer, SocialList, SocialLink, ActionSelect } from './headerTopStyles'

const HeaderTop = () => {
  return (
    <>
      <HeaderTopWrap>
        <TopContainer>

          <SocialContainer>
            <SocialList>
              <SocialLink><FaFacebookSquare name="logo-facebook" /></SocialLink>
            </SocialList>
            <SocialList>
              <SocialLink><FaTwitter name="logo-twitter" /></SocialLink>
            </SocialList>
            <SocialList>
              <SocialLink><FaInstagram name="logo-instagram" /></SocialLink>
            </SocialList>
            <SocialList>
              <SocialLink><FaTiktok name="logo-tiktok" /></SocialLink>
            </SocialList>
          </SocialContainer>

          <AlertContainer>
            <p><b>Free Shipping</b>{" "}This Week - On Orders Over $55</p>
          </AlertContainer>

          <TopActionsContainer>
            <ActionSelect>
              <option value="en-US">en</option>
              <option value="es-ES">es</option>
              <option value="fr">fr</option>
            </ActionSelect>
          </TopActionsContainer>

        </TopContainer>
      </HeaderTopWrap>
    </>
  )
}

export default HeaderTop