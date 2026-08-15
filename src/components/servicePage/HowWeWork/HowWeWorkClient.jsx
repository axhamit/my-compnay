// src/components/HowWeWork/HowWeWorkClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import styles from './HowWeWork.module.css'

const steps = [
  {
    id: 1,
    number: '01',
    title: 'Discover',
    description: 'Understand the business and requirements.'
  },
  {
    id: 2,
    number: '02',
    title: 'Design',
    description: 'UX, UI and prototype.'
  },
  {
    id: 3,
    number: '03',
    title: 'Build',
    description: 'Develop and integrate.'
  },
  {
    id: 4,
    number: '04',
    title: 'Launch',
    description: 'Test, deploy and release.'
  },
  {
    id: 5,
    number: '05',
    title: 'Grow',
    description: 'Support and improve.'
  }
]

export default function HowWeWorkClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
            A clear process from
            <span className={styles.headingHighlight}> idea to launch.</span>
          </h2>
          <p className={styles.subtitle}>
            We follow a structured yet flexible process to ensure your project 
            is delivered on time, on budget, and with exceptional quality.
          </p>
        </motion.div>

        {/* Roadmap */}
        <div className={styles.roadmap}>
          {/* Progress Bar */}
          <div className={styles.progressTrack}>
            <motion.div 
              className={styles.progressFill}
              initial={{ width: '0%' }}
              animate={isInView ? { width: '100%' } : {}}
              transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
            />
          </div>

          {/* Steps */}
          <div className={styles.stepsContainer}>
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                className={styles.stepWrapper}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5,
                  delay: 0.2 + (index * 0.08),
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                {/* Step Node */}
                <div className={styles.stepNode}>
                  <div className={styles.nodeCircle}>
                    <span className={styles.nodeNumber}>{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={styles.nodeConnector}>
                      <div className={styles.connectorLine} />
                      <span className={styles.connectorArrow}>↓</span>
                    </div>
                  )}
                </div>

                {/* Step Content */}
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className={styles.progressIndicator}>
          <div className={styles.indicatorTrack}>
            {steps.map((_, index) => (
              <motion.div 
                key={index}
                className={styles.indicatorSegment}
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ 
                  duration: 0.4,
                  delay: 0.4 + (index * 0.06),
                  ease: 'easeOut'
                }}
              />
            ))}
          </div>
          <div className={styles.indicatorLabels}>
            {steps.map((step) => (
              <span key={step.id} className={styles.indicatorLabel}>
                {step.number}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          className={styles.ctaWrapper}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <Link href="/process" className={styles.ctaButton}>
            Explore Our Process →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}