import AboutUs from '@/pages/AboutUs'
import Contact from '@/pages/Contact'
import Download from '@/pages/Download'
import Features from '@/pages/Features'
import Footer from '@/pages/Footer'
import HeroSection from '@/pages/HeroSection'
import Instructor from '@/pages/Instructor'
import Pricing from '@/pages/Pricing1'
import Services from '@/pages/Services'
import Sessions from '@/pages/Sessions'
import Testimonials from '@/pages/Testimonials'
import Header from '@/pages/header'
import MakingEassy from '@/pages/makingEassy'
import OnlineEducation from '@/pages/onlineEducation'
import WorkingProcess from '@/pages/workingProcess'


export default function Page() {
  return (
    <>
      <Header/>
      <div className='mt-24 lg:mt-30 md:mt-28'>
        <HeroSection/>
        <Services />
        <WorkingProcess/>
        {/* <AboutUs />
        <Features />
      <Sessions /> */}
        <Testimonials />
        <Pricing />
        <MakingEassy />
        <Instructor />
        <Contact />
        <Download />
        <Footer />
      </div>
    </>
  )
}
