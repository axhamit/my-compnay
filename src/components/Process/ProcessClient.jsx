// src/components/Process/ProcessClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ProcessStep from './ProcessStep'
import styles from './Process.module.css'

const steps = [
  {
    id: 1,
    number: '01',
    title: 'Discover',
    icon: '🔍',
    color: '#3B82F6',
    gradient: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
    lightBg: '#EFF6FF',
    description: 'We dive deep into your business, goals, and challenges. Through research and discovery, we uncover opportunities and define success metrics.',
    deliverables: ['Business Analysis', 'User Research', 'Competitive Audit', 'Success Metrics'],
    duration: '2-3 weeks'
  },
  {
    id: 2,
    number: '02',
    title: 'Define',
    icon: '🎯',
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6, #5B21B6)',
    lightBg: '#F5F3FF',
    description: 'We translate insights into clear requirements. Together we define scope, features, and prioritize what matters most for your business.',
    deliverables: ['Product Roadmap', 'Feature Specifications', 'UX Strategy', 'Technical Architecture'],
    duration: '2-3 weeks'
  },
  {
    id: 3,
    number: '03',
    title: 'Design',
    icon: '🎨',
    color: '#EC4899',
    gradient: 'linear-gradient(135deg, #EC4899, #BE185D)',
    lightBg: '#FDF2F8',
    description: 'Our designers craft beautiful, intuitive interfaces that deliver exceptional user experiences and align with your brand identity.',
    deliverables: ['Wireframes', 'UI Design', 'Prototypes', 'Design System'],
    duration: '3-4 weeks'
  },
  {
    id: 4,
    number: '04',
    title: 'Build',
    icon: '⚙️',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
    lightBg: '#FFFBEB',
    description: 'Our engineers bring designs to life with clean, scalable code. We build robust solutions with performance, security, and future growth in mind.',
    deliverables: ['Development', 'Testing', 'QA', 'Deployment'],
    duration: '4-8 weeks'
  },
  {
    id: 5,
    number: '05',
    title: 'Launch',
    icon: '🚀',
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981, #065F46)',
    lightBg: '#ECFDF5',
    description: 'We handle the launch with precision — from deployment to monitoring — ensuring a smooth transition and immediate impact for your business.',
    deliverables: ['Deployment', 'Launch Strategy', 'Performance Monitoring', 'User Onboarding'],
    duration: '1-2 weeks'
  },
  {
    id: 6,
    number: '06',
    title: 'Grow',
    icon: '📈',
    color: '#EF4444',
    gradient: 'linear-gradient(135deg, #EF4444, #B91C1C)',
    lightBg: '#FEF2F2',
    description: 'Our partnership continues post-launch. We optimize performance, add features, and help you scale based on data and user feedback.',
    deliverables: ['Analytics', 'Optimization', 'Feature Updates', 'Scale Planning'],
    duration: 'Ongoing'
  }
]

export default function ProcessClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className={styles.process} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className={styles.badge}>Our Process</span>
          <h2 className={styles.title}>
            From Vision to
            <span className={styles.titleHighlight}> Results</span>
          </h2>
          <p className={styles.subtitle}>
            A transparent, collaborative process designed to turn your ideas into 
            successful digital products that drive business growth.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <ProcessStep 
              key={step.id} 
              step={step} 
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className={styles.bottomCTA}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.a 
            href="/process" 
            className={styles.ctaButton}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            See Our Process →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}