// src/app/ourwork/page.tsx
import WorkHero from '@/components/OurWork/WorkHero/WorkHero'
import FeatureWork from '@/components/OurWork/FeaturedWork/FeaturedWork'
import ProhjectCat from '@/components/OurWork/ProjectCategories/ProjectCategories'
import ProjectGrid from '@/components/OurWork/ProjectGrid/ProjectGrid'
import WOrkCTA from '@/components/OurWork/WorkCTA/WorkCTA'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work - StudioX',
  description: 'Explore websites, applications and digital products we\'ve designed and built.',
}

export default function WorkPage() {
  return (
    <main>
      <WorkHero />
      <FeatureWork/>
      <ProhjectCat/>
      <ProjectGrid/>
      <WOrkCTA/>
      {/* Additional work sections will go here */}
    </main>
  )
}