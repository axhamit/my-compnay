// src/components/Culture/CultureClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Culture.module.css'

const culturePoints = [
  {
    id: 1,
    title: 'Learn',
    icon: '📚',
    description: 'We constantly improve our technical and creative skills. Every day is an opportunity to grow and master our craft.',
    examples: ['Continuous learning', 'Skill development', 'Knowledge sharing']
  },
  {
    id: 2,
    title: 'Collaborate',
    icon: '🤝',
    description: 'Great products come from designers, developers and clients working together. We believe in open communication and shared success.',
    examples: ['Team synergy', 'Client partnership', 'Open dialogue']
  },
  {
    id: 3,
    title: 'Experiment',
    icon: '🧪',
    description: 'We test ideas instead of assuming we already know the answer. Curiosity drives innovation and better solutions.',
    examples: ['Rapid prototyping', 'A/B testing', 'Iterative approach']
  },
  {
    id: 4,
    title: 'Improve',
    icon: '📈',
    description: 'Every project should make the next one better. We learn, refine, and raise the bar with each new challenge.',
    examples: ['Continuous improvement', 'Process optimization', 'Quality focus']
  }
]

export default function CultureClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className={styles.culture} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Our Culture</span>
          <h2 className={styles.heading}>
            Built on curiosity.
            <span className={styles.headingHighlight}> Driven by impact.</span>
          </h2>
          <p className={styles.subtitle}>
            The values that guide how we work, collaborate, and grow together.
          </p>
        </motion.div>

        {/* Culture Grid */}
        <motion.div 
          className={styles.grid}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {culturePoints.map((point, index) => (
            <motion.div
              key={point.id}
              className={styles.cultureCard}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5,
                delay: 0.1 + (index * 0.08),
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ y: -4 }}
            >
              <div className={styles.cardContent}>
                <div className={styles.cardIcon}>
                  <span className={styles.icon}>{point.icon}</span>
                  <span className={styles.cardNumber}>0{point.id}</span>
                </div>
                <h3 className={styles.cardTitle}>{point.title}</h3>
                <p className={styles.cardDescription}>{point.description}</p>
                <div className={styles.cardExamples}>
                  {point.examples.map((example, idx) => (
                    <span key={idx} className={styles.exampleTag}>
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}