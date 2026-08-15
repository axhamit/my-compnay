// src/components/AboutHero/AboutHeroClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import styles from './AboutHero.module.css'

export default function AboutHeroClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  // Stats data - update with actual numbers
  const stats = [
    { value: '4+', label: 'Years Experience' },
    { value: '20+', label: 'Projects' },
    { value: '10+', label: 'Technologies' }
  ]

  return (
    <section className={styles.hero} ref={ref}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Content */}
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div 
              className={styles.badge}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              About Us
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className={styles.heading}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              We build digital products that
              <span className={styles.headingHighlight}> make businesses better.</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              We are a technology and digital product company helping businesses 
              turn ideas into reliable, scalable and beautiful digital experiences.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              className={styles.buttonGroup}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Link href="/contact" className={styles.primaryButton}>
                Work With Us →
              </Link>
              <Link href="/work" className={styles.secondaryButton}>
                Explore Our Work →
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            className={styles.visual}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className={styles.visualContainer}>
              {/* Main Image Card */}
              <motion.div 
                className={styles.mainCard}
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <div className={styles.cardImage}>
                  {/* Team/Company Image Placeholder */}
                  <div className={styles.imagePlaceholder}>
                    <div className={styles.imageContent}>
                      <span className={styles.imageIcon}>👥</span>
                      <span className={styles.imageLabel}>Our Team</span>
                    </div>
                  </div>
                  
                  {/* Floating UI Cards */}
                  <motion.div 
                    className={styles.floatingCard1}
                    animate={{ 
                      y: [0, -6, 0],
                      rotate: [0, 2, 0]
                    }}
                    transition={{ 
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 0.5
                    }}
                  >
                    <div className={styles.floatingCardContent}>
                      <span className={styles.floatingIcon}>📱</span>
                      <span className={styles.floatingText}>Mobile App</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    className={styles.floatingCard2}
                    animate={{ 
                      y: [0, 6, 0],
                      rotate: [0, -2, 0]
                    }}
                    transition={{ 
                      duration: 4.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 1
                    }}
                  >
                    <div className={styles.floatingCardContent}>
                      <span className={styles.floatingIcon}>💻</span>
                      <span className={styles.floatingText}>Web App</span>
                    </div>
                  </motion.div>

                  <motion.div 
                    className={styles.floatingCard3}
                    animate={{ 
                      y: [0, -4, 0],
                      rotate: [0, 3, 0]
                    }}
                    transition={{ 
                      duration: 5.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 1.5
                    }}
                  >
                    <div className={styles.floatingCardContent}>
                      <span className={styles.floatingIcon}>🎨</span>
                      <span className={styles.floatingText}>UI/UX</span>
                    </div>
                  </motion.div>

                  {/* Abstract 3D Object */}
                  <motion.div 
                    className={styles.abstractObject}
                    animate={{ 
                      rotate: 360,
                    }}
                    transition={{ 
                      duration: 30,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                  >
                    <svg viewBox="0 0 100 100" fill="none">
                      <circle cx="50" cy="50" r="30" stroke="#0EA5E9" strokeWidth="2" opacity="0.3"/>
                      <circle cx="50" cy="50" r="20" stroke="#3B82F6" strokeWidth="2" opacity="0.5"/>
                      <circle cx="50" cy="50" r="10" fill="#0EA5E9" opacity="0.4"/>
                      <circle cx="50" cy="50" r="4" fill="#0EA5E9" opacity="0.8"/>
                    </svg>
                  </motion.div>
                </div>
              </motion.div>

              {/* Stats at bottom */}
              <motion.div 
                className={styles.statsContainer}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {stats.map((stat, index) => (
                  <div key={index} className={styles.statItem}>
                    <span className={styles.statValue}>{stat.value}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                    {index < stats.length - 1 && (
                      <span className={styles.statDivider}></span>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}