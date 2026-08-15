// src/components/Hero/HeroBackground.jsx
'use client'

import { motion } from 'framer-motion'
import styles from './Hero.module.css'

export default function HeroBackground() {
  return (
    <div className={styles.background}>
      {/* Gradient Orbs */}
      <motion.div 
        className={styles.orb1}
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div 
        className={styles.orb2}
        animate={{ 
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div 
        className={styles.orb3}
        animate={{ 
          x: [0, 60, 0],
          y: [0, -30, 0],
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      {/* Grid Pattern */}
      <div className={styles.gridPattern} />
    </div>
  )
}