/* eslint-disable react/jsx-no-undef */
import React from 'react'
import HeroSection from './components/HeroSection'
import HeroTwo from './components/HeroTwo'
import AboutUsSection from './components/AboutUs'
import MidTable from './components/MidTable'
import MidSection from './components/MidSection'



const page = () => {
  return (
    <div>
    <HeroSection/>
    <HeroTwo/>
    <AboutUsSection/>
    <MidTable/>
    <MidSection/>
    </div>
  )
}

export default page
