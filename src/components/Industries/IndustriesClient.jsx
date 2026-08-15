// src/components/Industries/IndustriesClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import IndustryCard from './IndustryCard'
import styles from './Industries.module.css'

const industries = [
  {
    id: 1,
    name: 'Startups',
    icon: '🚀',
    slug: 'startups',
    color: '#3B82F6',
    gradient: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
    lightBg: '#EFF6FF',
    description: 'Scale from MVP to market leader with agile development and growth-focused solutions.',
    challenges: ['Rapid prototyping', 'Market validation', 'Scaling infrastructure'],
    solutions: ['MVP development', 'Growth hacking', 'Cloud-native architecture'],
    stats: ['10x faster time-to-market', '90% cost efficiency'],
    caseStudy: 'Helped 50+ startups raise $100M+ in funding'
  },
  {
    id: 2,
    name: 'Education',
    icon: '🎓',
    slug: 'education',
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6, #5B21B6)',
    lightBg: '#F5F3FF',
    description: 'Transform learning with engaging digital platforms, adaptive assessments, and collaborative tools.',
    challenges: ['Student engagement', 'Content delivery', 'Assessment tracking'],
    solutions: ['LMS platforms', 'Interactive content', 'Analytics dashboards'],
    stats: ['85% higher completion rates', '2x student engagement'],
    caseStudy: 'Platform used by 100K+ students across 50 institutions'
  },
  {
    id: 3,
    name: 'Healthcare',
    icon: '🏥',
    slug: 'healthcare',
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981, #065F46)',
    lightBg: '#ECFDF5',
    description: 'Improve patient outcomes with HIPAA-compliant solutions, telemedicine, and data-driven insights.',
    challenges: ['Data privacy', 'Patient engagement', 'Regulatory compliance'],
    solutions: ['Telemedicine platforms', 'Patient portals', 'Analytics dashboards'],
    stats: ['40% reduction in wait times', '95% patient satisfaction'],
    caseStudy: 'Processed 1M+ patient records with 99.9% uptime'
  },
  {
    id: 4,
    name: 'Real Estate',
    icon: '🏢',
    slug: 'real-estate',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B, #D97706)',
    lightBg: '#FFFBEB',
    description: 'Modernize property management, sales, and leasing with digital solutions that drive conversions.',
    challenges: ['Property listings', 'Lead generation', 'Transaction management'],
    solutions: ['Property portals', 'CRM systems', 'Virtual tours'],
    stats: ['300% increase in qualified leads', '50% faster sales cycle'],
    caseStudy: 'Helped 500+ properties sell faster with digital solutions'
  },
  {
    id: 5,
    name: 'E-Commerce',
    icon: '🛒',
    slug: 'ecommerce',
    color: '#EC4899',
    gradient: 'linear-gradient(135deg, #EC4899, #BE185D)',
    lightBg: '#FDF2F8',
    description: 'Build high-converting online stores with seamless checkout, AI-powered recommendations, and global reach.',
    challenges: ['Conversion optimization', 'Inventory management', 'Customer retention'],
    solutions: ['E-commerce platforms', 'Payment integration', 'Analytics tools'],
    stats: ['300% revenue growth', '2M+ products managed'],
    caseStudy: 'Scaled platform to handle 2M+ products with 99.9% uptime'
  },
  {
    id: 6,
    name: 'Hospitality',
    icon: '🏨',
    slug: 'hospitality',
    color: '#EF4444',
    gradient: 'linear-gradient(135deg, #EF4444, #B91C1C)',
    lightBg: '#FEF2F2',
    description: 'Deliver exceptional guest experiences with booking systems, personalized services, and operational efficiency.',
    challenges: ['Booking management', 'Guest experience', 'Operational efficiency'],
    solutions: ['Booking systems', 'Guest portals', 'Property management'],
    stats: ['60% increase in bookings', '4.8★ average rating'],
    caseStudy: 'Increased direct bookings by 150% for hotel chain'
  },
  {
    id: 7,
    name: 'Finance',
    icon: '💰',
    slug: 'finance',
    color: '#14B8A6',
    gradient: 'linear-gradient(135deg, #14B8A6, #0D9488)',
    lightBg: '#F0FDFA',
    description: 'Modernize financial services with secure, compliant, and user-friendly digital solutions.',
    challenges: ['Security compliance', 'User trust', 'Data integration'],
    solutions: ['Fintech platforms', 'Analytics tools', 'Mobile banking'],
    stats: ['99.99% uptime', '5x faster transactions'],
    caseStudy: 'Processed $1B+ in transactions with zero security incidents'
  },
  {
    id: 8,
    name: 'Professional Services',
    icon: '💼',
    slug: 'professional-services',
    color: '#F97316',
    gradient: 'linear-gradient(135deg, #F97316, #EA580C)',
    lightBg: '#FFF7ED',
    description: 'Streamline client management, project delivery, and business operations with custom software solutions.',
    challenges: ['Client management', 'Project delivery', 'Resource optimization'],
    solutions: ['CRM systems', 'Project management', 'Automation tools'],
    stats: ['70% faster project delivery', '50% cost reduction'],
    caseStudy: 'Scaled operations for 100+ professional service firms'
  }
]

export default function IndustriesClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section className={styles.industries} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className={styles.badge}>Industries We Serve</span>
          <h2 className={styles.title}>
            Expertise Across
            <span className={styles.titleHighlight}> Every Industry</span>
          </h2>
          <p className={styles.subtitle}>
            We understand the unique challenges and opportunities in your industry. 
            Our tailored solutions drive real business results.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className={styles.grid}>
          {industries.map((industry, index) => (
            <IndustryCard 
              key={industry.id} 
              industry={industry} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}