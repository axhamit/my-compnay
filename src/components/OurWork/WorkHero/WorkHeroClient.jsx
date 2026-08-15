// src/components/WorkHero/WorkHeroClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import styles from './WorkHero.module.css'

export default function WorkHeroClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className={styles.workHero} ref={ref}>
      {/* Subtle Background */}
      <div className={styles.bgOrb} />

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
            Our Work
          </motion.div>

          {/* Heading */}
          <motion.h1 
            className={styles.heading}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ideas we've turned into
            <span className={styles.headingHighlight}> digital products.</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Explore websites, applications and digital products we've designed and built.
          </motion.p>

          {/* Stats */}
          <motion.div 
            className={styles.stats}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10+</span>
              <span className={styles.statLabel}>Projects Delivered</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5+</span>
              <span className={styles.statLabel}>Industries</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Client Satisfaction</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}