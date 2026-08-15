// src/components/FAQ/FAQClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import FAQItem from './FAQItem'
import styles from './FAQ.module.css'

const faqs = [
  {
    id: 1,
    question: 'How long does a project usually take?',
    answer: 'Timeline depends on project scope. A simple MVP can take 2-3 months, while complex enterprise solutions may take 6-12 months. We provide detailed timelines during the planning phase.'
  },
  {
    id: 2,
    question: 'How do you estimate project cost?',
    answer: 'We provide transparent pricing based on your requirements. After understanding your needs, we create a detailed proposal with clear cost breakdown and payment structure.'
  },
  {
    id: 3,
    question: 'Do you provide UI/UX design?',
    answer: 'Yes! We offer full UI/UX design services including research, wireframing, prototyping, and visual design. Our design team creates interfaces that are both beautiful and functional.'
  },
  {
    id: 4,
    question: 'Can I see progress during development?',
    answer: 'Absolutely. We provide regular updates, share development builds, and maintain open communication throughout the project. You always know exactly where things stand.'
  },
  {
    id: 5,
    question: 'What happens after launch?',
    answer: 'We offer ongoing support, maintenance, and feature development. We can continue to support and improve your product as your business grows.'
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
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>FAQ</span>
          <h2 className={styles.heading}>
            Common questions
            <span className={styles.headingHighlight}> answered.</span>
          </h2>
        </motion.div>

        {/* Accordion */}
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
      </div>
    </section>
  )
}