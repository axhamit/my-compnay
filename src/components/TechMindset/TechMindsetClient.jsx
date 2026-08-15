// src/components/TechMindset/TechMindsetClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './TechMindset.module.css'

const techGroups = [
  {
    id: 1,
    category: 'Frontend',
    icon: '🖥️',
    technologies: ['React', 'Next.js'],
    description: 'Modern, responsive user interfaces'
  },
  {
    id: 2,
    category: 'Backend',
    icon: '⚙️',
    technologies: ['Node.js', 'Express'],
    description: 'Scalable, secure server-side logic'
  },
  {
    id: 3,
    category: 'Mobile',
    icon: '📱',
    technologies: ['React Native'],
    description: 'Cross-platform native experiences'
  },
  {
    id: 4,
    category: 'Database',
    icon: '🗄️',
    technologies: ['MongoDB', 'PostgreSQL'],
    description: 'Flexible, reliable data storage'
  },
  {
    id: 5,
    category: 'Cloud',
    icon: '☁️',
    technologies: ['AWS', 'Vercel'],
    description: 'Global, scalable infrastructure'
  },
  {
    id: 6,
    category: 'Design',
    icon: '🎨',
    technologies: ['Figma'],
    description: 'Pixel-perfect design systems'
  }
]

export default function TechMindsetClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className={styles.techMindset} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Technology Mindset</span>
          <h2 className={styles.heading}>
            We choose technology based on
            <span className={styles.headingHighlight}> the problem.</span>
          </h2>
          <p className={styles.subtitle}>
            We use modern technologies where they make sense, while keeping the product 
            maintainable, scalable and cost-effective.
          </p>
        </motion.div>

        {/* Tech Groups */}
        <motion.div 
          className={styles.grid}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {techGroups.map((group, index) => (
            <motion.div
              key={group.id}
              className={styles.techCard}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.4,
                delay: 0.05 + (index * 0.05),
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ y: -2 }}
            >
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardIcon}>{group.icon}</span>
                  <span className={styles.cardCategory}>{group.category}</span>
                </div>
                <div className={styles.techList}>
                  {group.technologies.map((tech, idx) => (
                    <span key={idx} className={styles.techItem}>
                      {tech}
                      {idx < group.technologies.length - 1 && (
                        <span className={styles.techSeparator}>·</span>
                      )}
                    </span>
                  ))}
                </div>
                <span className={styles.cardDescription}>{group.description}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}