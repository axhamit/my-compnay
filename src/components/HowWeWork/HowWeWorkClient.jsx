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
    description: 'We dive deep to understand your business, goals, and challenges.'
  },
  {
    id: 2,
    number: '02',
    title: 'Define',
    description: 'We translate insights into clear requirements and a strategic roadmap.'
  },
  {
    id: 3,
    number: '03',
    title: 'Design',
    description: 'We create intuitive, beautiful interfaces that users will love.'
  },
  {
    id: 4,
    number: '04',
    title: 'Build',
    description: 'Our engineers bring designs to life with clean, scalable code.'
  },
  {
    id: 5,
    number: '05',
    title: 'Test',
    description: 'We rigorously test to ensure quality, performance, and reliability.'
  },
  {
    id: 6,
    number: '06',
    title: 'Launch',
    description: 'We handle deployment and monitoring for a smooth go-live.'
  },
  {
    id: 7,
    number: '07',
    title: 'Grow',
    description: 'We continue to optimize, iterate, and scale your product.'
  }
]

export default function HowWeWorkClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className={styles.howWeWork} ref={ref}>
      <div className={styles.container}>
        {/* Header */}
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
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          className={styles.grid}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className={styles.step}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.4,
                delay: 0.1 + (index * 0.05),
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ y: -2 }}
            >
              <div className={styles.stepNumber}>
                <span className={styles.number}>{step.number}</span>
                <span className={styles.numberLine} />
              </div>
              <h4 className={styles.stepTitle}>{step.title}</h4>
              <p className={styles.stepDescription}>{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className={styles.ctaWrapper}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <Link href="/process" className={styles.ctaButton}>
            Explore Our Process →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}