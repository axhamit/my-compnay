// src/components/HowWeWork/HowWeWorkClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import styles from './HowWeWork.module.css'

const steps = [
  {
    id: 1,
    number: '01',
    title: 'Discover',
    description: 'We understand your business, users, goals and requirements.'
  },
  {
    id: 2,
    number: '02',
    title: 'Design',
    description: 'We create user flows, wireframes and a visual experience.'
  },
  {
    id: 3,
    number: '03',
    title: 'Build',
    description: 'Our developers turn the approved designs into a working product.'
  },
  {
    id: 4,
    number: '04',
    title: 'Launch',
    description: 'We test, optimize and deploy your product to production.'
  },
  {
    id: 5,
    number: '05',
    title: 'Grow',
    description: 'We provide ongoing support, improvements and new features.'
  }
]

export default function HowWeWorkClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [hoveredStep, setHoveredStep] = useState(null)

  return (
    <section className={styles.howWeWork} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>How We Work</span>
          <h2 className={styles.heading}>
            A clear path from
            <span className={styles.headingHighlight}> idea to launch.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className={styles.timeline}>
          {/* Desktop Horizontal Timeline */}
          <div className={styles.desktopTimeline}>
            {/* Progress Line */}
            <div className={styles.progressLine}>
              <motion.div 
                className={styles.progressFill}
                initial={{ width: '0%' }}
                animate={isInView ? { width: '100%' } : {}}
                transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
              />
            </div>

            {/* Steps */}
            <div className={styles.stepsRow}>
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className={`${styles.stepItem} ${hoveredStep === index ? styles.hovered : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.5,
                    delay: 0.2 + (index * 0.08),
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <div className={styles.stepNode}>
                    <span className={styles.stepNumber}>{step.number}</span>
                  </div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Vertical Timeline */}
          <div className={styles.mobileTimeline}>
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className={styles.mobileStep}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.5,
                  delay: 0.2 + (index * 0.08),
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                <div className={styles.mobileStepLeft}>
                  <div className={styles.mobileNode}>
                    <span className={styles.mobileNumber}>{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={styles.mobileLine} />
                  )}
                </div>
                <div className={styles.mobileStepContent}>
                  <h3 className={styles.mobileTitle}>{step.title}</h3>
                  <p className={styles.mobileDescription}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}