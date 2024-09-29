import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Policy from '../../Components/Policy/Policy'
import Products from '../../Components/Products/Products'
import Faqs from '../../Components/Faqs/Faqs'

const Home = () => {
  const heroData={
    img:'./images/product.png',
    heading:'Join The Organic Movement!',
    pageName:'Best Quality Products',
  }
  return (
    <>
    <Hero heroData={heroData} />
    <Policy/>
    <Products/>
    <Faqs/>
    </>
  )
}

export default Home