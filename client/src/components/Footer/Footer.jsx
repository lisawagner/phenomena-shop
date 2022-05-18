import React from 'react'
import SocialIcons from '../SocialIcons/SocialIcons'
import { NAVLINKS } from '../../models/navlinks'
import { INFOLINKS } from '../../models/infolinks'

import { MdLocationPin, MdLocalPhone, MdOutlineEmail } from 'react-icons/md'

import { FooterWrap, FooterGrid, FooterCell, FooterBrand, ColumnTitle, FooterParagraph, FooterLink, ContactItem } from './footerStyles'
import LanguageWidget from '../LanguageWidget/LanguageWidget'


const Footer = () => {
  return (
    <FooterWrap>

      <FooterGrid>
        <FooterCell>
          <FooterBrand>PHENOMENA</FooterBrand>
          <FooterParagraph>Embrace the power of serendipity.</FooterParagraph>
          <FooterParagraph>Wear exactly what you want. As long as you are true to yourself, you will look wonderful.</FooterParagraph>
          {/* <FooterParagraph>The real joy in fashion comes from wearing what you want. When you look in a mirror, you see you, not someone else.</FooterParagraph> */}
          <FooterParagraph>Be your favourite version of yourself</FooterParagraph>
          {/* <h3>Social Links</h3> */}
          <SocialIcons />
        </FooterCell>

        <FooterCell>
          <ColumnTitle>Shop</ColumnTitle>
            {NAVLINKS.map( (item, index) => {
              return (
              <FooterLink to={item.url} items={item} key={index}>
                {item.name}
                </FooterLink>
              )
            })}
        </FooterCell>

        <FooterCell>
          <ColumnTitle>Info</ColumnTitle>
            {INFOLINKS.map( (item, index) => {
              return (
              <FooterLink to={item.url} items={item} key={index}>
                {item.name}
                </FooterLink>
              )
            })}
        </FooterCell>

        <FooterCell>
          <ColumnTitle>Contact</ColumnTitle>
            <ContactItem>
              <MdLocationPin style={{marginRight:"10px", fontSize:"1.5rem"}} />1980 Vulcan Path, Southern Alberta 98336
            </ContactItem>
            <ContactItem>
              <MdLocalPhone style={{marginRight:"10px", fontSize:"1.5rem"}} /> +1 234 567 8000
            </ContactItem>
            <ContactItem>
              <MdOutlineEmail style={{marginRight:"10px", fontSize:"1.5rem"}} />support@yesyes.com
            </ContactItem>
            <LanguageWidget />
        </FooterCell>

        </FooterGrid>
      </FooterWrap>
  )
}

export default Footer