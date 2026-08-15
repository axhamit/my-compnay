// src/components/CustomSoftware/CustomSoftwareClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import styles from './CustomSoftware.module.css'

const softwareTypes = [
  'CRM',
  'ERP',
  'LMS',
  'Booking Systems',
  'Internal Tools',
  'Automation',
  'Analytics'
]

const technologies = ['Python', 'Java', 'Node.js', 'PostgreSQL']

export default function CustomSoftwareClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className={styles.customSoftware} ref={ref}>
      {/* Background Elements */}
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />
      <div className={styles.gridPattern} />

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Content */}
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Badge */}
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Custom Software
            </div>

            {/* Heading */}
            <h2 className={styles.heading}>
              Software built around the 
              <span className={styles.headingHighlight}> way your business works.</span>
            </h2>

            {/* Description */}
            <p className={styles.description}>
              Replace spreadsheets, manual processes and disconnected tools with 
              software designed specifically for your business.
            </p>

            {/* Software Types */}
            <div className={styles.softwareTypes}>
              {softwareTypes.map((type, index) => (
                <motion.div 
                  key={index} 
                  className={styles.softwareTypeItem}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + (index * 0.04), duration: 0.4 }}
                >
                  <span className={styles.softwareTypeDot} />
                  <span className={styles.softwareTypeText}>{type}</span>
                </motion.div>
              ))}
            </div>

            {/* Technology Line */}
            <div className={styles.techSection}>
              <span className={styles.techLabel}>Built with</span>
              <div className={styles.techTags}>
                {technologies.map((tech, index) => (
                  <span key={index} className={styles.techTag}>
                    {tech}
                    {index < technologies.length - 1 && (
                      <span className={styles.techSeparator}>·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link href="/services/custom-software" className={styles.ctaButton}>
              Discuss Your Software →
            </Link>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            className={styles.visual}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className={styles.visualContainer}>
              {/* Transformation Flow */}
              <div className={styles.flowContainer}>
                {/* Step 1: Manual Work */}
                <motion.div 
                  className={styles.flowStep}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <div className={styles.flowIcon}>📋</div>
                  <span className={styles.flowLabel}>Manual Work</span>
                  <div className={styles.flowLine} />
                </motion.div>

                {/* Step 2: Disconnected Systems */}
                <motion.div 
                  className={styles.flowStep}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className={styles.flowIcon}>🔗</div>
                  <span className={styles.flowLabel}>Disconnected Systems</span>
                  <div className={styles.flowLine} />
                </motion.div>

                {/* Step 3: Custom Software */}
                <motion.div 
                  className={`${styles.flowStep} ${styles.flowStepHighlight}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <div className={styles.flowIcon}>⚙️</div>
                  <span className={styles.flowLabel}>Custom Software</span>
                  <div className={styles.flowLine} />
                </motion.div>

                {/* Step 4: Automated Business */}
                <motion.div 
                  className={`${styles.flowStep} ${styles.flowStepFinal}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <div className={styles.flowIcon}>🚀</div>
                  <span className={styles.flowLabel}>Automated Business</span>
                </motion.div>
              </div>

              {/* Floating Cards */}
              <motion.div 
                className={styles.floatingCard1}
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5
                }}
              >
                <span className={styles.floatingIcon}>📊</span>
                <span className={styles.floatingText}>Data-Driven</span>
              </motion.div>

              <motion.div 
                className={styles.floatingCard2}
                animate={{ 
                  y: [0, 8, 0],
                  rotate: [0, -2, 0]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1
                }}
              >
                <span className={styles.floatingIcon}>🔒</span>
                <span className={styles.floatingText}>Secure & Scalable</span>
              </motion.div>

              <motion.div 
                className={styles.floatingCard3}
                animate={{ 
                  y: [0, -6, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.5
                }}
              >
                <span className={styles.floatingIcon}>⚡</span>
                <span className={styles.floatingText}>Process Automation</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}