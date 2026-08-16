// src/components/ContactCTA/ContactCTA.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import styles from './ContactCTA.module.css'

export default function ContactCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className={styles.cta} ref={ref}>
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <h2 className={styles.heading}>
            Have something in mind?
          </h2>
          <p className={styles.description}>
            Let's turn your idea into a digital product.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Start Your Project →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}