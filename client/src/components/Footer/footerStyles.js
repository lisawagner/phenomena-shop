import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DEVICE } from '../../constants/Breakpoints';

export const FooterWrap = styled.div`
  display: flex;
  margin: 4rem 2rem 4rem 2rem;
  

  @media ${DEVICE.laptop} {
  }

`

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 10px 0px;
  /* grid-template-areas: "." "." "." "."; */

  @media ${DEVICE.tablet} {
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 20px 30px;
    /* grid-template-areas: ". . . ."; */
  }

  @media ${DEVICE.laptop} {
    grid-template-columns: 2fr 1fr 1fr 2fr;
    grid-template-rows: 1fr;
    gap: 20px 30px;
    /* grid-template-areas: ". . . ."; */
  }
`

export const FooterCell = styled.div`
  

  @media ${DEVICE.laptop} {
    :first-child {
    padding-left: 20px;
  }
  }
  

`
export const FooterBrand = styled.h1`
  margin-bottom: 1rem;
`

export const FooterParagraph = styled.p`
margin: 10px auto;
`

export const ColumnTitle = styled.h3`
  text-transform: title-case;
  margin-bottom: 1em;
  font-weight: 600;
`

export const FooterLink = styled(Link)`
  margin: 0.5em auto;
  /* padding-left: 0.25em; */
  :hover {
    color: pink;
  }
`

export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;


