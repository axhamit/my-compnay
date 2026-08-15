// src/components/DigitalGrowth/DigitalGrowthClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import styles from './DigitalGrowth.module.css'

const growthAreas = [
  {
    id: 'seo',
    title: 'SEO',
    icon: '🔍',
    color: '#3B82F6',
    items: ['Technical SEO', 'Content Strategy', 'Search Visibility']
  },
  {
    id: 'social',
    title: 'Social',
    icon: '📱',
    color: '#8B5CF6',
    items: ['Instagram', 'LinkedIn', 'Content']
  },
  {
    id: 'paid',
    title: 'Paid Ads',
    icon: '📊',
    color: '#F59E0B',
    items: ['Google Ads', 'Meta Ads', 'Retargeting']
  },
  {
    id: 'analytics',
    title: 'Analytics',
    icon: '📈',
    color: '#10B981',
    items: ['Tracking', 'Conversion', 'Reporting']
  }
]

const technologies = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Express', icon: '🚂' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'React Native', icon: '📱' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Python', icon: '🐍' },
  { name: 'Java', icon: '☕' },
  { name: 'Sanity', icon: '🧠' },
  { name: 'Stripe', icon: '💳' }
]

export default function DigitalGrowthClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className={styles.digitalGrowth} ref={ref}>
      {/* Background Elements */}
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />
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
              Digital Growth
            </div>

            {/* Heading */}
            <h2 className={styles.heading}>
              Launch is only
              <span className={styles.headingHighlight}> the beginning.</span>
            </h2>

            {/* Description */}
            <p className={styles.description}>
              We help businesses attract customers, understand their audience and 
              continuously improve their digital presence.
            </p>

            {/* Growth Areas - Tree Structure */}
            <div className={styles.growthTree}>
              {growthAreas.map((area, index) => (
                <motion.div 
                  key={area.id}
                  className={styles.treeBranch}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + (index * 0.06), duration: 0.4 }}
                >
                  <div className={styles.branchHeader}>
                    <span 
                      className={styles.branchDot}
                      style={{ background: area.color }}
                    />
                    <span className={styles.branchTitle}>{area.title}</span>
                  </div>
                  <div className={styles.branchItems}>
                    {area.items.map((item, idx) => (
                      <span key={idx} className={styles.branchItem}>
                        {item}
                        {idx < area.items.length - 1 && (
                          <span className={styles.branchSeparator}>·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/services/digital-growth" className={styles.ctaButton}>
              Grow Your Business →
            </Link>
          </motion.div>

          {/* Right Visual - Technology + Growth */}
          <motion.div 
            className={styles.visual}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className={styles.visualContainer}>
              {/* Growth Dashboard */}
              <div className={styles.dashboardCard}>
                <div className={styles.dashboardHeader}>
                  <span className={styles.dashboardTitle}>Growth Dashboard</span>
                  <span className={styles.dashboardDate}>Last 30 days</span>
                </div>

                <div className={styles.dashboardMetrics}>
                  <div className={styles.metricItem}>
                    <span className={styles.metricValue}>+24.5%</span>
                    <span className={styles.metricLabel}>Traffic</span>
                  </div>
                  <div className={styles.metricDivider} />
                  <div className={styles.metricItem}>
                    <span className={styles.metricValue}>12.8%</span>
                    <span className={styles.metricLabel}>Conversion</span>
                  </div>
                  <div className={styles.metricDivider} />
                  <div className={styles.metricItem}>
                    <span className={styles.metricValue}>4.2K</span>
                    <span className={styles.metricLabel}>Leads</span>
                  </div>
                </div>

                <div className={styles.dashboardChart}>
                  <div className={styles.chartContainer}>
                    <div className={styles.chartBar} style={{ height: '40%' }} />
                    <div className={styles.chartBar} style={{ height: '55%' }} />
                    <div className={styles.chartBar} style={{ height: '45%' }} />
                    <div className={styles.chartBar} style={{ height: '70%' }} />
                    <div className={styles.chartBar} style={{ height: '60%' }} />
                    <div className={styles.chartBar} style={{ height: '80%' }} />
                    <div className={styles.chartBar} style={{ height: '50%' }} />
                    <div className={styles.chartBar} style={{ height: '90%' }} />
                    <div className={styles.chartBar} style={{ height: '65%' }} />
                    <div className={styles.chartBar} style={{ height: '75%' }} />
                  </div>
                  <div className={styles.chartLabels}>
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>
              </div>

              {/* Technology Section */}
              <div className={styles.techSection}>
                <span className={styles.techLabel}>Technology Stack</span>
                <div className={styles.techGrid}>
                  {technologies.slice(0, 6).map((tech, index) => (
                    <motion.div 
                      key={index} 
                      className={styles.techItem}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.4 + (index * 0.04), duration: 0.3 }}
                    >
                      <span className={styles.techIcon}>{tech.icon}</span>
                      <span className={styles.techName}>{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div 
                className={styles.floatingBadge1}
                animate={{ 
                  y: [0, -6, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5
                }}
              >
                <span className={styles.badgeIcon}>📈</span>
                <span className={styles.badgeText}>2x Traffic Growth</span>
              </motion.div>

              <motion.div 
                className={styles.floatingBadge2}
                animate={{ 
                  y: [0, 6, 0],
                  rotate: [0, -2, 0]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1
                }}
              >
                <span className={styles.badgeIcon}>🎯</span>
                <span className={styles.badgeText}>ROI Optimized</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}