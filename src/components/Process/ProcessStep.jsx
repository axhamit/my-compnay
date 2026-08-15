// src/components/Process/ProcessStep.jsx
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from './Process.module.css'

export default function ProcessStep({ step, index, isLast }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      className={styles.stepContainer}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.stepWrapper}>
        {/* Connection Line */}
        {!isLast && (
          <motion.div 
            className={styles.connectionLine}
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ 
              duration: 0.8,
              delay: index * 0.1 + 0.3,
              ease: 'easeOut'
            }}
            viewport={{ once: true }}
            style={{ 
              background: step.gradient,
              opacity: 0.15
            }}
          />
        )}

        {/* Step Card */}
        <motion.div 
          className={styles.stepCard}
          animate={{
            y: isHovered ? -4 : 0,
            boxShadow: isHovered ? '0 12px 40px rgba(0,0,0,0.06)' : '0 2px 8px rgba(0,0,0,0.02)'
          }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.stepLayout}>
            {/* Left: Number & Icon */}
            <div className={styles.stepLeft}>
              <motion.div 
                className={styles.stepNumber}
                style={{ background: step.gradient }}
                animate={{
                  scale: isHovered ? 1.05 : 1
                }}
                transition={{ duration: 0.3 }}
              >
                <span className={styles.number}>{step.number}</span>
              </motion.div>
              
              <motion.div 
                className={styles.stepIcon}
                style={{ backgroundColor: step.lightBg }}
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  rotate: isHovered ? 5 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                <span className={styles.icon}>{step.icon}</span>
              </motion.div>
            </div>

            {/* Right: Content */}
            <div className={styles.stepRight}>
              <div className={styles.stepHeader}>
                <h3 className={styles.stepTitle} style={{ color: step.color }}>
                  {step.title}
                </h3>
                <span className={styles.stepDuration} style={{ backgroundColor: step.lightBg, color: step.color }}>
                  {step.duration}
                </span>
              </div>

              <p className={styles.stepDescription}>{step.description}</p>

              <div className={styles.deliverables}>
                <span className={styles.deliverablesLabel}>Deliverables:</span>
                <div className={styles.deliverablesTags}>
                  {step.deliverables.map((deliverable, idx) => (
                    <motion.span 
                      key={idx} 
                      className={styles.deliverableTag}
                      style={{ 
                        backgroundColor: step.lightBg,
                        color: step.color
                      }}
                      animate={{
                        opacity: isHovered ? 1 : 0.8,
                        y: isHovered ? 0 : 2
                      }}
                      transition={{ delay: idx * 0.03, duration: 0.2 }}
                    >
                      {deliverable}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Arrow indicator */}
              <motion.div 
                className={styles.stepArrow}
                animate={{
                  x: isHovered ? 6 : 0,
                  opacity: isHovered ? 1 : 0.3
                }}
                transition={{ duration: 0.3 }}
              >
                <svg viewBox="0 0 20 20" fill="currentColor" style={{ color: step.color }}>
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* Border accent */}
          <motion.div 
            className={styles.stepBorder}
            style={{ background: step.gradient }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}