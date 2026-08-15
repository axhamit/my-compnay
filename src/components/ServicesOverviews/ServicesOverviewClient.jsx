// src/components/ServicesOverview/ServicesOverviewClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import styles from './ServicesOverview.module.css'

const services = [
  {
    id: 1,
    title: 'Web Development',
    icon: '💻',
    description: 'High-performance websites and web applications built around your business.',
    link: '/services/web-development',
    features: ['React', 'Next.js', 'Node.js', 'TypeScript']
  },
  {
    id: 2,
    title: 'Mobile App Development',
    icon: '📱',
    description: 'Cross-platform mobile applications designed for iOS and Android.',
    link: '/services/mobile-apps',
    features: ['React Native', 'iOS', 'Android', 'Flutter']
  },
  {
    id: 3,
    title: 'Custom Software',
    icon: '⚙️',
    description: 'Business software designed to automate workflows and solve complex operational problems.',
    link: '/services/custom-software',
    features: ['Python', 'Java', 'C#', 'Go']
  },
  {
    id: 4,
    title: 'UI/UX Design',
    icon: '🎨',
    description: 'Research-driven interfaces that make products simple, useful and engaging.',
    link: '/services/ui-ux-design',
    features: ['Figma', 'User Research', 'Prototyping', 'Design Systems']
  },
  {
    id: 5,
    title: 'E-Commerce',
    icon: '🛒',
    description: 'Scalable online stores and commerce platforms built to convert.',
    link: '/services/ecommerce',
    features: ['Shopify', 'Magento', 'WooCommerce', 'Custom']
  },
  {
    id: 6,
    title: 'Digital Growth',
    icon: '📈',
    description: 'SEO, social media, content and digital marketing that help your business reach more customers.',
    link: '/services/digital-growth',
    features: ['SEO', 'Social Media', 'Content Marketing', 'Analytics']
  }
]

export default function ServicesOverviewClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

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
          <span className={styles.badge}>What We Do</span>
          <h2 className={styles.heading}>
            Services
          </h2>
          <p className={styles.subtitle}>
            We combine product strategy, design, engineering and growth to help 
            businesses build better digital experiences.
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
            <motion.div
              key={service.id}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5,
                delay: 0.1 + (index * 0.06),
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ y: -4 }}
            >
              <div className={styles.cardContent}>
                {/* Icon */}
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{service.icon}</span>
                  <span className={styles.cardNumber}>0{service.id}</span>
                </div>

                {/* Title */}
                <h3 className={styles.serviceTitle}>{service.title}</h3>

                {/* Description */}
                <p className={styles.serviceDescription}>{service.description}</p>

                {/* Features */}
                <div className={styles.features}>
                  {service.features.map((feature, idx) => (
                    <span key={idx} className={styles.featureTag}>
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Explore Link */}
                <Link href={service.link} className={styles.exploreLink}>
                  Explore →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}