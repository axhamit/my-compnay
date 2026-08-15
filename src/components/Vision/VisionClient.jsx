// src/components/Vision/VisionClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Vision.module.css'

const visionPoints = [
  {
    id: 1,
    title: 'Long-term Relationships',
    icon: '🤝',
    description: 'We build lasting partnerships that grow with your business over time.'
  },
  {
    id: 2,
    title: 'Innovation',
    icon: '💡',
    description: 'We push boundaries to create solutions that define the future of your industry.'
  },
  {
    id: 3,
    title: 'Product Thinking',
    icon: '🎯',
    description: 'We approach every project with a product mindset, not just a project mindset.'
  },
  {
    id: 4,
    title: 'Global Clients',
    icon: '🌍',
    description: 'We work with ambitious companies across continents and time zones.'
  },
  {
    id: 5,
    title: 'Scalable Technology',
    icon: '📈',
    description: 'We build systems that grow with you, from startup to enterprise.'
  }
]

export default function VisionClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className={styles.vision} ref={ref}>
      <div className={styles.container}>
        {/* Background */}
        <div className={styles.background}>
          <motion.div 
            className={styles.orb1}
            animate={{ 
              x: [0, -40, 0],
              y: [0, 30, 0]
            }}
            transition={{ 
              duration: 22,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.div 
            className={styles.orb2}
            animate={{ 
              x: [0, 50, 0],
              y: [0, -20, 0]
            }}
            transition={{ 
              duration: 18,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <div className={styles.gridPattern} />
        </div>

        <div className={styles.grid}>
          {/* Left: Main Content */}
          <motion.div 
            className={styles.mainContent}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Label */}
            <div className={styles.label}>
              <span className={styles.labelDot} />
              Our Vision
            </div>

            {/* Big Statement */}
            <h2 className={styles.statement}>
              To become a trusted technology partner for 
              <span className={styles.statementHighlight}> businesses building the future.</span>
            </h2>

            {/* Decorative Element */}
            <div className={styles.decorativeLine} />
          </motion.div>

          {/* Right: Vision Points */}
          <motion.div 
            className={styles.pointsContainer}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {visionPoints.map((point, index) => (
              <motion.div
                key={point.id}
                className={styles.pointCard}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5,
                  delay: 0.2 + (index * 0.08),
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  x: 6,
                  transition: { duration: 0.2 }
                }}
              >
                <div className={styles.pointIconWrapper}>
                  <span className={styles.pointIcon}>{point.icon}</span>
                </div>
                <div className={styles.pointContent}>
                  <h4 className={styles.pointTitle}>{point.title}</h4>
                  <p className={styles.pointDescription}>{point.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}