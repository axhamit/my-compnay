// src/components/FinalCTA/FinalCTA.client.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './FinalCTA.module.css'

export default function FinalCTAClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const floatingElements = ['✨', '🚀', '💡', '🌟', '⚡', '🎯']

  // Generate consistent positions on client only
  const [particleStyles, setParticleStyles] = useState([])

  useEffect(() => {
    if (isClient) {
      const styles = floatingElements.map(() => ({
        left: `${10 + Math.random() * 80}%`,
        top: `${10 + Math.random() * 80}%`,
        fontSize: `${1.5 + Math.random() * 1.5}rem`,
        x: (Math.random() - 0.5) * 100,
        y: (Math.random() - 0.5) * 100,
        delay: Math.random() * 2
      }))
      setParticleStyles(styles)
    }
  }, [isClient])

  // Don't render floating particles on server
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
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Let's Build Together
            </div>

            <h2 className={styles.heading}>
              Have a Project
              <span className={styles.headingHighlight}> In Mind?</span>
            </h2>

            <p className={styles.description}>
              Let's turn your idea into a digital product that drives real business results.
            </p>

            <div className={styles.buttonWrapper}>
              <Link href="/contact" className={styles.primaryButton}>
                Start a Project
                <svg viewBox="0 0 20 20" fill="currentColor" className={styles.buttonIcon}>
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="/process" className={styles.secondaryButton}>
                See Our Process
              </Link>
            </div>

            <div className={styles.trustIndicators}>
              <div className={styles.trustItem}>
                <span className={styles.trustNumber}>50+</span>
                <span className={styles.trustLabel}>Projects Delivered</span>
              </div>
              <div className={styles.trustDivider} />
              <div className={styles.trustItem}>
                <span className={styles.trustNumber}>98%</span>
                <span className={styles.trustLabel}>Satisfaction Rate</span>
              </div>
              <div className={styles.trustDivider} />
              <div className={styles.trustItem}>
                <span className={styles.trustNumber}>24/7</span>
                <span className={styles.trustLabel}>Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.cta} ref={ref}>
      {/* Animated Background */}
      <div className={styles.background}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
        
        {/* Grid Pattern */}
        <div className={styles.gridPattern} />
        
        {/* Floating Particles - Only rendered on client */}
        {particleStyles.map((style, index) => (
          <motion.div
            key={index}
            className={styles.floatingParticle}
            initial={{ 
              x: 0,
              y: 0,
              opacity: 0,
              scale: 0
            }}
            animate={isInView ? {
              x: [0, style.x],
              y: [0, style.y],
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0]
            } : {}}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: index * 1.5 + style.delay,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              position: 'absolute',
              fontSize: style.fontSize,
              left: style.left,
              top: style.top
            }}
          >
            {floatingElements[index]}
          </motion.div>
        ))}
      </div>

      <div className={styles.container}>
        {/* Main Content */}
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {/* Badge */}
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            Let's Build Together
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            className={styles.heading}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Have a Project
            <span className={styles.headingHighlight}> In Mind?</span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Let's turn your idea into a digital product that drives real business results.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            className={styles.buttonWrapper}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link href="/contact" className={styles.primaryButton}>
              Start a Project
              <svg viewBox="0 0 20 20" fill="currentColor" className={styles.buttonIcon}>
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            
            {/* Secondary CTA */}
            <Link href="/process" className={styles.secondaryButton}>
              See Our Process
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className={styles.trustIndicators}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>50+</span>
              <span className={styles.trustLabel}>Projects Delivered</span>
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>98%</span>
              <span className={styles.trustLabel}>Satisfaction Rate</span>
            </div>
            <div className={styles.trustDivider} />
            <div className={styles.trustItem}>
              <span className={styles.trustNumber}>24/7</span>
              <span className={styles.trustLabel}>Support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}