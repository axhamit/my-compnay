// src/components/Mission/MissionClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Mission.module.css'

export default function MissionClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className={styles.mission} ref={ref}>
      <div className={styles.container}>
        {/* Background Visual Elements */}
        <div className={styles.background}>
          <motion.div 
            className={styles.orb1}
            animate={{ 
              x: [0, 60, 0],
              y: [0, -40, 0]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.div 
            className={styles.orb2}
            animate={{ 
              x: [0, -50, 0],
              y: [0, 30, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.div 
            className={styles.orb3}
            animate={{ 
              x: [0, 40, 0],
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

        {/* Content */}
        <div className={styles.content}>
          {/* Label */}
          <motion.div 
            className={styles.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.labelDot} />
            Our Mission
          </motion.div>

          {/* Big Statement */}
          <motion.h2 
            className={styles.statement}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            To help businesses turn ideas into
            <span className={styles.statementHighlight}> meaningful digital products.</span>
          </motion.h2>

          {/* Explanation */}
          <motion.p 
            className={styles.explanation}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We combine strategy, design and engineering to create technology 
            that solves real problems and creates measurable value.
          </motion.p>

          {/* Decorative Line */}
          <motion.div 
            className={styles.decorativeLine}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>
      </div>
    </section>
  )
}