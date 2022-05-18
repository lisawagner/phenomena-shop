import React from 'react'
import Magazine from '../components/Magazine/Magazine'
import Products from '../components/Products/Products'
import Hero from '../components/Hero/Hero'
import Cards from '../components/Cards/Cards'


const Home = () => {
  return (
    <>
      <Hero />
      <Cards />
      <Products />
      <Magazine />
    </>
  )
}

export default Home