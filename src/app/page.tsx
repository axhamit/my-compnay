// src/app/page.tsx
import Hero from '@/components/Hero/Hero'
import Trust from '@/components/Trust/Trust'
import Services from '@/components/Services/Services'
import Work from '@/components/Work/Work'
import ServicesOverview from '@/components/ServicesOverview/ServicesOverview'
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs'
import Industries from '@/components/Industries/Industries'
import Process from '@/components/Process/Process'
import Technology from '@/components/Technology/Technology'   
import FAQ from '@/components/FAQ/FAQ'
import FinalCTA from '@/components/FinalCTA/FinalCTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Trust />
      <Services/>
      <Work />
      <ServicesOverview/>
       <WhyChooseUs />
       <Industries />
       <Process/>
       <Technology />
       <FAQ/>
       <FinalCTA/>
    </main>
  )
}