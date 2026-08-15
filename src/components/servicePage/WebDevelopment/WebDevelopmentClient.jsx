// src/components/WebDevelopment/WebDevelopmentClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import styles from './WebDevelopment.module.css'

const webTypes = [
  'Corporate websites',
  'SaaS platforms',
  'Web applications',
  'Dashboards',
  'Customer portals',
  'Marketplaces'
]

const technologies = ['React', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL']

export default function WebDevelopmentClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className={styles.webDev} ref={ref}>
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
              Web Development
            </div>

            {/* Heading */}
            <h2 className={styles.heading}>
              Web experiences built for 
              <span className={styles.headingHighlight}> performance and scale.</span>
            </h2>

            {/* Description */}
            <p className={styles.description}>
              We build high-performance websites, web applications, and SaaS platforms 
              that are fast, secure, and designed to grow with your business.
            </p>

            {/* Web Types Grid */}
            <div className={styles.webTypes}>
              {webTypes.map((type, index) => (
                <motion.div 
                  key={index} 
                  className={styles.webTypeItem}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + (index * 0.05), duration: 0.4 }}
                >
                  <span className={styles.webTypeDot} />
                  <span className={styles.webTypeText}>{type}</span>
                </motion.div>
              ))}
            </div>

            {/* Technology Line */}
            <div className={styles.techSection}>
              <span className={styles.techLabel}>Technology</span>
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

            {/* Explore Link */}
            <Link href="/services/web-development" className={styles.exploreLink}>
              Explore →
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
              {/* Main UI Screenshot */}
              <motion.div 
                className={styles.screenshotCard}
                animate={{ 
                  y: [0, -6, 0],
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <div className={styles.screenshotHeader}>
                  <div className={styles.screenshotDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className={styles.screenshotUrl}>app.studiox.com/dashboard</div>
                </div>
                <div className={styles.screenshotBody}>
                  {/* Dashboard UI */}
                  <div className={styles.dashboardUI}>
                    <div className={styles.dashboardSidebar}>
                      <div className={styles.sidebarLogo}>
                        <svg viewBox="0 0 30 30" fill="none">
                          <rect width="30" height="30" rx="8" fill="#0EA5E9"/>
                          <path d="M9 9L15 21L21 9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <div className={styles.sidebarItems}>
                        <div className={styles.sidebarItem}></div>
                        <div className={styles.sidebarItem}></div>
                        <div className={styles.sidebarItem}></div>
                        <div className={styles.sidebarItem}></div>
                      </div>
                    </div>
                    <div className={styles.dashboardMain}>
                      <div className={styles.dashboardTop}>
                        <div className={styles.dashboardSearch}></div>
                        <div className={styles.dashboardUser}></div>
                      </div>
                      <div className={styles.dashboardCards}>
                        <div className={styles.statCard}>
                          <span className={styles.statCardLabel}>Revenue</span>
                          <span className={styles.statCardValue}>$48,592</span>
                        </div>
                        <div className={styles.statCard}>
                          <span className={styles.statCardLabel}>Users</span>
                          <span className={styles.statCardValue}>2,847</span>
                        </div>
                        <div className={styles.statCard}>
                          <span className={styles.statCardLabel}>Growth</span>
                          <span className={styles.statCardValue}>+12.5%</span>
                        </div>
                      </div>
                      <div className={styles.dashboardChart}>
                        <div className={styles.chartBars}>
                          <div className={styles.chartBar} style={{ height: '35%' }}></div>
                          <div className={styles.chartBar} style={{ height: '55%' }}></div>
                          <div className={styles.chartBar} style={{ height: '45%' }}></div>
                          <div className={styles.chartBar} style={{ height: '75%' }}></div>
                          <div className={styles.chartBar} style={{ height: '60%' }}></div>
                          <div className={styles.chartBar} style={{ height: '85%' }}></div>
                          <div className={styles.chartBar} style={{ height: '50%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating UI Elements */}
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
                <span className={styles.floatingIcon}>⚡</span>
                <span className={styles.floatingText}>99.9% Uptime</span>
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
                <span className={styles.floatingIcon}>🚀</span>
                <span className={styles.floatingText}>2x Faster Load</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}