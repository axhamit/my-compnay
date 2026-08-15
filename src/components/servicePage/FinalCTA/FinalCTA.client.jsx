// src/components/FinalCTA/FinalCTA.client.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './FinalCTA.module.css'

export default function FinalCTAClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const particles = ['✦', '◈', '◆', '◇', '✦', '◈', '◆', '◇']

  const [particleStyles, setParticleStyles] = useState([])

  useEffect(() => {
    if (isClient) {
      const styles = particles.map(() => ({
        left: `${5 + Math.random() * 90}%`,
        top: `${5 + Math.random() * 90}%`,
        fontSize: `${1 + Math.random() * 2}rem`,
        delay: Math.random() * 4,
        duration: 8 + Math.random() * 6
      }))
      setParticleStyles(styles)
    }
  }, [isClient])

  // Server render
  if (!isClient) {
    return (
      <section className={styles.cta} ref={ref}>
        <div className={styles.background}>
          <div className={styles.orb1} />
          <div className={styles.orb2} />
          <div className={styles.orb3} />
          <div className={styles.gridPattern} />
        </div>

        <div className={styles.container}>
          <div className={styles.content}>
            <span className={styles.smallText}>Have an idea?</span>
            <h2 className={styles.heading}>
              Let's turn it into
              <span className={styles.headingHighlight}> something real.</span>
            </h2>
            <p className={styles.description}>
              Tell us what you're trying to build and we'll help you figure out 
              the best way forward.
            </p>
            <div className={styles.buttonGroup}>
              <Link href="/contact" className={styles.primaryButton}>
                Start a Project →
              </Link>
              <Link href="/contact" className={styles.secondaryButton}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.cta} ref={ref}>
      {/* Background */}
      <div className={styles.background}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
        <div className={styles.gridPattern} />
        
        {/* Floating Particles */}
        {particleStyles.map((style, index) => (
          <motion.div
            key={index}
            className={styles.particle}
            initial={{ 
              opacity: 0,
              scale: 0,
              y: 0,
              x: 0
            }}
            animate={isInView ? {
              opacity: [0, 0.6, 0.6, 0],
              scale: [0, 1, 1, 0],
              y: [0, -80 - Math.random() * 60],
              x: [0, (Math.random() - 0.5) * 60]
            } : {}}
            transition={{
              duration: style.duration,
              delay: style.delay,
              repeat: Infinity,
              ease: 'easeOut'
            }}
            style={{
              position: 'absolute',
              fontSize: style.fontSize,
              left: style.left,
              top: style.top,
              color: 'rgba(14, 165, 233, 0.12)',
              fontWeight: 300,
              letterSpacing: '0.1em'
            }}
          >
            {particles[index]}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className={styles.container}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {/* Small Text */}
          <motion.span 
            className={styles.smallText}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Have an idea?
          </motion.span>

          {/* Heading */}
          <motion.h2 
            className={styles.heading}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Let's turn it into
            <span className={styles.headingHighlight}> something real.</span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Tell us what you're trying to build and we'll help you figure out 
            the best way forward.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            className={styles.buttonGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link href="/contact" className={styles.primaryButton}>
              Start a Project →
            </Link>
            <Link href="/contact" className={styles.secondaryButton}>
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}