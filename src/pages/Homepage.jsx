
import { BouncyCardsFeatures } from '../sections/BouncyCardsFeatures'
import Faqs from '../sections/Faqs'
import ShuffleHero from '../sections/suffleHero'
import Pricing from "../sections/Pricing"
import Testimonials from '../sections/Testimonials'

import Domains from '../sections/Domains'
import { Footer } from '../components/Footer'


const Homepage = () => {
  return (
    <div>
      <ShuffleHero/>
      <Domains/>
      <BouncyCardsFeatures/>
      <Pricing/>
      <Faqs/>

      <Testimonials/>
      <Footer/>

    </div>
  )
}

export default Homepage
