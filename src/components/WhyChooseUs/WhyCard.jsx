// src/components/WhyChooseUs/WhyCard.jsx
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from './WhyChooseUs.module.css'

export default function WhyCard({ reason, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div 
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Number Badge */}
      <div className={styles.cardNumber}>
        <span className={styles.number}>{reason.number}</span>
        <motion.div 
          className={styles.numberLine}
          animate={{ 
            width: isHovered ? '100%' : '0%'
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </div>

      <div className={styles.cardContent}>
        {/* Icon */}
        <motion.div 
          className={styles.iconWrapper}
          style={{ backgroundColor: reason.lightBg }}
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 5 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <span className={styles.icon}>{reason.icon}</span>
        </motion.div>

        {/* Title */}
        <h3 className={styles.title}>{reason.title}</h3>

        {/* Description */}
        <p className={styles.description}>{reason.description}</p>

        {/* Benefits List */}
        <ul className={styles.benefitsList}>
          {reason.benefits.map((benefit, idx) => (
            <motion.li 
              key={idx} 
              className={styles.benefitItem}
              initial={{ opacity: 0, x: -10 }}
              animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
            >
              <svg className={styles.benefitIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {benefit}
            </motion.li>
          ))}
        </ul>

        {/* Stat */}
        <motion.div 
          className={styles.stat}
          style={{ 
            background: reason.lightBg,
            borderColor: `${reason.color}20`
          }}
          animate={{ 
            y: isHovered ? -2 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <span className={styles.statText}>{reason.stat}</span>
        </motion.div>

        {/* Gradient Border */}
        <motion.div 
          className={styles.cardBorder}
          style={{ background: reason.gradient }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}