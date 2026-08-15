// src/components/ServicesHero/ServicesHeroClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import styles from './ServicesHero.module.css'

export default function ServicesHeroClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className={styles.hero} ref={ref}>
      {/* Background decoration */}
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Content */}
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Badge */}
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Our Services
            </div>

            {/* Heading */}
            <h1 className={styles.heading}>
              Everything you need to build,
              <br />
              <span className={styles.headingHighlight}>launch and grow</span>
              <br />
              <span className={styles.headingSub}>digitally.</span>
            </h1>

            {/* Description */}
            <p className={styles.description}>
              From strategy and UI/UX to web applications, mobile apps, custom software 
              and digital growth, we bring design, technology and business thinking together.
            </p>

            {/* Buttons */}
            <div className={styles.buttonGroup}>
              <Link href="/contact" className={styles.primaryButton}>
                Start a Project
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="/work" className={styles.secondaryButton}>
                Explore Our Work
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            className={styles.visual}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className={styles.visualContainer}>
              {/* Main Dashboard Card */}
              <motion.div 
                className={styles.dashboardCard}
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <div className={styles.dashboardHeader}>
                  <div className={styles.dashboardDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className={styles.dashboardUrl}>dashboard.studiox.com</div>
                  <div className={styles.dashboardActions}>
                    <span className={styles.actionDot}></span>
                  </div>
                </div>
                <div className={styles.dashboardBody}>
                  {/* Chart Area */}
                  <div className={styles.chartArea}>
                    <div className={styles.chartHeader}>
                      <div className={styles.chartLeft}>
                        <span className={styles.chartLabel}>Revenue Overview</span>
                        <span className={styles.chartValue}>$124,592</span>
                      </div>
                      <span className={styles.chartChange}>↑ 12.5%</span>
                    </div>
                    <div className={styles.chartBars}>
                      <div className={styles.bar} style={{ height: '40%' }}></div>
                      <div className={styles.bar} style={{ height: '65%' }}></div>
                      <div className={styles.bar} style={{ height: '50%' }}></div>
                      <div className={styles.bar} style={{ height: '85%' }}></div>
                      <div className={styles.bar} style={{ height: '60%' }}></div>
                      <div className={styles.bar} style={{ height: '95%' }}></div>
                      <div className={styles.bar} style={{ height: '45%' }}></div>
                    </div>
                  </div>
                  
                  {/* Stats Row */}
                  <div className={styles.statsRow}>
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>8,429</span>
                      <span className={styles.statLabel}>Active Users</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>342</span>
                      <span className={styles.statLabel}>Orders</span>
                    </div>
                    <div className={styles.statDivider}></div>
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>4.9★</span>
                      <span className={styles.statLabel}>Rating</span>
                    </div>
                  </div>

                  {/* User Avatars */}
                  <div className={styles.userSection}>
                    <div className={styles.userAvatars}>
                      <div className={styles.avatar}></div>
                      <div className={styles.avatar}></div>
                      <div className={styles.avatar}></div>
                      <div className={styles.avatar}></div>
                      <div className={styles.avatarPlus}>+24</div>
                    </div>
                    <span className={styles.userText}>12 new signups today</span>
                  </div>
                </div>
              </motion.div>

              {/* Mobile App Card */}
              <motion.div 
                className={styles.mobileCard}
                animate={{ 
                  y: [0, 6, 0],
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
                <div className={styles.mobileBody}>
                  <div className={styles.mobileAppIcon}>
                    <svg viewBox="0 0 40 40" fill="none">
                      <rect width="40" height="40" rx="10" fill="#0EA5E9"/>
                      <path d="M12 12L20 28L28 12" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className={styles.mobileAppName}>StudioX</div>
                  <div className={styles.mobileMetrics}>
                    <div className={styles.mobileMetric}>
                      <span className={styles.mobileValue}>4.9</span>
                      <span className={styles.mobileLabel}>Rating</span>
                    </div>
                    <div className={styles.mobileMetric}>
                      <span className={styles.mobileValue}>50K+</span>
                      <span className={styles.mobileLabel}>Downloads</span>
                    </div>
                  </div>
                  <div className={styles.mobileButtons}>
                    <div className={styles.mobileBtn}></div>
                    <div className={styles.mobileBtn}></div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badges */}
              <motion.div 
                className={styles.floatingBadge1}
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5
                }}
              >
                <span className={styles.badgeIcon}>⚡</span>
                <span className={styles.badgeText}>Fast Performance</span>
              </motion.div>

              <motion.div 
                className={styles.floatingBadge2}
                animate={{ 
                  y: [0, 8, 0],
                  rotate: [0, -2, 0]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.5
                }}
              >
                <span className={styles.badgeIcon}>🎨</span>
                <span className={styles.badgeText}>Pixel Perfect</span>
              </motion.div>

              <motion.div 
                className={styles.floatingBadge3}
                animate={{ 
                  y: [0, -6, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.8
                }}
              >
                <span className={styles.badgeIcon}>📱</span>
                <span className={styles.badgeText}>Mobile First</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}