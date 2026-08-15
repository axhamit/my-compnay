// src/components/ProcessHero/ProcessHeroClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import styles from './ProcessHero.module.css'

const steps = [
  { label: 'Idea', icon: '💡', color: '#3B82F6' },
  { label: 'Design', icon: '🎨', color: '#8B5CF6' },
  { label: 'Build', icon: '⚙️', color: '#F59E0B' },
  { label: 'Launch', icon: '🚀', color: '#10B981' },
  { label: 'Grow', icon: '📈', color: '#EC4899' }
]

export default function ProcessHeroClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isInView) {
      let current = 0
      const interval = setInterval(() => {
        current += 0.5
        if (current >= 100) {
          clearInterval(interval)
          setProgress(100)
        } else {
          setProgress(current)
        }
      }, 50)
      return () => clearInterval(interval)
    }
  }, [isInView])

  return (
    <section className={styles.processHero} ref={ref}>
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
            Our Process
          </motion.div>

          {/* Heading */}
          <motion.h1 
            className={styles.heading}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            From idea to launch,
            <span className={styles.headingHighlight}> without the complexity.</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A clear and collaborative process designed to turn your idea 
            into a reliable digital product.
          </motion.p>

          {/* Animated Flow */}
          <motion.div 
            className={styles.flowContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Progress Track */}
            <div className={styles.flowTrack}>
              <motion.div 
                className={styles.flowProgress}
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Step Nodes */}
            <div className={styles.flowSteps}>
              {steps.map((step, index) => {
                const stepProgress = (index / (steps.length - 1)) * 100
                const isActive = progress >= stepProgress

                return (
                  <div key={index} className={styles.flowStep}>
                    <motion.div 
                      className={`${styles.stepNode} ${isActive ? styles.active : ''}`}
                      style={{ 
                        borderColor: isActive ? step.color : '#e2e8f0',
                        background: isActive ? step.color : '#ffffff'
                      }}
                      animate={{
                        scale: isActive ? [1, 1.1, 1] : 1
                      }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1 * index
                      }}
                    >
                      <span className={styles.stepIcon}>{step.icon}</span>
                    </motion.div>
                    <span className={styles.stepLabel}>{step.label}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}