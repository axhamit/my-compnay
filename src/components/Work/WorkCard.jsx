// src/components/Work/WorkCard.jsx
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import styles from './Work.module.css'

export default function WorkCard({ project, index, isActive = true }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.article 
      className={styles.workCard}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.cardGrid}>
        {/* Left: Image/Visual */}
        <div className={styles.cardVisual}>
          <div 
            className={styles.imageContainer}
            style={{ background: project.bgGradient }}
          >
            {/* Project Number Badge */}
            <div className={styles.cardNumber}>
              <span className={styles.number}>{project.number}</span>
            </div>

            {/* Content Placeholder - Replace with actual image */}
            <div className={styles.imagePlaceholder}>
              <div className={styles.imageContent}>
                <span className={styles.imageIcon}>📐</span>
                <span className={styles.imageLabel}>{project.category}</span>
              </div>
              {/* Uncomment when you have actual images
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={styles.image}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
              */}
            </div>

            {/* Stats Overlay */}
            <motion.div 
              className={styles.statsOverlay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
              transition={{ duration: 0.3 }}
            >
              {project.stats.map((stat, idx) => (
                <div key={idx} className={styles.statItem}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Right: Content */}
        <div className={styles.cardContent}>
          <div className={styles.contentTop}>
            <div className={styles.cardHeader}>
              <span className={styles.cardCategory}>{project.category}</span>
              <h3 className={styles.cardTitle}>{project.title}</h3>
            </div>

            <p className={styles.cardDescription}>{project.description}</p>

            {/* Tags */}
            <div className={styles.cardTags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.cardTag}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className={styles.cardResults}>
            {project.results.map((result, idx) => (
              <div key={idx} className={styles.resultItem}>
                <svg className={styles.resultIcon} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className={styles.resultText}>{result}</span>
              </div>
            ))}
          </div>

          {/* View Case Study Link */}
          <motion.a 
            href={project.link}
            className={styles.caseStudyLink}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            View Case Study →
          </motion.a>
        </div>
      </div>
    </motion.article>
  )
}