// src/components/WhyChooseUs/WhyChooseUsClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import WhyCard from './WhyCard'
import styles from './WhyChooseUs.module.css'

const reasons = [
  {
    id: 1,
    number: '01',
    title: 'Business First',
    icon: '🎯',
    color: '#3B82F6',
    gradient: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
    lightBg: '#EFF6FF',
    description: 'We start with your business goals, not technology. Every decision is made to drive measurable business outcomes and ROI.',
    benefits: [
      'Revenue-focused solutions',
      'Data-driven decision making',
      'ROI measured at every stage',
      'Business metrics > vanity metrics'
    ],
    stat: '92% of clients achieve their business goals within 6 months'
  },
  {
    id: 2,
    number: '02',
    title: 'Design + Engineering',
    icon: '⚡',
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6, #5B21B6)',
    lightBg: '#F5F3FF',
    description: 'Beautiful design meets robust engineering. We create products that are both stunning to look at and powerful under the hood.',
    benefits: [
      'Pixel-perfect design systems',
      'Scalable architecture',
      'Performance optimized',
      'Accessibility first'
    ],
    stat: 'Products deliver 2x faster load times and 150% better engagement'
  },
  {
    id: 3,
    number: '03',
    title: 'Transparent Process',
    icon: '🔍',
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981, #065F46)',
    lightBg: '#ECFDF5',
    description: 'No surprises. We keep you informed at every stage with clear communication, regular updates, and complete visibility.',
    benefits: [
      'Weekly progress reports',
      'Full project visibility',
      'Clear timelines and milestones',
      'Open communication channels'
    ],
    stat: '98% of clients report feeling fully informed throughout their project'
  },
  {
    id: 4,
    number: '04',
    title: 'Long-Term Partnership',
    icon: '🤝',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
    lightBg: '#FFFBEB',
    description: 'We don\'t just build and leave. We become your trusted technology partner, supporting your growth every step of the way.',
    benefits: [
      'Ongoing support and maintenance',
      'Strategic advisory',
      'Growth planning',
      'Continuous improvement'
    ],
    stat: '85% of clients work with us for 3+ years'
  }
]

export default function WhyChooseUsClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className={styles.whyChooseUs} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className={styles.badge}>Why Choose Us</span>
          <h2 className={styles.title}>
            Built Different.
            <span className={styles.titleHighlight}> Built Better.</span>
          </h2>
          <p className={styles.subtitle}>
            We combine business strategy, design excellence, and engineering expertise 
            to deliver results that matter.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <WhyCard 
              key={reason.id} 
              reason={reason} 
              index={index}
            />
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div 
          className={styles.trustBadge}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className={styles.badgeContent}>
            <div className={styles.badgeStars}>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <div className={styles.badgeText}>
              <span className={styles.badgeRating}>4.9</span>
              <span className={styles.badgeLabel}>Average Client Rating</span>
            </div>
            <div className={styles.badgeDivider}></div>
            <div className={styles.badgeText}>
              <span className={styles.badgeNumber}>50+</span>
              <span className={styles.badgeLabel}>Happy Clients</span>
            </div>
            <div className={styles.badgeDivider}></div>
            <div className={styles.badgeText}>
              <span className={styles.badgeNumber}>98%</span>
              <span className={styles.badgeLabel}>Satisfaction Rate</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}