import React from 'react'
import { departments } from "../../constants/data";
import Card from './Card'
import styled from 'styled-components'

const FeatureWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin: 2rem auto;
`

const Cards = () => {
  return (
    <FeatureWrap>
    {/* <h1>FeatureCards</h1> */}
    {departments.map ((item) => (
      <Card item={item} key={item.id} />
    ))}
    
    </FeatureWrap>
  )
}

export default Cards