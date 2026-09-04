// src/app/industries/page.tsx
import IndustriesHero from '@/components/IndustriesPage/IndustriesHero/IndustriesHero'
import IndustriesGrid from '@/components/IndustriesPage/IndustriesGrid/IndustriesGrid'
import HowWeHelp from '@/components/IndustriesPage/HowWeHelp/HowWeHelp'
import IndustriesCTA from '@/components/IndustriesPage/IndustriesCTA/IndustriesCTA'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industries - Digifu',
  description: 'We create digital products and software solutions tailored to the unique needs of different businesses.',
}

export default function IndustriesPage() {
  return (
    <main>
      <IndustriesHero />
      <IndustriesGrid/>
      <HowWeHelp/>
      <IndustriesCTA />
      {/* Additional industry sections will go here */}
    </main>
  )
}