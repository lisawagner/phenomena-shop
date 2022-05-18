import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { DEVICE } from '../constants/Breakpoints';

export const Wrapper = styled.div`
  /* padding: 50px; */
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  margin-bottom: 1rem;

  @media ${DEVICE.laptop} {
    flex-direction: row;
  }
`;

export const ImgContainer = styled.div`
  flex: 1;
  /* margin-bottom: 1rem; */
  @media ${DEVICE.laptop} {
    margin-left: 1.5rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  /* height: 90vh; */
  object-fit: cover;

`;

export const InfoContainer = styled.div`
  flex: 1;
  margin: 2rem 1.5rem;
  /* padding: 0px 50px; */
  /* background:orange; */
  
`;

export const Title = styled.h1`
  font-weight: 700;
`;

export const Desc = styled.p`
  margin: 1rem auto;
  
`;

export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

export const FilterContainer = styled.div`
  /* width: 70%;
  margin: 30px 0px; */
  margin: 1rem auto;
  padding: 1rem;
  display: flex;
  /* gap: 1rem; */
  /* justify-content: space-between; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--smokey-haze);

  @media ${DEVICE.mobileS} {
    gap: 1rem;
    flex-direction: row;
  }
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

export const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

export const FilterSizeOption = styled.option``;

export const AddContainer = styled.div`
  /* width: 60%; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* background:pink; */
  flex-direction: column;
  /* background: pink; */
  gap: 1rem;

  @media ${DEVICE.mobileS} {
    /* gap: 1rem; */
    flex-direction: row;
    gap: 0;
  }
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

export const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 8px;
`;

export const Button = styled.button`
  padding: 1rem;
  margin: auto 1rem;
  border: 1px solid teal;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      /* background-color: #f8f4f4; */
      color: white;
      background: teal;
      /* add transition */
  }
`;