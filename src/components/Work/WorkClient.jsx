// src/components/Work/WorkClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import WorkSlider from './WorkSlider'
import styles from './Work.module.css'

const projects = [
  {
    id: 1,
    number: '01',
    title: 'E-Commerce Platform',
    category: 'E-Commerce',
    color: '#3B82F6',
    gradient: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
    lightGradient: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
    description: 'A full-featured e-commerce platform with real-time inventory, AI-powered recommendations, and seamless payment processing.',
    challenge: 'Complex inventory management across 50+ warehouses',
    solution: 'Built a distributed system with real-time sync and predictive analytics',
    results: [
      { label: 'Conversion Rate', value: '+300%', icon: '📈' },
      { label: 'Load Time', value: '-50%', icon: '⚡' },
      { label: 'Products', value: '2M+', icon: '📦' }
    ],
    link: '/work/ecommerce-platform',
    image: '/projects/ecommerce.jpg'
  },
  {
    id: 2,
    number: '02',
    title: 'Education Platform',
    category: 'EdTech',
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6, #5B21B6)',
    lightGradient: 'linear-gradient(135deg, #F5F3FF, #EDE9FE)',
    tags: ['React', 'Node.js', 'MongoDB'],
    description: 'An interactive learning platform connecting students and teachers with live classes, adaptive assessments, and collaborative tools.',
    challenge: 'Scaling to 100K+ concurrent users during peak hours',
    solution: 'Implemented microservices architecture with auto-scaling',
    results: [
      { label: 'Active Users', value: '100K+', icon: '👨‍🎓' },
      { label: 'Completion', value: '85%', icon: '🎯' },
      { label: 'Partners', value: '50+', icon: '🏫' }
    ],
    link: '/work/education-platform',
    image: '/projects/education.jpg'
  },
  {
    id: 3,
    number: '03',
    title: 'Healthcare Dashboard',
    category: 'HealthTech',
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981, #065F46)',
    lightGradient: 'linear-gradient(135deg, #ECFDF5, #D1FAE5)',
    tags: ['React', 'Python', 'PostgreSQL'],
    description: 'A comprehensive healthcare analytics dashboard providing real-time patient data, predictive insights, and treatment optimization.',
    challenge: 'Processing 1M+ patient records with HIPAA compliance',
    solution: 'Built secure data pipeline with end-to-end encryption',
    results: [
      { label: 'Wait Time', value: '-40%', icon: '⏱️' },
      { label: 'Accuracy', value: '95%', icon: '🎯' },
      { label: 'Records', value: '1M+', icon: '📊' }
    ],
    link: '/work/healthcare-dashboard',
    image: '/projects/healthcare.jpg'
  }
]

export default function WorkClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className={styles.work} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className={styles.headerContent}>
            <span className={styles.badge}>
              <span className={styles.badgeDot}></span>
              Featured Work
            </span>
            <h2 className={styles.title}>
              Crafting Digital
              <span className={styles.titleHighlight}> Excellence</span>
            </h2>
            <p className={styles.subtitle}>
              Each project represents our commitment to quality, innovation, 
              and delivering measurable results for our clients.
            </p>
          </div>
          <motion.a 
            href="/work" 
            className={styles.viewAllLink}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Premium Slider */}
        <WorkSlider projects={projects} />
      </div>
    </section>
  )
}