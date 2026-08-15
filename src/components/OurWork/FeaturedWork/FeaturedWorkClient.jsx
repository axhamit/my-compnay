// src/components/FeaturedWork/FeaturedWorkClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './FeaturedWork.module.css'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Application · E-commerce',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
    description: 'A full-featured e-commerce platform with real-time inventory, AI-powered recommendations, and seamless payment processing.',
    image: '/projects/ecommerce.jpg',
    link: '/work/ecommerce-platform',
    layout: 'full',
    stats: ['300% Revenue Growth', '2M+ Products', '50% Faster']
  },
  {
    id: 2,
    title: 'Education Platform',
    category: 'SaaS · EdTech',
    tags: ['React', 'Node.js', 'MongoDB'],
    description: 'An interactive learning platform connecting students and teachers with live classes, adaptive assessments, and collaborative tools.',
    image: '/projects/education.jpg',
    link: '/work/education-platform',
    layout: 'split',
    stats: ['100K+ Users', '85% Completion', '50+ Partners']
  },
  {
    id: 3,
    title: 'Healthcare Dashboard',
    category: 'HealthTech · Analytics',
    tags: ['React', 'Python', 'PostgreSQL'],
    description: 'A comprehensive healthcare analytics dashboard providing real-time patient data, predictive insights, and treatment optimization.',
    image: '/projects/healthcare.jpg',
    link: '/work/healthcare-dashboard',
    layout: 'full',
    stats: ['40% Faster', '95% Accuracy', '1M+ Records']
  }
]

export default function FeaturedWorkClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section className={styles.featuredWork} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Featured Projects</span>
          <h2 className={styles.heading}>
            Our Best
            <span className={styles.headingHighlight}> Work</span>
          </h2>
          <p className={styles.subtitle}>
            A selection of projects that showcase our expertise and commitment to quality.
          </p>
        </motion.div>

        {/* Projects */}
        <div className={styles.projects}>
          {projects.map((project, index) => {
            const isEven = index % 2 === 0
            const layout = project.layout || (isEven ? 'full' : 'split')

            return (
              <motion.div
                key={project.id}
                className={`${styles.project} ${styles[`layout_${layout}`]}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                {/* Project Image */}
                <div className={styles.projectImage}>
                  <div className={styles.imagePlaceholder}>
                    <div className={styles.imageContent}>
                      <span className={styles.imageIcon}>📐</span>
                      <span className={styles.imageLabel}>{project.category}</span>
                    </div>
                    {/* Uncomment for real images
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    */}
                  </div>
                  
                  {/* Project Number */}
                  <span className={styles.projectNumber}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Project Info */}
                <div className={styles.projectInfo}>
                  <div className={styles.infoContent}>
                    <span className={styles.projectCategory}>
                      {project.category}
                    </span>
                    <h3 className={styles.projectTitle}>
                      {project.title}
                    </h3>
                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className={styles.projectTags}>
                      {project.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className={styles.projectStats}>
                      {project.stats.map((stat, idx) => (
                        <span key={idx} className={styles.stat}>
                          {stat}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <Link href={project.link} className={styles.projectLink}>
                      View Case Study →
                    </Link>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className={styles.bottomCTA}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <Link href="/work/all" className={styles.viewAllButton}>
            View All Projects →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}