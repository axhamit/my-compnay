// src/components/ProjectGrid/ProjectGridClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './ProjectGrid.module.css'

const projects = [
  {
    id: 1,
    title: 'Restaurant App',
    category: 'Mobile · React Native',
    description: 'A modern food delivery and restaurant discovery app with real-time ordering.',
    image: '/projects/restaurant-app.jpg',
    tags: ['React Native', 'Node.js', 'MongoDB'],
    link: '/work/restaurant-app'
  },
  {
    id: 2,
    title: 'Real Estate Platform',
    category: 'Web · SaaS',
    description: 'A comprehensive property management platform for real estate agencies.',
    image: '/projects/real-estate.jpg',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    link: '/work/real-estate-platform'
  },
  {
    id: 3,
    title: 'Fitness Tracker',
    category: 'Mobile · iOS/Android',
    description: 'A health and fitness tracking app with personalized workout plans.',
    image: '/projects/fitness-tracker.jpg',
    tags: ['React Native', 'Firebase', 'GraphQL'],
    link: '/work/fitness-tracker'
  },
  {
    id: 4,
    title: 'E-Learning Platform',
    category: 'Web · EdTech',
    description: 'An interactive learning platform with live classes and assessments.',
    image: '/projects/elearning.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '/work/elearning-platform'
  },
  {
    id: 5,
    title: 'Healthcare Dashboard',
    category: 'Web · Analytics',
    description: 'A real-time healthcare analytics dashboard for hospitals and clinics.',
    image: '/projects/healthcare-dashboard.jpg',
    tags: ['React', 'Python', 'PostgreSQL'],
    link: '/work/healthcare-dashboard'
  },
  {
    id: 6,
    title: 'Furniture Store',
    category: 'Web · E-Commerce',
    description: 'A modern e-commerce platform for premium furniture brands.',
    image: '/projects/furniture-store.jpg',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    link: '/work/furniture-store'
  }
]

export default function ProjectGridClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.05 })

  return (
    <section className={styles.projectGrid} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.heading}>
            More Projects
          </h2>
          <p className={styles.subtitle}>
            A curated selection of our recent work.
          </p>
        </motion.div>

        {/* Grid */}
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5,
                delay: index * 0.06,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ y: -4 }}
            >
              <Link href={project.link} className={styles.cardLink}>
                {/* Image */}
                <div className={styles.cardImage}>
                  <div className={styles.imageWrapper}>
                    {/* Placeholder - Replace with actual images */}
                    <div className={styles.imagePlaceholder}>
                      <span className={styles.imageIcon}>📐</span>
                      <span className={styles.imageLabel}>{project.category}</span>
                    </div>
                    
                    {/* Uncomment and update with real images
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index < 2}
                    />
                    */}
                  </div>
                  
                  {/* Category Badge */}
                  <span className={styles.categoryBadge}>
                    {project.category.split('·')[0].trim()}
                  </span>
                </div>

                {/* Content */}
                <div className={styles.cardContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectCategory}>{project.category}</p>
                  
                  {/* Tags */}
                  <div className={styles.projectTags}>
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className={styles.viewLink}>
                    View Case Study →
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