import React from 'react'
import HeroSection from './HeroSection'
import ProductCategories from './ProductCategories'
import MostWanted from './Mostwanted'
import OurClients from './OurClients'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <ProductCategories/>
        <MostWanted/>
        <OurClients/>
    </>
  )
}

export default Home