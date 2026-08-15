// src/app/process/page.tsx
import ProcessHero from '@/components/ProcessPage/ProcessHero/ProcessHero'
import HowWeWork from '@/components/ProcessPage/HowWeWork/HowWeWork'
import WhatWeGet from '@/components/ProcessPage/WhatYouGet/WhatYouGet'
import FAQClint from '@/components/ProcessPage/FAQ/FAQ'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Process - StudioX',
  description: 'A clear and collaborative process designed to turn your idea into a reliable digital product.',
}

export default function ProcessPage() {
  return (
    <main>
      <ProcessHero />
     
      <HowWeWork/>
       <WhatWeGet/>
       <FAQClint/>
      {/* Additional process sections will go here */}
    </main>
  )
}