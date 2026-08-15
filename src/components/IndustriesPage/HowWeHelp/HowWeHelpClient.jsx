// src/components/HowWeHelp/HowWeHelpClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './HowWeHelp.module.css'

const steps = [
  {
    id: 1,
    title: 'Understand',
    description: 'We learn how your business operates.',
    icon: '🔍',
    step: '01'
  },
  {
    id: 2,
    title: 'Build',
    description: 'We create technology around your actual workflow.',
    icon: '⚙️',
    step: '02'
  },
  {
    id: 3,
    title: 'Grow',
    description: 'We improve the product as your business evolves.',
    icon: '📈',
    step: '03'
  }
]

export default function HowWeHelpClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className={styles.howWeHelp} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>How We Help</span>
          <h2 className={styles.heading}>
            Different industries.
            <span className={styles.headingHighlight}> One approach.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className={styles.stepsContainer}>
          {/* Flow Line */}
          <div className={styles.flowLine}>
            <motion.div 
              className={styles.flowProgress}
              initial={{ width: '0%' }}
              animate={isInView ? { width: '100%' } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            />
          </div>

          <div className={styles.stepsGrid}>
            {/* Business Label */}
            <motion.div 
              className={styles.businessLabel}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              <span className={styles.businessIcon}>🏢</span>
              <span className={styles.businessText}>BUSINESS</span>
            </motion.div>

            {/* Step Cards */}
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className={styles.stepCard}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5,
                  delay: 0.3 + (index * 0.1),
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ y: -4 }}
              >
                <div className={styles.stepNumber}>{step.step}</div>
                <div className={styles.stepIcon}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
                {index < steps.length - 1 && (
                  <div className={styles.stepArrow}>↓</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}