import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { DEVICE } from '../../constants/Breakpoints';

export const Container = styled.div`
    background: yellow;
`

export const Wrapper = styled.div` 
`

export const Slide = styled.div` 
    background-color: ${ props => props.bg };
`

export const SlideWrapper = styled.div`
    grid-template-columns: none;
    grid-column-end: span 3;
    grid-row-end: span 6;

    @media ${DEVICE.tablet} {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        grid-column-end: span 6;
        grid-row-end: span 3;
        align-items: center;
    }
`

export const ImgContainer = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 100%;
`
export const Image = styled.img`
    display: block;
    max-width: 100%;
    height: auto;

    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    
`
export const InfoContainer = styled.div`
    /* padding-top: 16px; */
    /* padding-left: 16px; */
    /* padding-bottom: 71px; */

    padding: 16px 16px 71px;
    
    @media ${DEVICE.tablet} {
        /* padding-top: 24px; */
        /* padding-left: 46px; */
        /* padding-bottom: 56px; */
        padding: 24px 20px 56px;
    }

    @media ${DEVICE.laptop} {
        /* padding-left: 56px; */
        padding: 24px 40px 56px;
    }

    @media ${DEVICE.laptopL} {
        padding-left: 66px
    }

`
export const Title = styled.h1`
    margin-top: 1rem;
    font-size: 3rem;

    @media ${DEVICE.laptop} {
        font-size: 3.5rem;
    }

    @media ${DEVICE.laptopL} {
        font-size: 5rem;
    }
`
export const Desc = styled.p`
    margin: 2rem 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
export const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    border: 1px solid black;
    /* border-radius: 2px; */
    cursor: pointer;
`