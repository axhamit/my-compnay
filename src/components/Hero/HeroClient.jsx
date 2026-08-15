// src/components/Hero/HeroClient.jsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Hero.module.css'
import FloatingElements from './FloatingElements'
import HeroBackground from './HeroBackground'

export default function HeroClient() {
  return (
    <section className={styles.hero}>
      <HeroBackground />
      
      <div className={styles.container}>
        {/* Content Grid */}
        <div className={styles.grid}>
          {/* Left Content */}
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div 
              className={styles.badge}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className={styles.badgeDot}></span>
              Digital Product Agency
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              className={styles.headline}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              We Build Digital Products That
              <span className={styles.headlineHighlight}> Move Businesses Forward.</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              From web applications and mobile apps to custom software and digital growth, 
              we help businesses turn ideas into powerful digital products.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              className={styles.buttonGroup}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Link href="/contact" className={styles.primaryButton}>
                Start a Project
                <svg className={styles.buttonIcon} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="/work" className={styles.secondaryButton}>
                View Our Work
                <svg className={styles.buttonIcon} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className={styles.stats}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className={styles.statItem}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Projects Delivered</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>98%</span>
                <span className={styles.statLabel}>Client Satisfaction</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.9</span>
                <span className={styles.statLabel}>Average Rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            className={styles.visual}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className={styles.mockupStack}>
              {/* Main Dashboard Mockup */}
              <motion.div 
                className={styles.mainMockup}
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <div className={styles.mockupHeader}>
                  <div className={styles.mockupDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className={styles.mockupUrl}>dashboard.studiox.com</div>
                </div>
                <div className={styles.mockupContent}>
                  {/* Dashboard Content */}
                  <div className={styles.dashboardGrid}>
                    <div className={styles.dashboardCard}>
                      <div className={styles.cardHeader}>
                        <span className={styles.cardTitle}>Revenue</span>
                        <span className={styles.cardValue}>$124,592</span>
                        <span className={styles.cardChange}>+12.5%</span>
                      </div>
                      <div className={styles.chartBars}>
                        <div className={styles.bar} style={{ height: '60%' }}></div>
                        <div className={styles.bar} style={{ height: '80%' }}></div>
                        <div className={styles.bar} style={{ height: '45%' }}></div>
                        <div className={styles.bar} style={{ height: '90%' }}></div>
                        <div className={styles.bar} style={{ height: '70%' }}></div>
                        <div className={styles.bar} style={{ height: '55%' }}></div>
                      </div>
                    </div>
                    <div className={styles.dashboardCard}>
                      <div className={styles.cardHeader}>
                        <span className={styles.cardTitle}>Users</span>
                        <span className={styles.cardValue}>8,429</span>
                        <span className={styles.cardChange}>+8.2%</span>
                      </div>
                      <div className={styles.userAvatars}>
                        <div className={styles.avatar}></div>
                        <div className={styles.avatar}></div>
                        <div className={styles.avatar}></div>
                        <div className={styles.avatar}></div>
                        <div className={styles.avatarPlus}>+124</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mobile App Mockup */}
              <motion.div 
                className={styles.mobileMockup}
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1
                }}
              >
                <div className={styles.mobileHeader}>
                  <div className={styles.mobileNotch}></div>
                </div>
                <div className={styles.mobileContent}>
                  <div className={styles.mobileAppIcon}>
                    <svg viewBox="0 0 40 40" fill="none">
                      <rect width="40" height="40" rx="12" fill="#0EA5E9"/>
                      <path d="M12 12L20 28L28 12" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className={styles.mobileAppName}>StudioX</div>
                  <div className={styles.mobileMetrics}>
                    <div className={styles.mobileMetric}>
                      <span className={styles.mobileMetricValue}>4.9</span>
                      <span className={styles.mobileMetricLabel}>Rating</span>
                    </div>
                    <div className={styles.mobileMetric}>
                      <span className={styles.mobileMetricValue}>50K+</span>
                      <span className={styles.mobileMetricLabel}>Downloads</span>
                    </div>
                  </div>
                  <div className={styles.mobileButtons}>
                    <div className={styles.mobileButton}></div>
                    <div className={styles.mobileButton}></div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <FloatingElements />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}