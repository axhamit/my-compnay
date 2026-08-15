// src/components/CoreValues/CoreValuesClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import styles from './CoreValues.module.css'

const values = [
  {
    id: 1,
    number: '01',
    title: 'Ownership',
    icon: '🎯',
    description: 'We take responsibility for the work we deliver.',
    longDescription: 'We believe in taking full ownership of our work — from the first line of code to the final deployment. When challenges arise, we step up. When things go wrong, we fix them.',
    examples: ['Accountability', 'Proactive', 'End-to-end']
  },
  {
    id: 2,
    number: '02',
    title: 'Quality',
    icon: '💎',
    description: "We don't compromise on the details that matter.",
    longDescription: 'Quality is not just about code — it\'s about every pixel, every interaction, every word we write. We believe that small details make the difference between good and great.',
    examples: ['Pixel-perfect', 'Clean code', 'Attention']
  },
  {
    id: 3,
    number: '03',
    title: 'Transparency',
    icon: '🔍',
    description: 'Clear communication and honest expectations.',
    longDescription: 'We believe that transparency is the foundation of great partnerships. We communicate clearly about progress, challenges, and timelines. We share both successes and setbacks openly.',
    examples: ['Honest', 'Regular updates', 'No surprises']
  },
  {
    id: 4,
    number: '04',
    title: 'Curiosity',
    icon: '🧠',
    description: 'We continuously learn, experiment and improve.',
    longDescription: 'We approach every challenge with a learner\'s mindset. We ask questions, explore new technologies, and embrace experimentation. Curiosity is the engine of innovation.',
    examples: ['Learning', 'Experimentation', 'Innovation']
  },
  {
    id: 5,
    number: '05',
    title: 'Customer Success',
    icon: '⭐',
    description: 'Your success is the real measure of our work.',
    longDescription: 'We measure our success not by lines of code or features shipped, but by the real impact we create for our clients. When your business grows, that\'s our success.',
    examples: ['Client growth', 'Partnerships', 'Outcome-focused']
  }
]

export default function CoreValuesClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className={styles.values} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.badge}>Core Values</span>
          <h2 className={styles.heading}>
            What Guides
            <span className={styles.headingHighlight}> Everything We Do</span>
          </h2>
          <p className={styles.subtitle}>
            Five principles that define our culture, shape our decisions, 
            and drive us to deliver exceptional work every day.
          </p>
        </motion.div>

        {/* Roadmap Timeline */}
        <div className={styles.timeline}>
          {/* Center Line */}
          <div className={styles.centerLine} />

          {values.map((value, index) => {
            const isHovered = hoveredIndex === index
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={value.id}
                className={`${styles.timelineItem} ${isEven ? styles.left : styles.right}`}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline Node */}
                <div className={styles.timelineNode}>
                  <motion.div 
                    className={styles.nodeDot}
                    animate={{
                      scale: isHovered ? 1.3 : 1,
                      backgroundColor: isHovered ? '#0ea5e9' : '#e2e8f0'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className={styles.nodeNumber}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      y: isHovered ? 0 : 10
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {value.number}
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div 
                  className={`${styles.valueCard} ${isHovered ? styles.hovered : ''}`}
                  animate={{
                    y: isHovered ? -4 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <span className={styles.valueIcon}>{value.icon}</span>
                      <h3 className={styles.valueTitle}>{value.title}</h3>
                    </div>
                    
                    <p className={styles.valueDescription}>{value.description}</p>

                    <motion.div 
                      className={styles.valueLongDescription}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: isHovered ? 1 : 0,
                        height: isHovered ? 'auto' : 0
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <p>{value.longDescription}</p>
                      <div className={styles.valueExamples}>
                        {value.examples.map((example, idx) => (
                          <span key={idx} className={styles.exampleTag}>
                            {example}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}