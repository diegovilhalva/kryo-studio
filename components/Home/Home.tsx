"use client"


import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import WhyChoose from './WhyCoose/WhyChoose'
import Price from './Price/Price'
import ClientReview from './ClientReview/ClientReview'
import Order from './Order/Order'
import Contact from './Contact/Contact'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'


const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos")
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom"
      })
    }
    initAOS()
  }, [])

  return (
    <div className="overflow-hidden ">
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Price />
      <ClientReview />
      <Order />
      <Contact />
    </div>
  )
}

export default Home