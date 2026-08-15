// src/components/Trust/TrustClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import styles from './Trust.module.css'

// Replace these with your actual client logos and names
const clients = [
  {
    name: 'Google',
    logo: '/clients/google.svg',
    industry: 'Technology',
    description: 'Global technology leader'
  },
  {
    name: 'Microsoft',
    logo: '/clients/microsoft.svg',
    industry: 'Technology',
    description: 'Enterprise software solutions'
  },
  {
    name: 'Amazon',
    logo: '/clients/amazon.svg',
    industry: 'E-commerce',
    description: 'Global e-commerce platform'
  },
  {
    name: 'Apple',
    logo: '/clients/apple.svg',
    industry: 'Technology',
    description: 'Consumer electronics giant'
  },
  {
    name: 'Meta',
    logo: '/clients/meta.svg',
    industry: 'Social Media',
    description: 'Social media and technology'
  },
  {
    name: 'Netflix',
    logo: '/clients/netflix.svg',
    industry: 'Entertainment',
    description: 'Global streaming service'
  }
]

// If you don't have logos yet, use text-based badges
const clientsWithText = [
  { name: 'Google', color: '#4285F4' },
  { name: 'Microsoft', color: '#00A4EF' },
  { name: 'Amazon', color: '#FF9900' },
  { name: 'Apple', color: '#555555' },
  { name: 'Meta', color: '#1877F2' },
  { name: 'Netflix', color: '#E50914' }
]

export default function TrustClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className={styles.trust} ref={ref}>
      <div className={styles.container}>
        {/* Initially: Built with modern technology. Designed for real businesses. */}
        <motion.div 
          className={styles.initialContent}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.tagline}>Built with modern technology. Designed for real businesses.</span>
        </motion.div>

        {/* Trusted By Section */}
        <motion.div 
          className={styles.trustedSection}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className={styles.trustedHeader}>
            <span className={styles.trustedLabel}>Trusted by</span>
            <span className={styles.trustedCount}>100+ companies worldwide</span>
          </div>

          {/* Client Logos Grid */}
          <motion.div 
            className={styles.clientGrid}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.4
                }
              }
            }}
          >
            {clientsWithText.map((client, index) => (
              <motion.div
                key={client.name}
                className={styles.clientCard}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.2 }
                }}
              >
                <div className={styles.clientLogoWrapper}>
                  <div 
                    className={styles.clientLogoPlaceholder}
                    style={{ backgroundColor: client.color + '20' }}
                  >
                    <span 
                      className={styles.clientInitial}
                      style={{ color: client.color }}
                    >
                      {client.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className={styles.clientInfo}>
                  <span className={styles.clientName}>{client.name}</span>
                  <span className={styles.clientIndustry}>Technology</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Alternative: With actual images (if you have logo files) */}
          {/*
          <motion.div 
            className={styles.clientGridImages}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.4
                }
              }
            }}
          >
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                className={styles.clientImageCard}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ 
                  y: -4,
                  transition: { duration: 0.2 }
                }}
              >
                <div className={styles.clientImageWrapper}>
                  <div className={styles.clientImagePlaceholder}>
                    {client.name.charAt(0)}
                  </div>
                </div>
                <span className={styles.clientImageName}>{client.name}</span>
              </motion.div>
            ))}
          </motion.div>
          */}

          {/* Trust Indicators */}
          <motion.div 
            className={styles.trustIndicators}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className={styles.indicator}>
              <span className={styles.indicatorNumber}>98%</span>
              <span className={styles.indicatorLabel}>Client Retention</span>
            </div>
            <div className={styles.indicatorDivider}></div>
            <div className={styles.indicator}>
              <span className={styles.indicatorNumber}>150+</span>
              <span className={styles.indicatorLabel}>Projects Delivered</span>
            </div>
            <div className={styles.indicatorDivider}></div>
            <div className={styles.indicator}>
              <span className={styles.indicatorNumber}>4.9★</span>
              <span className={styles.indicatorLabel}>Average Rating</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}