// src/components/ContactFAQ/ContactFAQClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import styles from './ContactFAQ.module.css'

const faqs = [
  {
    id: 1,
    question: 'How soon will you respond?',
    answer: 'We typically respond within one business day.'
  },
  {
    id: 2,
    question: 'What information should I provide?',
    answer: 'Tell us what you\'re building, your goals, required features and any timeline or budget you have in mind.'
  },
  {
    id: 3,
    question: 'Do you work with startups?',
    answer: 'Yes. We can help with MVPs, product design and scalable development.'
  },
  {
    id: 4,
    question: 'Can you work on an existing project?',
    answer: 'Yes. We can take over, improve or extend existing web and mobile applications.'
  },
  {
    id: 5,
    question: 'Do you provide support after launch?',
    answer: 'Yes. We can provide maintenance, improvements and ongoing development.'
  }
]

export default function ContactFAQClient() {
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
          <h2 className={styles.heading}>
            Frequently Asked
            <span className={styles.headingHighlight}> Questions</span>
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
            <motion.div 
              key={faq.id}
              className={`${styles.faqItem} ${openId === faq.id ? styles.open : ''}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true }}
            >
              <button 
                className={styles.faqButton}
                onClick={() => toggleFAQ(faq.id)}
                aria-expanded={openId === faq.id}
              >
                <div className={styles.faqHeader}>
                  <span className={styles.faqQuestion}>{faq.question}</span>
                  <motion.span 
                    className={styles.faqIcon}
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.span>
                </div>
              </button>

              {openId === faq.id && (
                <motion.div 
                  className={styles.faqAnswer}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ 
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <div className={styles.faqContent}>
                    <p className={styles.faqText}>{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}