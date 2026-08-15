// src/components/WhatYouGet/WhatYouGetClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './WhatYouGet.module.css'

const features = [
  {
    id: 1,
    title: 'Clear Communication',
    description: 'Regular updates throughout the project.',
    icon: '💬'
  },
  {
    id: 2,
    title: 'Transparent Scope',
    description: 'Clear deliverables and milestones.',
    icon: '📋'
  },
  {
    id: 3,
    title: 'Quality Development',
    description: 'Clean, maintainable and scalable code.',
    icon: '⚡'
  },
  {
    id: 4,
    title: 'Long-Term Support',
    description: 'We can continue supporting your product after launch.',
    icon: '🤝'
  }
]

export default function WhatYouGetClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className={styles.whatYouGet} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>What You Get</span>
          <h2 className={styles.heading}>
            A partnership that delivers
            <span className={styles.headingHighlight}> more than code.</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ y: -4 }}
            >
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{feature.icon}</span>
                </div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDescription}>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}