// src/components/Approach/ApproachClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import styles from './Approach.module.css'

const approachData = {
  strategy: {
    title: 'Strategy',
    icon: '🎯',
    items: ['Business', 'Users', 'Market', 'Goals'],
    description: 'We start by understanding your business, users, and goals to define a clear path forward.'
  },
  design: {
    title: 'Design',
    icon: '🎨',
    items: ['User Experience', 'Wireframes', 'UI', 'Prototype'],
    description: 'We create intuitive, beautiful interfaces that users love and that achieve business objectives.'
  },
  engineering: {
    title: 'Engineering',
    icon: '⚙️',
    items: ['Web', 'Mobile', 'Backend', 'Infrastructure'],
    description: 'We build robust, scalable solutions with clean code and modern technology.'
  }
}

export default function ApproachClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const pillars = ['strategy', 'design', 'engineering']

  return (
    <section className={styles.approach} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.badge}>Our Approach</span>
          <h2 className={styles.heading}>
            Strategy, Design and
            <span className={styles.headingHighlight}> Technology</span>
            <br />
            <span className={styles.headingSub}>Working Together</span>
          </h2>
          <p className={styles.subtitle}>
            A proven methodology that combines business strategy, human-centered design, 
            and engineering excellence to deliver products that matter.
          </p>
        </motion.div>

        {/* Approach Flow */}
        <div className={styles.flow}>
          {/* Pillars */}
          <div className={styles.pillars}>
            {pillars.map((key, index) => {
              const pillar = approachData[key]
              const isLast = index === pillars.length - 1

              return (
                <motion.div
                  key={key}
                  className={styles.pillar}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  {/* Pillar Card */}
                  <motion.div 
                    className={styles.pillarCard}
                    whileHover={{ 
                      y: -4,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className={styles.pillarHeader}>
                      <span className={styles.pillarIcon}>{pillar.icon}</span>
                      <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                      <span className={styles.pillarNumber}>0{index + 1}</span>
                    </div>
                    
                    <div className={styles.pillarBody}>
                      <p className={styles.pillarDescription}>{pillar.description}</p>
                      
                      <div className={styles.pillarItems}>
                        {pillar.items.map((item, idx) => (
                          <motion.span 
                            key={idx} 
                            className={styles.pillarItem}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ 
                              delay: 0.3 + (index * 0.1) + (idx * 0.05),
                              duration: 0.3
                            }}
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Arrow Connection */}
                  {!isLast && (
                    <motion.div 
                      className={styles.arrowConnection}
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
                      transition={{ 
                        delay: 0.4 + (index * 0.1),
                        duration: 0.5
                      }}
                    >
                      <div className={styles.arrowLine} />
                      <svg className={styles.arrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Product Result */}
          <motion.div 
            className={styles.productResult}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className={styles.productContainer}>
              <div className={styles.productGlow} />
              <div className={styles.productContent}>
                <span className={styles.productIcon}>🚀</span>
                <span className={styles.productLabel}>Product</span>
                <span className={styles.productSub}>Built to solve real problems</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className={styles.bottomCTA}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          <a href="/process" className={styles.ctaButton}>
            See Our Detailed Process
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}