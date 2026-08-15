// src/components/Hero/FloatingElements.jsx
'use client'

import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const floatingElements = [
  { icon: '⚡', label: 'Fast', delay: 0 },
  { icon: '🎨', label: 'Design', delay: 0.5 },
  { icon: '🚀', label: 'Launch', delay: 1 },
  { icon: '📱', label: 'Mobile', delay: 0.3 },
  { icon: '💻', label: 'Web', delay: 0.8 },
  { icon: '🔒', label: 'Secure', delay: 0.2 },
]

export default function FloatingElements() {
  return (
    <div className={styles.floatingElements}>
      {floatingElements.map((item, index) => (
        <motion.div
          key={index}
          className={styles.floatingElement}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{ 
            delay: 1 + item.delay,
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatDelay: Math.random() * 2
          }}
          whileHover={{ 
            scale: 1.1,
            transition: { duration: 0.2 }
          }}
        >
          <span className={styles.floatingIcon}>{item.icon}</span>
          <span className={styles.floatingLabel}>{item.label}</span>
        </motion.div>
      ))}
    </div>
  )
}