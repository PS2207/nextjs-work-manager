
import ActionSection from '@/components/homepage/ActionSection'
import ContactForm from '@/components/homepage/ContactForm'
import FeatureSection from '@/components/homepage/FeatureSection'
import BannerSection from '@/components/homepage/HomeBanner'
import TestimonialSection from '@/components/homepage/Testimonial'
import Image from 'next/image'

export const metadata={
  title: "Home : Work Manager"
}

export default function Home() {
  // window.addEventListener("contextmenu", (e) => e.preventDefault());
  return (
   <div>
    {/* <h1 className='text-5xl'>Welcome to work manager</h1> */}
    <BannerSection/>
    <FeatureSection/>
    <ActionSection/>
    <TestimonialSection/>
    <ContactForm/>
   </div>
  )
}
//***for home page*** 
// ----navbar-----
//welcome banner
// feature section- this section provides what features provide our application
// action section- this section provides link to go to another page
// testimonial section- this section shows -what are saying those who have used our application
//service section
// course adds section
// contact form
// ----footer-----