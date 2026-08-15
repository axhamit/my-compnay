// src/app/services/page.tsx
import ServicesHero from '@/components/ServiceHero/ServiceHero'
import ServiceOverviews from '@/components/ServicesOverviews/ServicesOverview'
import WebDevelopement from '@/components/servicePage/WebDevelopment/WebDevelopment'
import MobileAppDevelopment from '@/components/servicePage/MobileAppDev/MobileAppDev'
import CustomService from '@/components/servicePage/CustomSoftware/CustomSoftware'
import UiUXDesign from '@/components/servicePage/UXDesign/UXDesign'
import Ecommerce from '@/components/servicePage/ECommerce/ECommerce'
import DigitalGrowth from '@/components/servicePage/DigitalGrowth/DigitalGrowth'
import HowWeWork from '@/components/servicePage/HowWeWork/HowWeWork'
import type { Metadata } from 'next'
import FinalCTA from '@/components/servicePage/FinalCTA/FinalCTA'
import FAQ from '@/components/FAQ/FAQ'

export const metadata: Metadata = {
  title: 'Services - StudioX',
  description: 'From strategy and UI/UX to web applications, mobile apps, custom software and digital growth.',
}

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServiceOverviews/>
      <WebDevelopement/>
      <MobileAppDevelopment/>
      <CustomService/>
      <UiUXDesign/>
      <Ecommerce/>
      <DigitalGrowth/>
      <HowWeWork/>
      <FAQ/>
      <FinalCTA/>
      {/* Additional service sections will go here */}
    </main>
  )
}