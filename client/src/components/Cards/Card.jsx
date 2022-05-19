import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { DEVICE } from '../../constants/Breakpoints';

const CardWrap = styled.div`
  overflow: hidden;
  border-radius: 0.2rem;
  position: relative;
  width: 350px;
  transition: 250ms all ease-in-out;
  cursor: pointer;
  background-color: ${ props => props.bg };

  @media ${DEVICE.laptopM} {
    width: 400px;
  }

  @media ${DEVICE.laptopL} {
    width: 450px;
  }

  `

const CardBanner = styled.div``

const CardImage = styled.img`
  height: 22rem;
  width: 100%;
  object-fit: cover;

  @media ${DEVICE.laptopL} {
    height: 26rem;
  }
`

const DetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const CardTitle = styled.h2`
  color: white;
  padding: 1rem;
`

const CardDesc = styled.p`
`

const CardBtn = styled.button`
  padding: 1rem;
  font-family: inherit;
  font-weight: bold;
  font-size: 1rem;
  margin: 1rem;
  border: 2px solid white;
  background: transparent;
  color: white;
  border-radius: 0.2rem;


`

const Card = ({item}) => {
  return (
    <CardWrap bg={item.bg}>
      <CardBanner>
        <CardImage src={item.img} alt=""/>
      </CardBanner>
      
      <DetailsWrap>
        <CardTitle>{item.title}</CardTitle>
        {/* <Link to="products"> */}
        <Link to={`/products/${item.title}`}>
          <CardBtn>discover</CardBtn>
        </Link>
      </DetailsWrap>

      
    </CardWrap>
  )
}

export default Card