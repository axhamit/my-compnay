// src/app/contact/page.tsx

import ContactHero from '@/components/ContactPage/ContactHero/ContactHero'
import CFOrm from '@/components/ContactPage/ContactForm/ContactForm'
import ContactInfo from '@/components/ContactPage/ContactInfo/ContactInfo'
import ContactFAQ from '@/components/ContactPage/ContactFAQ/ContactFAQ'
import ContactCTA from '@/components/ContactPage/ContactCTA/ContactCTA'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - StudioX',
  description: 'Have an idea, a project or a business problem you\'d like to solve? Tell us about it and let\'s start a conversation.',
}

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <CFOrm/>
      <ContactInfo />
      <ContactFAQ />
      <ContactCTA />
      {/* Additional contact sections will go here */}
    </main>
  )
}