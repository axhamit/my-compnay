// src/components/Work/WorkSlider.jsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Work.module.css'

export default function WorkSlider({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(() => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % projects.length)
      }, 6000)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isAutoPlaying, projects.length])

  const handleMouseEnter = () => {
    setIsAutoPlaying(false)
    if (timerRef.current) clearInterval(timerRef.current)
  }

  const handleMouseLeave = () => setIsAutoPlaying(true)

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    resetTimer()
  }

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    resetTimer()
  }

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
    resetTimer()
  }

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    if (isAutoPlaying) {
      timerRef.current = setInterval(() => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % projects.length)
      }, 6000)
    }
  }

  const project = projects[currentIndex]

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  }

  return (
    <div 
      className={styles.sliderContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.sliderWrapper}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className={styles.slide}
          >
            {/* Premium Card */}
            <div className={styles.premiumCard}>
              {/* Left Visual */}
              <div 
                className={styles.cardVisual}
                style={{ background: project.gradient }}
              >
                <div className={styles.visualContent}>
                  <div className={styles.projectNumber}>
                    <span className={styles.number}>{project.number}</span>
                    <span className={styles.numberLine}></span>
                  </div>
                  
                  <div className={styles.visualCenter}>
                    <div className={styles.mockupContainer}>
                      <div className={styles.mockupFrame}>
                        <div className={styles.mockupHeader}>
                          <div className={styles.mockupDots}>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                          <div className={styles.mockupUrl}>{project.category}.dev</div>
                        </div>
                        <div className={styles.mockupBody}>
                          <div className={styles.mockupIcon}>{project.icon || '📐'}</div>
                          <div className={styles.mockupTitle}>{project.title}</div>
                          <div className={styles.mockupTags}>
                            {project.tags.slice(0, 2).map(tag => (
                              <span key={tag} className={styles.mockupTag}>{tag}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats on Visual */}
                  <div className={styles.visualStats}>
                    {project.results.map((stat, idx) => (
                      <div key={idx} className={styles.visualStat}>
                        <span className={styles.visualStatValue}>{stat.value}</span>
                        <span className={styles.visualStatLabel}>{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className={styles.cardContent}>
                <div className={styles.contentHeader}>
                  <span className={styles.cardCategory}>{project.category}</span>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                </div>

                <p className={styles.cardDescription}>{project.description}</p>

                <div className={styles.cardDetails}>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Challenge</span>
                    <span className={styles.detailValue}>{project.challenge}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <span className={styles.detailLabel}>Solution</span>
                    <span className={styles.detailValue}>{project.solution}</span>
                  </div>
                </div>

                <div className={styles.cardTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.cardTag}>{tag}</span>
                  ))}
                </div>

                <div className={styles.cardFooter}>
                  <motion.a 
                    href={project.link}
                    className={styles.caseStudyLink}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    View Case Study
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className={styles.sliderControls}>
        <div className={styles.controlsLeft}>
          <button
            className={styles.arrowBtn}
            onClick={goToPrevious}
            aria-label="Previous project"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className={styles.arrowBtn}
            onClick={goToNext}
            aria-label="Next project"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className={styles.controlsCenter}>
          <div className={styles.dots}>
            {projects.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
              >
                <span className={styles.dotProgress} />
              </button>
            ))}
          </div>
        </div>

        <div className={styles.controlsRight}>
          <span className={styles.slideCounter}>
            <span className={styles.counterCurrent}>{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className={styles.counterSeparator}>/</span>
            <span className={styles.counterTotal}>{String(projects.length).padStart(2, '0')}</span>
          </span>
        </div>
      </div>
    </div>
  )
}