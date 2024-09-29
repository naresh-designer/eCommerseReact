import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Faqs from '../../Components/Faqs/Faqs'
import AboutCart from '../../Components/AboutCart/AboutCart'

const About = ({data}) => {
  const heroData={
    img:'./images/about.png',
    heading:'WE ARE PASSIONATE',
    pageName:'About',
  }
  return (
    <main>
      <Hero heroData={heroData} />
      <AboutCart/>
      <Faqs/>
    </main>
  )
}

export default About