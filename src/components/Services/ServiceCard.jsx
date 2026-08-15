// src/components/Services/ServiceCard.jsx
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from './Services.module.css'

export default function ServiceCard({ service, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut'
      }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.2 }
      }}
    >
      {/* Icon */}
      <div 
        className={styles.cardIconWrapper}
        style={{ backgroundColor: service.bgColor }}
      >
        <span className={styles.cardIcon}>{service.icon}</span>
      </div>

      {/* Title */}
      <h3 className={styles.cardTitle}>{service.title}</h3>

      {/* Tags */}
      <div className={styles.cardTags}>
        {service.tags.map((tag) => (
          <span 
            key={tag} 
            className={styles.cardTag}
            style={{ 
              color: service.color,
              backgroundColor: service.bgColor
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className={styles.cardDescription}>
        {service.description}
      </p>

      {/* Features */}
      <ul className={styles.cardFeatures}>
        {service.features.map((feature) => (
          <li key={feature} className={styles.cardFeature}>
            <svg viewBox="0 0 20 20" fill="currentColor" className={styles.featureIcon}>
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Explore Link */}
      <motion.a
        href={`/services/${service.id}`}
        className={styles.cardLink}
        animate={isHovered ? { x: 4 } : { x: 0 }}
        transition={{ duration: 0.2 }}
      >
        Explore →
      </motion.a>

      {/* Gradient Border Effect */}
      <motion.div 
        className={styles.cardBorder}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ backgroundColor: service.color }}
      />
    </motion.div>
  )
}