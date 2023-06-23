"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Contact from '@/pages/Contact'
import Download from '@/pages/Download'
// import Features from '@/pages/Features'
// import Footer from '@/pages/Footer'
import HeroSection from '@/pages/HeroSection'
// import Instructor from '@/pages/Instructor'
import Pricing from '@/pages/Pricing'
import Services from '@/pages/Services'
// import Testimonials from '@/pages/Testimonials'
import Header from '../components/header/Header.jsx'
import MakingEassy from '@/pages/makingEassy'
import WorkingProcess from '@/pages/workingProcess'


export default function Page() {
  useEffect(()=>{
    AOS.init()
  })
  return (
    <>
      {/* <div className='mt-24 lg:mt-30 md:mt-28'> */}
      <Header/>
        <HeroSection/>
        <Services />
        <WorkingProcess/>
        {/* <Features /> */}
        {/* <Testimonials /> */}
        <Pricing />
        <MakingEassy />
        {/* <Instructor /> */}
        <Contact />
        <Download />
        {/* <Footer /> */}
      {/* </div> */}
    </>
  )
}
