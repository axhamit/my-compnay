// src/components/Founder/FounderClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Founder.module.css'

export default function FounderClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const expertise = [
    { name: 'Product Strategy', icon: '🎯' },
    { name: 'Digital Innovation', icon: '💡' },
    { name: 'Business Growth', icon: '📈' },
    { name: 'Software Architecture', icon: '🏗️' }
  ]

  return (
    <section className={styles.founder} ref={ref}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left: Photo */}
          <motion.div 
            className={styles.photoWrapper}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className={styles.photoContainer}>
              <div className={styles.photoFrame}>
                {/* Replace the placeholder with your actual image */}
                <div className={styles.imageWrapper}>
                  <Image
                    src="/profile,.jpeg"
                    alt="Amit - Founder"
                    fill
                    className={styles.founderImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className={styles.photoAccent1} />
                <div className={styles.photoAccent2} />
              </div>
              {/* Trust Badge */}
              <div className={styles.trustBadge}>
                <span className={styles.trustIcon}>⭐</span>
                <span className={styles.trustText}>Visionary Leader</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Badge */}
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Meet the Founder
            </div>

            {/* Name & Title */}
            <h2 className={styles.name}>
              Amit
              <span className={styles.nameHighlight}> — Founder</span>
            </h2>
            <p className={styles.title}>Building products that make businesses better</p>

            {/* Story */}
            <p className={styles.story}>
              I started this company with the goal of helping businesses turn their 
              ideas into well-designed, reliable digital products. I believe technology 
              should solve real problems — not create new ones.
            </p>

            <p className={styles.story}>
              My focus is on building a company that delivers excellence, 
              fosters innovation, and creates lasting impact for our clients.
            </p>

            {/* Expertise Grid */}
            <div className={styles.expertise}>
              <h4 className={styles.expertiseLabel}>Entrepreneurial Focus</h4>
              <div className={styles.expertiseGrid}>
                {expertise.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className={styles.expertiseItem}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + (index * 0.08), duration: 0.4 }}
                  >
                    <span className={styles.expertiseIcon}>{item.icon}</span>
                    <span className={styles.expertiseName}>{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.div 
              className={styles.buttonWrapper}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <Link href="/contact" className={styles.ctaButton}>
                Connect with us
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}