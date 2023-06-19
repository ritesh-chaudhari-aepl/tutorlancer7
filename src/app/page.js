import Contact from '@/pages/Contact'
import Download from '@/pages/Download'
// import Features from '@/pages/Features'
import Footer from '@/pages/Footer'
import HeroSection from '@/pages/HeroSection'
import Instructor from '@/pages/Instructor'
import Pricing from '@/pages/Pricing1'
import Services from '@/pages/Services'
import Testimonials from '@/pages/Testimonials'
import Header from '@/pages/header'
import MakingEassy from '@/pages/makingEassy'
import WorkingProcess from '@/pages/workingProcess'


export default function Page() {
  return (
    <>
      <Header/>
      <div className='mt-24 lg:mt-30 md:mt-28'>
        <HeroSection/>
        <Services />
        <WorkingProcess/>
        {/* <Features /> */}
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
