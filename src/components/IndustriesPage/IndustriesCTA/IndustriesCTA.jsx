// src/components/IndustriesCTA/IndustriesCTA.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import styles from './IndustriesCTA.module.css'

export default function IndustriesCTA() {
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
          <span className={styles.smallText}>Don't see your industry?</span>
          <h2 className={styles.heading}>
            That's okay. Tell us what you're building and
            <span className={styles.headingHighlight}> we'll find the right approach.</span>
          </h2>
          <Link href="/contact" className={styles.ctaButton}>
            Start a Project →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}