// src/components/IndustriesGrid/IndustriesGridClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import styles from './IndustriesGrid.module.css'

const industries = [
  {
    id: 1,
    name: 'Education',
    icon: '🎓',
    description: 'LMS platforms, student portals and learning applications.',
    slug: 'education',
    color: '#3B82F6'
  },
  {
    id: 2,
    name: 'E-Commerce',
    icon: '🛒',
    description: 'Online stores, marketplaces and commerce platforms.',
    slug: 'ecommerce',
    color: '#F59E0B'
  },
  {
    id: 3,
    name: 'Real Estate',
    icon: '🏠',
    description: 'Property platforms, CRM systems and lead management.',
    slug: 'real-estate',
    color: '#10B981'
  },
  {
    id: 4,
    name: 'Healthcare',
    icon: '🏥',
    description: 'Appointment systems, patient portals and healthcare applications.',
    slug: 'healthcare',
    color: '#EC4899'
  },
  {
    id: 5,
    name: 'Hospitality',
    icon: '🏨',
    description: 'Hotel platforms, booking systems and restaurant solutions.',
    slug: 'hospitality',
    color: '#8B5CF6'
  },
  {
    id: 6,
    name: 'Startups',
    icon: '🚀',
    description: 'MVPs, SaaS products and scalable digital platforms.',
    slug: 'startups',
    color: '#EF4444'
  },
  {
    id: 7,
    name: 'Professional Services',
    icon: '💼',
    description: 'Business portals, automation and custom software.',
    slug: 'professional-services',
    color: '#F97316'
  },
  {
    id: 8,
    name: 'Finance',
    icon: '💰',
    description: 'Dashboards, financial platforms and business tools.',
    slug: 'finance',
    color: '#14B8A6'
  }
]

export default function IndustriesGridClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section className={styles.industriesGrid} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Industries We Serve</span>
          <h2 className={styles.heading}>
            Expertise across
            <span className={styles.headingHighlight}> every industry.</span>
          </h2>
          <p className={styles.subtitle}>
            We understand the unique challenges of your industry and build solutions 
            that drive real results.
          </p>
        </motion.div>

        {/* Grid */}
        <div className={styles.grid}>
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5,
                delay: index * 0.04,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ y: -4 }}
            >
              <Link href={`/industries/${industry.slug}`} className={styles.cardLink}>
                <div className={styles.cardContent}>
                  <div className={styles.iconWrapper}>
                    <span className={styles.icon}>{industry.icon}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{industry.name}</h3>
                  <p className={styles.cardDescription}>{industry.description}</p>
                  <span className={styles.cardLinkText}>
                    Learn More →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}