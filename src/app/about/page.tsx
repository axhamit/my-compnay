// src/app/about/page.tsx
import AboutHero from '@/components/AboutHero/AboutHero'
import Ourstory from '@/components/OurStory/OurStory'
import WhatWeBelieve from '@/components/WhatWeBelieve/WhatWeBelieve'
import Mission from '@/components/Mission/Mission'
import Vission from '@/components/Vision/Vision'
import CoreValues from '@/components/CoreValues/CoreValues'
import Founder from '@/components/Founder/Founder'
import Team from '@/components/Team/Team'
import Approach from '@/components/Approach/Approach'
import HowWork from '@/components/HowWeWork/HowWeWork'
import CompanyNumbers from '@/components/CompanyNumbers/CompanyNumbers'
import Culture from '@/components/Culture/Culture'
import TechMindSet from '@/components/TechMindset/TechMindset'
import { Metadata } from 'next'
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs'
import FinalCTA from '@/components/FinalCTA/FinalCTA'

export const metadata: Metadata = {
  title: 'About Us - Digifu',
  description: 'We are a technology and digital product company helping businesses turn ideas into reliable, scalable and beautiful digital experiences.',
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <Ourstory/>

      <WhatWeBelieve/>
      <Mission/>
      <Vission/>
      <CoreValues/>
      <Founder/>
      <Team/>
      <Approach/>
      <HowWork/>
      <CompanyNumbers/>
      <Culture/>
      <TechMindSet/>
      <WhyChooseUs/>
      <FinalCTA/>
      {/* Additional about page sections will go here */}
    </main>
  )
}