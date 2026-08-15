// src/components/FAQ/FAQItem.jsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import styles from './FAQ.module.css'

export default function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div 
      className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      viewport={{ once: true }}
    >
      <button 
        className={styles.faqButton}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className={styles.faqHeader}>
          <div className={styles.faqLeft}>
            <span className={styles.faqNumber}>{String(index + 1).padStart(2, '0')}</span>
            <span className={styles.faqQuestion}>{faq.question}</span>
          </div>
          <motion.div 
            className={styles.faqIcon}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.div>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.faqAnswer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              duration: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <div className={styles.faqContent}>
              <p className={styles.faqText}>{faq.answer}</p>
              <span className={styles.faqCategory}>{faq.category}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}