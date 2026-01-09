"use client"

import { useEffect, useRef } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import WhyChoose from './WhyCoose/WhyChoose'
import Price from './Price/Price'
import ClientReview from './ClientReview/ClientReview'


const Home = () => {

  
  return (
    <div className="overflow-hidden ">
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Price />
      <ClientReview />
    </div>
  )
}

export default Home