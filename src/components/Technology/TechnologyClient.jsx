// src/components/Technology/TechnologyClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Technology.module.css'

const technologies = [
  { name: 'React', icon: '⚛️', color: '#61DAFB', category: 'Frontend' },
  { name: 'Next.js', icon: '▲', color: '#000000', category: 'Frontend' },
  { name: 'Node.js', icon: '🟢', color: '#339933', category: 'Backend' },
  { name: 'Express', icon: '🚂', color: '#000000', category: 'Backend' },
  { name: 'MongoDB', icon: '🍃', color: '#47A248', category: 'Database' },
  { name: 'PostgreSQL', icon: '🐘', color: '#336791', category: 'Database' },
  { name: 'React Native', icon: '📱', color: '#61DAFB', category: 'Mobile' },
  { name: 'AWS', icon: '☁️', color: '#FF9900', category: 'Cloud' },
  { name: 'Python', icon: '🐍', color: '#3776AB', category: 'Backend' },
  { name: 'Java', icon: '☕', color: '#007396', category: 'Backend' },
  { name: 'Sanity', icon: '🧠', color: '#F03E2F', category: 'CMS' },
  { name: 'Razorpay', icon: '💳', color: '#0C4A6E', category: 'Payments' },
  { name: 'Stripe', icon: '💳', color: '#635BFF', category: 'Payments' }
]

export default function TechnologyClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className={styles.technology} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Technology Stack</span>
          <h2 className={styles.title}>
            Modern Tools for
            <span className={styles.titleHighlight}> Modern Solutions</span>
          </h2>
        </motion.div>

        {/* Tech Grid */}
        <motion.div 
          className={styles.grid}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className={styles.techCard}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.4,
                delay: index * 0.04,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                y: -4,
                transition: { duration: 0.2 }
              }}
            >
              <div className={styles.techContent}>
                <span className={styles.techIcon}>{tech.icon}</span>
                <span className={styles.techName}>{tech.name}</span>
                <span className={styles.techCategory} style={{ color: tech.color }}>
                  {tech.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}