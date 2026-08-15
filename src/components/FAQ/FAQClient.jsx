// src/components/FAQ/FAQClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import FAQItem from './FAQItem'
import styles from './FAQ.module.css'

const faqs = [
  {
    id: 1,
    question: 'How much does a project cost?',
    answer: 'Project costs vary based on scope, complexity, and requirements. We work with you to define your needs and provide transparent pricing. Our typical projects range from $10,000 to $150,000+. We offer flexible payment structures and can create a custom solution that fits your budget.',
    category: 'Pricing'
  },
  {
    id: 2,
    question: 'How long does development take?',
    answer: 'Timeline depends on project scope. A simple MVP can take 2-3 months, while complex enterprise solutions may take 6-12 months. We break projects into phases, delivering value early and often. We provide detailed timelines during the planning phase and keep you updated throughout development.',
    category: 'Timeline'
  },
  {
    id: 3,
    question: 'Do you provide maintenance and support?',
    answer: 'Yes! We offer ongoing maintenance and support packages for all our projects. This includes bug fixes, security updates, performance optimization, and feature enhancements. We also provide 24/7 emergency support and SLAs tailored to your business needs.',
    category: 'Support'
  },
  {
    id: 4,
    question: 'Can you work with an existing application?',
    answer: 'Absolutely! We have extensive experience modernizing, scaling, and integrating with existing applications. We can audit your current codebase, identify improvement areas, and work alongside your team to enhance functionality, improve performance, or migrate to newer technologies.',
    category: 'Integration'
  },
  {
    id: 5,
    question: 'Do you build both web and mobile apps?',
    answer: 'Yes, we build both! Our team specializes in web applications (using React, Next.js) and mobile apps (using React Native for cross-platform). We can build web-only, mobile-only, or full-stack solutions with seamless integration between web and mobile experiences.',
    category: 'Services'
  },
  {
    id: 6,
    question: 'Do you work with international clients?',
    answer: 'Yes, we work with clients worldwide. We have experience collaborating with teams across different time zones and cultures. We use modern communication tools, flexible meeting schedules, and asynchronous workflows to ensure smooth collaboration regardless of location.',
    category: 'Global'
  }
]

export default function FAQClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [openId, setOpenId] = useState(null)

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className={styles.faq} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className={styles.badge}>FAQ</span>
          <h2 className={styles.title}>
            Frequently Asked
            <span className={styles.titleHighlight}> Questions</span>
          </h2>
          <p className={styles.subtitle}>
            Find answers to common questions about our process, pricing, and services.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div 
          className={styles.accordion}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {faqs.map((faq, index) => (
            <FAQItem 
              key={faq.id} 
              faq={faq} 
              index={index}
              isOpen={openId === faq.id}
              onToggle={() => toggleFAQ(faq.id)}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className={styles.bottomCTA}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className={styles.ctaText}>Still have questions?</p>
          <a href="/contact" className={styles.ctaButton}>
            Contact Us
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}