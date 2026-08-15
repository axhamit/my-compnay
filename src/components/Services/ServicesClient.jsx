// src/components/Services/ServicesClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ServiceCard from './ServiceCard'
import styles from './Services.module.css'

const services = [
  {
    id: 1,
    title: 'Web Applications',
    icon: '🌐',
    color: '#3B82F6',
    bgColor: '#EFF6FF',
    tags: ['SaaS', 'Platforms', 'Portals'],
    description: 'Build scalable web applications that drive business growth and user engagement.',
    features: [
      'Custom web development',
      'Progressive Web Apps (PWA)',
      'API-first architecture',
      'Cloud-native solutions'
    ]
  },
  {
    id: 2,
    title: 'Mobile Apps',
    icon: '📱',
    color: '#8B5CF6',
    bgColor: '#F5F3FF',
    tags: ['iOS', 'Android', 'React Native'],
    description: 'Create native and cross-platform mobile experiences that users love.',
    features: [
      'Native iOS & Android',
      'React Native development',
      'App Store optimization',
      'Push notifications & analytics'
    ]
  },
  {
    id: 3,
    title: 'Custom Software',
    icon: '⚙️',
    color: '#F59E0B',
    bgColor: '#FFFBEB',
    tags: ['CRM', 'ERP', 'Automation'],
    description: 'Design and build custom software solutions tailored to your business needs.',
    features: [
      'Enterprise software',
      'Workflow automation',
      'CRM & ERP systems',
      'Legacy system modernization'
    ]
  },
  {
    id: 4,
    title: 'E-Commerce',
    icon: '🛒',
    color: '#10B981',
    bgColor: '#ECFDF5',
    tags: ['Stores', 'Marketplaces', 'Payments'],
    description: 'Launch powerful e-commerce platforms that convert visitors into customers.',
    features: [
      'Custom storefronts',
      'Marketplace solutions',
      'Payment integration',
      'Inventory management'
    ]
  },
  {
    id: 5,
    title: 'UI/UX Design',
    icon: '🎨',
    color: '#EC4899',
    bgColor: '#FDF2F8',
    tags: ['Research', 'UX', 'UI', 'Prototypes'],
    description: 'Create intuitive, beautiful interfaces that delight users and achieve business goals.',
    features: [
      'User research & testing',
      'Wireframing & prototyping',
      'Visual design systems',
      'Accessibility & inclusivity'
    ]
  },
  {
    id: 6,
    title: 'Digital Growth',
    icon: '🚀',
    color: '#EF4444',
    bgColor: '#FEF2F2',
    tags: ['SEO', 'Social', 'Marketing'],
    description: 'Drive sustainable growth through data-driven digital marketing strategies.',
    features: [
      'SEO optimization',
      'Content marketing',
      'Social media strategy',
      'Analytics & insights'
    ]
  }
]

export default function ServicesClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className={styles.services} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>What We Build</span>
          <h2 className={styles.title}>
            Digital Solutions That
            <span className={styles.titleHighlight}> Drive Results</span>
          </h2>
          <p className={styles.subtitle}>
            From web applications to digital growth strategies, we craft digital products 
            that solve real problems and create meaningful impact.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className={styles.grid}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index}
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className={styles.bottomCTA}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className={styles.ctaText}>
            Ready to build something amazing?
          </p>
          <a href="/contact" className={styles.ctaButton}>
            Let's Talk About Your Project
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}