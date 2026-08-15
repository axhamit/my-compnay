// src/components/Industries/IndustryCard.jsx
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import styles from './Industries.module.css'

export default function IndustryCard({ industry, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      <Link href={`/industries/${industry.slug}`} className={styles.cardLink}>
        {/* Card Header */}
        <div className={styles.cardHeader}>
          <motion.div 
            className={styles.iconWrapper}
            style={{ backgroundColor: industry.lightBg }}
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <span className={styles.icon}>{industry.icon}</span>
          </motion.div>
          
          <motion.div 
            className={styles.iconGlow}
            style={{ background: industry.gradient }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content */}
        <div className={styles.cardContent}>
          <h3 className={styles.industryName}>{industry.name}</h3>
          <p className={styles.description}>{industry.description}</p>

          {/* Industry Stats */}
          <div className={styles.statsContainer}>
            {industry.stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                className={styles.statPill}
                style={{ 
                  background: industry.lightBg,
                  color: industry.color
                }}
                animate={{
                  scale: isHovered ? 1.05 : 1
                }}
                transition={{ duration: 0.3 }}
              >
                {stat}
              </motion.div>
            ))}
          </div>

          {/* Solutions Preview */}
          <div className={styles.solutionsPreview}>
            <span className={styles.solutionsLabel}>Key Solutions:</span>
            <div className={styles.solutionsTags}>
              {industry.solutions.slice(0, 2).map((solution, idx) => (
                <span key={idx} className={styles.solutionTag}>
                  {solution}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className={styles.cardFooter}>
            <motion.span 
              className={styles.exploreLink}
              animate={{ 
                x: isHovered ? 4 : 0,
                color: isHovered ? industry.color : '#0f172a'
              }}
              transition={{ duration: 0.3 }}
            >
              Explore {industry.name}
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.span>
          </div>
        </div>

        {/* Card Border Accent */}
        <motion.div 
          className={styles.cardBorder}
          style={{ background: industry.gradient }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </Link>
    </motion.div>
  )
}