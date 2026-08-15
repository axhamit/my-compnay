// src/components/WhatWeBelieve/WhatWeBelieveClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './WhatWeBelieve.module.css'

const principles = [
  {
    id: 1,
    title: 'Business First',
    icon: '🎯',
    color: '#3B82F6',
    gradient: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
    lightBg: '#EFF6FF',
    description: 'We start with the business problem, not the technology. Every decision is measured by real business impact.',
    examples: ['Revenue growth focus', 'ROI-driven development', 'Business metric alignment']
  },
  {
    id: 2,
    title: 'People First',
    icon: '❤️',
    color: '#EC4899',
    gradient: 'linear-gradient(135deg, #EC4899, #BE185D)',
    lightBg: '#FDF2F8',
    description: 'Products should be easy and enjoyable for people to use. We design for humans, not just screens.',
    examples: ['User-centered design', 'Accessibility focus', 'Intuitive experiences']
  },
  {
    id: 3,
    title: 'Build for Tomorrow',
    icon: '🚀',
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981, #065F46)',
    lightBg: '#ECFDF5',
    description: 'We create systems that can evolve as businesses grow. Future-proof solutions that scale with you.',
    examples: ['Scalable architecture', 'Future-proof solutions', 'Continuous improvement']
  }
]

export default function WhatWeBelieveClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className={styles.belief} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className={styles.badge}>What We Believe</span>
          <h2 className={styles.heading}>
            Technology is only useful when it
            <span className={styles.headingHighlight}> solves a real problem.</span>
          </h2>
        </motion.div>

        {/* Principles Grid */}
        <div className={styles.grid}>
          {principles.map((principle, index) => (
            <motion.div
              key={principle.id}
              className={styles.principleCard}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Icon */}
              <motion.div 
                className={styles.iconWrapper}
                style={{ backgroundColor: principle.lightBg }}
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <span className={styles.icon}>{principle.icon}</span>
              </motion.div>

              {/* Title */}
              <h3 className={styles.principleTitle} style={{ color: principle.color }}>
                {principle.title}
              </h3>

              {/* Description */}
              <p className={styles.principleDescription}>
                {principle.description}
              </p>

              {/* Examples */}
              <div className={styles.examples}>
                {principle.examples.map((example, idx) => (
                  <motion.span 
                    key={idx} 
                    className={styles.exampleTag}
                    style={{ 
                      backgroundColor: principle.lightBg,
                      color: principle.color
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + (index * 0.1) + (idx * 0.05), duration: 0.3 }}
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {example}
                  </motion.span>
                ))}
              </div>

              {/* Gradient Border */}
              <motion.div 
                className={styles.cardBorder}
                style={{ background: principle.gradient }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}