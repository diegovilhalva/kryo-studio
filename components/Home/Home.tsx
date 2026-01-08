"use client"

import { useEffect, useRef } from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import WhyChoose from './WhyCoose/WhyChoose'


const Home = () => {

  
  return (
    <div className="overflow-hidden ">
      <Hero />
      <About />
      <Services />
      <WhyChoose />
    </div>
  )
}

export default Home