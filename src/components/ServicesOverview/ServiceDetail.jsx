// src/components/ServicesOverview/ServiceDetail.jsx
'use client'

import { motion } from 'framer-motion'
import styles from './ServicesOverview.module.css'

export default function ServiceDetail({ service }) {
  return (
    <motion.div 
      className={styles.serviceDetail}
      key={service.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Service Header */}
      <div className={styles.detailHeader}>
        <div className={styles.detailIconWrapper} style={{ backgroundColor: service.lightBg }}>
          <span className={styles.detailIcon}>{service.icon}</span>
        </div>
        <div className={styles.detailTitleGroup}>
          <span className={styles.detailNumber}>{service.number}</span>
          <h3 className={styles.detailTitle}>{service.title}</h3>
          <span className={styles.detailTagline}>{service.tagline}</span>
        </div>
      </div>

      <div className={styles.detailGrid}>
        {/* Business Benefits */}
        <div className={styles.benefitsSection}>
          <h4 className={styles.sectionTitle}>
            <span className={styles.sectionIcon}>💡</span>
            Business Benefits
          </h4>
          <div className={styles.benefitsGrid}>
            {service.businessBenefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className={styles.benefitCard}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                style={{ 
                  borderColor: `${service.color}20`,
                  backgroundColor: `${service.color}08`
                }}
              >
                <div className={styles.benefitHeader}>
                  <h5 className={styles.benefitTitle}>{benefit.title}</h5>
                  <span className={styles.benefitMetric} style={{ color: service.color }}>
                    {benefit.metric}
                  </span>
                </div>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className={styles.detailsSection}>
          {/* Technologies */}
          <div className={styles.detailBlock}>
            <h4 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🛠️</span>
              Technologies
            </h4>
            <div className={styles.techTags}>
              {service.technologies.map((tech) => (
                <span key={tech} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className={styles.detailBlock}>
            <h4 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>🎯</span>
              Use Cases
            </h4>
            <div className={styles.useCases}>
              {service.useCases.map((useCase) => (
                <div key={useCase} className={styles.useCase}>
                  <svg viewBox="0 0 20 20" fill="currentColor" style={{ color: service.color }}>
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {useCase}
                </div>
              ))}
            </div>
          </div>

          {/* Case Study */}
          <div className={styles.caseStudyBlock}>
            <h4 className={styles.sectionTitle}>
              <span className={styles.sectionIcon}>📊</span>
              Results We've Delivered
            </h4>
            <div 
              className={styles.caseStudyCard}
              style={{ 
                background: `linear-gradient(135deg, ${service.color}15, ${service.color}05)`,
                borderColor: `${service.color}20`
              }}
            >
              <span className={styles.caseStudyQuote}>“</span>
              <p className={styles.caseStudyText}>{service.caseStudy}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}