// src/components/MobileAppDev/MobileAppDevClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import styles from './MobileAppDev.module.css'

const capabilities = [
  'Customer Apps',
  'Business Apps',
  'E-commerce Apps',
  'Booking Apps',
  'On-demand Apps',
  'SaaS Apps'
]

const technologies = ['React Native', 'iOS', 'Android', 'Flutter']

export default function MobileAppDevClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className={styles.mobileDev} ref={ref}>
      {/* Background decoration */}
      <div className={styles.bgGradient} />

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
              Mobile App Development
            </div>

            {/* Heading */}
            <h2 className={styles.heading}>
              Mobile experiences
              <span className={styles.headingHighlight}> people love to use.</span>
            </h2>

            {/* Description */}
            <p className={styles.description}>
              We build fast, reliable cross-platform applications that work 
              beautifully across iOS and Android.
            </p>

            {/* Capabilities */}
            <div className={styles.capabilities}>
              {capabilities.map((cap, index) => (
                <motion.div 
                  key={index} 
                  className={styles.capabilityItem}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + (index * 0.05), duration: 0.4 }}
                >
                  <span className={styles.capabilityDot} />
                  <span className={styles.capabilityText}>{cap}</span>
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
            <Link href="/services/mobile-apps" className={styles.ctaButton}>
              Build a Mobile App →
            </Link>
          </motion.div>

          {/* Right Visual - Phone Mockups */}
          <motion.div 
            className={styles.visual}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className={styles.phoneContainer}>
              {/* Phone 1 - Main */}
              <motion.div 
                className={styles.phoneMain}
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <div className={styles.phoneFrame}>
                  <div className={styles.phoneNotch} />
                  <div className={styles.phoneScreen}>
                    {/* App UI Content */}
                    <div className={styles.appHeader}>
                      <div className={styles.appHeaderLeft}>
                        <div className={styles.appBack}></div>
                      </div>
                      <div className={styles.appHeaderRight}>
                        <div className={styles.appMore}></div>
                      </div>
                    </div>
                    
                    <div className={styles.appContent}>
                      <div className={styles.appProfile}>
                        <div className={styles.appAvatar}></div>
                        <div className={styles.appName}>
                          <div className={styles.appNameLine}></div>
                          <div className={styles.appNameLine}></div>
                        </div>
                      </div>

                      <div className={styles.appCards}>
                        <div className={styles.appCard}>
                          <div className={styles.appCardIcon}></div>
                          <div className={styles.appCardText}>
                            <div className={styles.appCardLine}></div>
                            <div className={styles.appCardLine}></div>
                          </div>
                        </div>
                        <div className={styles.appCard}>
                          <div className={styles.appCardIcon}></div>
                          <div className={styles.appCardText}>
                            <div className={styles.appCardLine}></div>
                            <div className={styles.appCardLine}></div>
                          </div>
                        </div>
                      </div>

                      <div className={styles.appChart}>
                        <div className={styles.appChartBars}>
                          <div className={styles.appChartBar} style={{ height: '40%' }}></div>
                          <div className={styles.appChartBar} style={{ height: '70%' }}></div>
                          <div className={styles.appChartBar} style={{ height: '55%' }}></div>
                          <div className={styles.appChartBar} style={{ height: '85%' }}></div>
                          <div className={styles.appChartBar} style={{ height: '60%' }}></div>
                        </div>
                      </div>

                      <div className={styles.appBottomNav}>
                        <div className={styles.appNavItem}></div>
                        <div className={styles.appNavItem}></div>
                        <div className={styles.appNavItem}></div>
                        <div className={styles.appNavItem}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Phone 2 - Secondary */}
              <motion.div 
                className={styles.phoneSecondary}
                animate={{ 
                  y: [0, 6, 0],
                  rotate: [0, -1, 0]
                }}
                transition={{ 
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1
                }}
              >
                <div className={styles.phoneFrame}>
                  <div className={styles.phoneNotch} />
                  <div className={styles.phoneScreen}>
                    <div className={styles.appHeader}>
                      <div className={styles.appHeaderLeft}>
                        <div className={styles.appBack}></div>
                      </div>
                      <div className={styles.appHeaderRight}>
                        <div className={styles.appMore}></div>
                      </div>
                    </div>
                    
                    <div className={styles.appContent}>
                      <div className={styles.appProfile}>
                        <div className={styles.appAvatar}></div>
                        <div className={styles.appName}>
                          <div className={styles.appNameLine}></div>
                          <div className={styles.appNameLine}></div>
                        </div>
                      </div>

                      <div className={styles.appList}>
                        <div className={styles.appListItem}>
                          <div className={styles.appListIcon}></div>
                          <div className={styles.appListText}>
                            <div className={styles.appListLine}></div>
                            <div className={styles.appListLine}></div>
                          </div>
                        </div>
                        <div className={styles.appListItem}>
                          <div className={styles.appListIcon}></div>
                          <div className={styles.appListText}>
                            <div className={styles.appListLine}></div>
                            <div className={styles.appListLine}></div>
                          </div>
                        </div>
                        <div className={styles.appListItem}>
                          <div className={styles.appListIcon}></div>
                          <div className={styles.appListText}>
                            <div className={styles.appListLine}></div>
                            <div className={styles.appListLine}></div>
                          </div>
                        </div>
                      </div>

                      <div className={styles.appBottomNav}>
                        <div className={styles.appNavItem}></div>
                        <div className={styles.appNavItem}></div>
                        <div className={styles.appNavItem}></div>
                        <div className={styles.appNavItem}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badges */}
              <motion.div 
                className={styles.floatingBadge1}
                animate={{ 
                  y: [0, -6, 0],
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5
                }}
              >
                <span className={styles.badgeIcon}>📱</span>
                <span className={styles.badgeText}>iOS + Android</span>
              </motion.div>

              <motion.div 
                className={styles.floatingBadge2}
                animate={{ 
                  y: [0, 6, 0],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.5
                }}
              >
                <span className={styles.badgeIcon}>⚡</span>
                <span className={styles.badgeText}>Native Performance</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}