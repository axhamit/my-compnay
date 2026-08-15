// src/components/CompanyNumbers/CompanyNumbersClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './CompanyNumbers.module.css'

// Update these with your actual numbers
const stats = [
  {
    id: 1,
    value: '10+',
    label: 'Projects Delivered',
    description: 'Successfully launched digital products'
  },
  {
    id: 2,
    value: '5+',
    label: 'Industries Served',
    description: 'From startups to enterprises'
  },
  {
    id: 3,
    value: '4+',
    label: 'Years Experience',
    description: 'Building digital products'
  },
  {
    id: 4,
    value: '100%',
    label: 'Client Satisfaction',
    description: 'We deliver what we promise'
  }
]

export default function CompanyNumbersClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className={styles.numbers} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Company Numbers</span>
          <h2 className={styles.heading}>
            Building trust through
            <span className={styles.headingHighlight}> real results.</span>
          </h2>
          <p className={styles.subtitle}>
            Numbers that reflect our commitment to quality and client success.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className={styles.grid}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className={styles.statCard}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5,
                delay: 0.1 + (index * 0.08),
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ y: -4 }}
            >
              <div className={styles.statContent}>
                <motion.span 
                  className={styles.statValue}
                  initial={{ scale: 0.8 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ 
                    duration: 0.5,
                    delay: 0.2 + (index * 0.08),
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  {stat.value}
                </motion.span>
                <span className={styles.statLabel}>{stat.label}</span>
                <span className={styles.statDescription}>{stat.description}</span>
              </div>
              {index < stats.length - 1 && (
                <div className={styles.statDivider} />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}