import React from 'react'
import HeroSection from './HeroSection'
import ProductCategories from './ProductCategories'
import MostWanted from './Mostwanted'
import OurClients from './OurClients'
import NewArrivals from './NewArrivals'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <ProductCategories/>
        <MostWanted/>
        <NewArrivals/>
        <OurClients/>
    </>
  )
}

export default Home