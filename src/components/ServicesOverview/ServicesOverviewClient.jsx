// src/components/ServicesOverview/ServicesOverviewClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import ServiceDetail from './ServiceDetail'
import styles from './ServicesOverview.module.css'

const services = [
  {
    id: 1,
    number: '01',
    title: 'Web Development',
    icon: '💻',
    color: '#3B82F6',
    gradient: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
    lightBg: '#EFF6FF',
    tagline: 'Scalable web solutions that drive growth',
    businessBenefits: [
      {
        title: 'Increase Revenue',
        description: 'Convert visitors into customers with high-performance, SEO-optimized web applications that drive sales.',
        metric: '200% ROI'
      },
      {
        title: 'Reduce Costs',
        description: 'Automate manual processes and streamline operations with custom web solutions.',
        metric: '40% cost reduction'
      },
      {
        title: 'Scale Seamlessly',
        description: 'Grow your business without technical limitations with scalable architecture.',
        metric: '100x capacity'
      }
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'TypeScript'],
    useCases: ['SaaS Platforms', 'Enterprise Portals', 'E-commerce Stores'],
    caseStudy: 'Helped a retail company achieve 300% increase in online sales'
  },
  {
    id: 2,
    number: '02',
    title: 'Mobile Development',
    icon: '📱',
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6, #5B21B6)',
    lightBg: '#F5F3FF',
    tagline: 'Native experiences that engage users',
    businessBenefits: [
      {
        title: 'Engage Customers',
        description: 'Reach users on their favorite devices with intuitive, native mobile experiences.',
        metric: '85% retention rate'
      },
      {
        title: 'Increase Revenue',
        description: 'Monetize through app stores, in-app purchases, and mobile-first payment solutions.',
        metric: '2.5x revenue growth'
      },
      {
        title: 'Build Loyalty',
        description: 'Create stickiness with personalized, always-accessible mobile experiences.',
        metric: '4.7★ average rating'
      }
    ],
    technologies: ['React Native', 'Swift', 'Kotlin', 'Flutter'],
    useCases: ['Consumer Apps', 'Enterprise Mobile', 'IoT Solutions'],
    caseStudy: 'Delivered a healthcare app with 100K+ active users in 3 months'
  },
  {
    id: 3,
    number: '03',
    title: 'Custom Software',
    icon: '⚙️',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
    lightBg: '#FFFBEB',
    tagline: 'Tailored solutions for unique challenges',
    businessBenefits: [
      {
        title: 'Optimize Operations',
        description: 'Eliminate inefficiencies with software built specifically for your workflows.',
        metric: '60% efficiency gain'
      },
      {
        title: 'Gain Competitive Edge',
        description: 'Build proprietary solutions that differentiate you from competitors.',
        metric: '3x faster than off-the-shelf'
      },
      {
        title: 'Full Control',
        description: 'Own your intellectual property and scale without vendor lock-in.',
        metric: '100% ownership'
      }
    ],
    technologies: ['Python', 'Java', 'C#', 'Go'],
    useCases: ['CRM Systems', 'ERP Solutions', 'Automation Tools'],
    caseStudy: 'Built custom ERP that saved a company $500K annually'
  },
  {
    id: 4,
    number: '04',
    title: 'UI/UX Design',
    icon: '🎨',
    color: '#EC4899',
    gradient: 'linear-gradient(135deg, #EC4899, #BE185D)',
    lightBg: '#FDF2F8',
    tagline: 'Design that delivers measurable results',
    businessBenefits: [
      {
        title: 'Boost Conversion',
        description: 'Turn browsers into buyers with user-centered design optimized for conversion.',
        metric: '150% conversion lift'
      },
      {
        title: 'Reduce Churn',
        description: 'Delight users with intuitive interfaces that keep them coming back.',
        metric: '70% lower churn'
      },
      {
        title: 'Build Trust',
        description: 'Establish credibility with professional, accessible design systems.',
        metric: '95% user satisfaction'
      }
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Design Systems'],
    useCases: ['Product Design', 'Design Systems', 'User Research'],
    caseStudy: 'Redesigned a platform resulting in 2x user engagement'
  },
  {
    id: 5,
    number: '05',
    title: 'E-Commerce',
    icon: '🛒',
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981, #065F46)',
    lightBg: '#ECFDF5',
    tagline: 'Digital stores that convert and scale',
    businessBenefits: [
      {
        title: 'Increase Sales',
        description: 'Launch conversion-optimized stores with seamless checkout and payment integration.',
        metric: '300% revenue increase'
      },
      {
        title: 'Expand Reach',
        description: 'Sell globally with multi-language, multi-currency platforms.',
        metric: '50+ countries'
      },
      {
        title: 'Optimize Operations',
        description: 'Automate inventory, fulfillment, and customer management.',
        metric: '80% less admin time'
      }
    ],
    technologies: ['Shopify', 'Magento', 'WooCommerce', 'Custom'],
    useCases: ['B2C Stores', 'B2B Marketplaces', 'Subscription Services'],
    caseStudy: 'Scaled a store to handle 2M+ products with 99.9% uptime'
  },
  {
    id: 6,
    number: '06',
    title: 'Digital Marketing',
    icon: '🚀',
    color: '#EF4444',
    gradient: 'linear-gradient(135deg, #EF4444, #B91C1C)',
    lightBg: '#FEF2F2',
    tagline: 'Data-driven growth strategies',
    businessBenefits: [
      {
        title: 'Drive Qualified Traffic',
        description: 'Attract high-intent customers with SEO and targeted advertising.',
        metric: '200% traffic growth'
      },
      {
        title: 'Increase Conversions',
        description: 'Optimize your funnel with data-driven marketing strategies.',
        metric: '5x ROAS'
      },
      {
        title: 'Build Authority',
        description: 'Establish your brand as an industry leader with content marketing.',
        metric: '1M+ monthly reach'
      }
    ],
    technologies: ['SEO', 'SEM', 'Social Media', 'Analytics'],
    useCases: ['Growth Strategy', 'Content Marketing', 'Paid Advertising'],
    caseStudy: 'Generated 10,000+ leads through content marketing'
  }
]

export default function ServicesOverviewClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeService, setActiveService] = useState(0)

  return (
    <section className={styles.services} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className={styles.badge}>Services Overview</span>
          <h2 className={styles.title}>
            Solutions That Drive
            <span className={styles.titleHighlight}> Business Growth</span>
          </h2>
          <p className={styles.subtitle}>
            We don't just build technology — we create business value through strategic 
            digital solutions tailored to your goals.
          </p>
        </motion.div>

        {/* Service Navigation */}
        <div className={styles.servicesNav}>
          {services.map((service, index) => (
            <motion.button
              key={service.id}
              className={`${styles.navItem} ${index === activeService ? styles.activeNav : ''}`}
              onClick={() => setActiveService(index)}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              style={{ 
                '--hover-color': service.color 
              }}
            >
              <span className={styles.navNumber}>{service.number}</span>
              <span className={styles.navTitle}>{service.title}</span>
              <span className={styles.navIcon}>{service.icon}</span>
            </motion.button>
          ))}
        </div>

        {/* Service Detail */}
        <ServiceDetail service={services[activeService]} />

        {/* Bottom CTA */}
        <motion.div 
          className={styles.bottomCTA}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Ready to Grow Your Business?</h3>
            <p className={styles.ctaDescription}>
              Let's discuss how our services can help you achieve your business goals.
            </p>
            <a href="/contact" className={styles.ctaButton}>
              Start Your Project
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}