// src/components/ProjectCategories/ProjectCategoriesClient.jsx
'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import styles from './ProjectCategories.module.css'

const categories = ['All', 'Web', 'Mobile', 'Software', 'E-Commerce', 'UI/UX']

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'E-Commerce',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
    image: '/projects/ecommerce.jpg',
    link: '/work/ecommerce-platform'
  },
  {
    id: 2,
    title: 'Education Platform',
    category: 'Web',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/projects/education.jpg',
    link: '/work/education-platform'
  },
  {
    id: 3,
    title: 'Healthcare Dashboard',
    category: 'Software',
    tags: ['React', 'Python', 'PostgreSQL'],
    image: '/projects/healthcare.jpg',
    link: '/work/healthcare-dashboard'
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    category: 'Mobile',
    tags: ['React Native', 'Node.js', 'MongoDB'],
    image: '/projects/mobile-banking.jpg',
    link: '/work/mobile-banking'
  },
  {
    id: 5,
    title: 'Furniture Store',
    category: 'E-Commerce',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    image: '/projects/furniture-store.jpg',
    link: '/work/furniture-store'
  },
  {
    id: 6,
    title: 'Design System',
    category: 'UI/UX',
    tags: ['Figma', 'React', 'Storybook'],
    image: '/projects/design-system.jpg',
    link: '/work/design-system'
  },
  {
    id: 7,
    title: 'Delivery App',
    category: 'Mobile',
    tags: ['React Native', 'Firebase', 'Maps'],
    image: '/projects/delivery-app.jpg',
    link: '/work/delivery-app'
  },
  {
    id: 8,
    title: 'Analytics Dashboard',
    category: 'Software',
    tags: ['React', 'D3', 'Python'],
    image: '/projects/analytics-dashboard.jpg',
    link: '/work/analytics-dashboard'
  }
]

export default function ProjectCategoriesClient() {
  const [activeCategory, setActiveCategory] = useState('All')
  const gridRef = useRef(null)

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section className={styles.categories}>
      <div className={styles.container}>
        {/* Filter Navigation */}
        <motion.div 
          className={styles.filterNav}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterButton} ${activeCategory === category ? styles.active : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
              {activeCategory === category && (
                <motion.span 
                  className={styles.activeIndicator}
                  layoutId="activeIndicator"
                  transition={{ type: 'spring', duration: 0.4 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          ref={gridRef}
          className={styles.projectsGrid}
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.4,
                delay: index * 0.05
              }}
              layout
              whileHover={{ y: -4 }}
            >
              <div className={styles.cardImage}>
                <div className={styles.imagePlaceholder}>
                  <span className={styles.imageIcon}>📐</span>
                </div>
                <span className={styles.cardCategory}>{project.category}</span>
              </div>
              <div className={styles.cardContent}>
                <h4 className={styles.cardTitle}>{project.title}</h4>
                <div className={styles.cardTags}>
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className={styles.cardTag}>{tag}</span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className={styles.cardTag}>+{project.tags.length - 2}</span>
                  )}
                </div>
                <a href={project.link} className={styles.cardLink}>
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className={styles.emptyState}>
            <span className={styles.emptyIcon}>🔍</span>
            <p className={styles.emptyText}>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}