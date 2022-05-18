import styled from 'styled-components';
import { DEVICE } from '../constants/Breakpoints';

export const Wrapper = styled.div`
  padding: 20px;
`;
export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
export const Top = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: space-between; */
  /* padding: 20px; */
  
`;

export const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: 0.5px solid black;
  /* border: ${(props) => props.type === "filled" && "none"}; */
  border-radius: 4px;
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  margin: 1rem auto;
`;

export const TopTexts = styled.div`
display: none;

@media ${DEVICE.mobileS} {
  display: block;
}

`;
export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
export const Bottom = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* justify-content: space-between; */

  @media ${DEVICE.laptopM} {
    flex-direction: row;
    
}
`;
export const Info = styled.div`
  /* flex: 3; */
  width: 90%;
  margin: auto;
  line-height: 1.75rem;

  @media ${DEVICE.laptopM} {
    flex: 3;
  }

`;
export const Product = styled.div`
  display: flex;
  flex-direction: column;
  /* background: orange; */
  /* justify-content: space-between; */

  @media ${DEVICE.tablet} {
    margin: 1rem 4rem;
  }

  @media ${DEVICE.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }

  @media ${DEVICE.laptopM} {
    margin: 1rem 4rem 1rem 1rem;
  }
  
`;
export const ProductDetail = styled.div`
  /* flex: 2;
  display: flex; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${DEVICE.tablet} {
    /* flex: 2; */
    flex-direction: row;
    gap: 4rem;
  }

  @media ${DEVICE.laptop} {
    gap: 2rem;
  }

  
`;
export const Image = styled.img`
  width: 200px;
  margin-top: 1rem;
`;
export const Details = styled.div`
  /* padding: 20px; */
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-around;
  margin: 1rem auto;
`;

export const ProductName = styled.div``;

export const ProductId = styled.div``;

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

export const ProductSize = styled.span``;

export const PriceDetail = styled.div`
  /* flex: 1; */
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1.5rem;
  /* justify-content: center; */

  @media ${DEVICE.laptop} {
    /* background-color: pink; */
    gap: 6rem;
  }

`;

export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  /* margin-bottom: 20px; */
`;
export const ProductAmount = styled.div`
  font-size: 2rem;
  margin: 5px;
`;

export const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: 200;
`;
export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  /* background: teal; */
  width: 100%;

  @media ${DEVICE.tablet} {
    width: 90%;
  }
  
`;
export const SummaryTitle = styled.h1`
  font-weight: 700;
  
`;
export const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
export const SummaryItemText = styled.span`

`;
export const SummaryItemPrice = styled.span``;
export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  border-radius: 4px;
`;