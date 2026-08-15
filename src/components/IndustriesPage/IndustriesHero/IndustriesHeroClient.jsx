// src/components/IndustriesHero/IndustriesHeroClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './IndustriesHero.module.css'

const industries = [
  { name: 'Startups', icon: '🚀' },
  { name: 'Education', icon: '🎓' },
  { name: 'Healthcare', icon: '🏥' },
  { name: 'Real Estate', icon: '🏢' },
  { name: 'E-Commerce', icon: '🛒' },
  { name: 'Hospitality', icon: '🏨' },
  { name: 'Finance', icon: '💰' },
  { name: 'Professional Services', icon: '💼' }
]

export default function IndustriesHeroClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className={styles.industriesHero} ref={ref}>
      {/* Subtle Background */}
      <div className={styles.bgOrb} />
      <div className={styles.bgGrid} />

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
              Industries
            </div>

            {/* Heading */}
            <h1 className={styles.heading}>
              Technology built around
              <span className={styles.headingHighlight}> your industry.</span>
            </h1>

            {/* Description */}
            <p className={styles.description}>
              We create digital products and software solutions tailored to the 
              unique needs of different businesses.
            </p>

            {/* Industry Icons */}
            <div className={styles.industryIcons}>
              {industries.map((industry, index) => (
                <motion.div 
                  key={index} 
                  className={styles.industryItem}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    delay: 0.2 + (index * 0.04),
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ y: -2 }}
                >
                  <span className={styles.industryIcon}>{industry.icon}</span>
                  <span className={styles.industryName}>{industry.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            className={styles.visual}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className={styles.visualContainer}>
              {/* UI Collage */}
              <div className={styles.collage}>
                {/* Card 1 - Dashboard */}
                <motion.div 
                  className={styles.collageCard1}
                  animate={{ 
                    y: [0, -6, 0],
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <div className={styles.cardHeader}>
                    <div className={styles.cardDots}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <span className={styles.cardUrl}>dashboard.app</span>
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardChart}>
                      <div className={styles.chartBars}>
                        <div className={styles.chartBar} style={{ height: '40%' }} />
                        <div className={styles.chartBar} style={{ height: '70%' }} />
                        <div className={styles.chartBar} style={{ height: '55%' }} />
                        <div className={styles.chartBar} style={{ height: '85%' }} />
                        <div className={styles.chartBar} style={{ height: '60%' }} />
                      </div>
                    </div>
                    <div className={styles.cardStats}>
                      <div className={styles.cardStat}>
                        <span className={styles.statValue}>$48K</span>
                        <span className={styles.statLabel}>Revenue</span>
                      </div>
                      <div className={styles.cardStat}>
                        <span className={styles.statValue}>2.4K</span>
                        <span className={styles.statLabel}>Users</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Card 2 - Mobile */}
                <motion.div 
                  className={styles.collageCard2}
                  animate={{ 
                    y: [0, 6, 0],
                  }}
                  transition={{ 
                    duration: 4.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1
                  }}
                >
                  <div className={styles.mobileHeader}>
                    <div className={styles.mobileNotch} />
                  </div>
                  <div className={styles.mobileBody}>
                    <div className={styles.mobileAppIcon}>
                      <svg viewBox="0 0 30 30" fill="none">
                        <rect width="30" height="30" rx="8" fill="#0EA5E9"/>
                        <path d="M9 9L15 21L21 9" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
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
                  </div>
                </motion.div>

                {/* Card 3 - Analytics */}
                <motion.div 
                  className={styles.collageCard3}
                  animate={{ 
                    y: [0, -4, 0],
                  }}
                  transition={{ 
                    duration: 5.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1.5
                  }}
                >
                  <div className={styles.analyticsHeader}>
                    <span className={styles.analyticsTitle}>Analytics</span>
                    <span className={styles.analyticsValue}>↑ 24%</span>
                  </div>
                  <div className={styles.analyticsBody}>
                    <div className={styles.analyticsBar} style={{ width: '75%' }} />
                    <div className={styles.analyticsBar} style={{ width: '50%' }} />
                    <div className={styles.analyticsBar} style={{ width: '90%' }} />
                    <div className={styles.analyticsBar} style={{ width: '65%' }} />
                  </div>
                </motion.div>

                {/* Floating Badge */}
                <motion.div 
                  className={styles.floatingBadge}
                  animate={{ 
                    y: [0, -8, 0],
                  }}
                  transition={{ 
                    duration: 3.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2
                  }}
                >
                  <span className={styles.floatingIcon}>🏆</span>
                  <span className={styles.floatingText}>Trusted by 50+ companies</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}