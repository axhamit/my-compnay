// src/components/OurStory/OurStoryClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './OurStory.module.css'

export default function OurStoryClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Story timeline data
  const timeline = [
    {
      id: 1,
      step: 'How it started',
      description: 'Two friends with a shared vision met over coffee and decided to build something meaningful.',
      icon: '☕'
    },
    {
      id: 2,
      step: 'The problem we saw',
      description: 'Businesses were struggling to find reliable partners who could turn their ideas into scalable digital products.',
      icon: '🎯'
    },
    {
      id: 3,
      step: 'Why we started',
      description: 'We believed that businesses deserved better — faster delivery, transparent pricing, and true partnership.',
      icon: '💡'
    },
    {
      id: 4,
      step: 'Where we\'re going',
      description: 'Today, we\'re building the future of digital product development — one that puts businesses first.',
      icon: '🚀'
    }
  ]

  return (
    <section className={styles.story} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className={styles.heading}>
            It started with a
            <span className={styles.headingHighlight}> simple idea.</span>
          </h2>
        </motion.div>

        {/* Story Grid */}
        <div className={styles.grid}>
          {/* Left: Visual */}
          <motion.div 
            className={styles.visual}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className={styles.visualContainer}>
              <div className={styles.imageWrapper}>
                <div className={styles.imagePlaceholder}>
                  <div className={styles.placeholderContent}>
                    <span className={styles.placeholderIcon}>🚀</span>
                    <span className={styles.placeholderText}>Our Journey</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Story Content */}
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Story Paragraphs */}
            <div className={styles.storyText}>
              <p className={styles.paragraph}>
                It started with two friends and a shared frustration. We saw businesses 
                struggling to build digital products that actually worked — projects that 
                went over budget, took too long, and didn't solve the right problems.
              </p>
              <p className={styles.paragraph}>
                So we decided to do it differently. We built a company that puts 
                transparency first, treats clients as true partners, and focuses on 
                delivering real business value — not just code.
              </p>
              <p className={styles.paragraph}>
                Today, we've grown into a team of passionate designers, engineers, 
                and strategists who share one mission: to help businesses turn their 
                ideas into powerful digital products that drive growth.
              </p>
            </div>

            {/* Timeline */}
            <div className={styles.timeline}>
              {timeline.map((item, index) => (
                <motion.div 
                  key={item.id}
                  className={styles.timelineItem}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                >
                  <div className={styles.timelineDot}>
                    <span className={styles.timelineIcon}>{item.icon}</span>
                  </div>
                  <div className={styles.timelineContent}>
                    <span className={styles.timelineStep}>{item.step}</span>
                    <p className={styles.timelineDescription}>{item.description}</p>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className={styles.timelineLine} />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}