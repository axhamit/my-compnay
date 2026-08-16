// src/components/ContactHero/ContactHeroClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './ContactHero.module.css'

export default function ContactHeroClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className={styles.contactHero} ref={ref}>
      {/* Subtle Background */}
      <div className={styles.bgOrb} />
      <div className={styles.bgGrid} />

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Badge */}
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            Contact Us
          </motion.div>

          {/* Heading */}
          <motion.h1 
            className={styles.heading}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's build something
            <span className={styles.headingHighlight}> great together.</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have an idea, a project or a business problem you'd like to solve? 
            Tell us about it and let's start a conversation.
          </motion.p>

          {/* Reply Note */}
          <motion.div 
            className={styles.replyNote}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Usually reply within 1 business day</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}