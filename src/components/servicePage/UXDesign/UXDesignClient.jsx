// src/components/UXDesign/UXDesignClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import styles from './UXDesign.module.css'

const designServices = [
  'UX Research',
  'User Flows',
  'Wireframes',
  'UI Design',
  'Prototyping',
  'Design Systems'
]

const designProcess = [
  { step: 'Research', icon: '🔍', color: '#3B82F6' },
  { step: 'Wireframe', icon: '📐', color: '#8B5CF6' },
  { step: 'Prototype', icon: '🎯', color: '#EC4899' },
  { step: 'UI Design', icon: '🎨', color: '#F59E0B' },
  { step: 'Design System', icon: '📦', color: '#10B981' }
]

export default function UXDesignClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className={styles.uxDesign} ref={ref}>
      {/* Creative Background */}
      <div className={styles.bgElements}>
        <div className={styles.bgCircle1} />
        <div className={styles.bgCircle2} />
        <div className={styles.bgCircle3} />
        <div className={styles.bgGrid} />
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Content */}
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Badge */}
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              UI/UX Design
            </div>

            {/* Heading */}
            <h2 className={styles.heading}>
              Design that makes complex
              <span className={styles.headingHighlight}> products feel simple.</span>
            </h2>

            {/* Description */}
            <p className={styles.description}>
              We create intuitive, human-centered interfaces that users love. 
              From research to pixel-perfect design systems.
            </p>

            {/* Design Process Flow */}
            <div className={styles.processFlow}>
              {designProcess.map((item, index) => (
                <motion.div 
                  key={index} 
                  className={styles.processStep}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + (index * 0.06), duration: 0.4 }}
                >
                  <div 
                    className={styles.processDot}
                    style={{ background: item.color }}
                  />
                  <span className={styles.processText}>{item.step}</span>
                  {index < designProcess.length - 1 && (
                    <div className={styles.processLine} />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Services */}
            <div className={styles.services}>
              {designServices.map((service, index) => (
                <motion.span 
                  key={index} 
                  className={styles.serviceTag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + (index * 0.04), duration: 0.3 }}
                >
                  {service}
                </motion.span>
              ))}
            </div>

            {/* CTA */}
            <Link href="/services/ui-ux-design" className={styles.ctaButton}>
              Explore Design →
            </Link>
          </motion.div>

          {/* Right Visual - Figma-style Composition */}
          <motion.div 
            className={styles.visual}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className={styles.figmaContainer}>
              {/* Figma Frame */}
              <div className={styles.figmaFrame}>
                {/* Top Bar */}
                <div className={styles.figmaTopBar}>
                  <div className={styles.figmaTabs}>
                    <span className={styles.figmaTab}>Design</span>
                    <span className={styles.figmaTab}>Prototype</span>
                    <span className={styles.figmaTab}>Inspect</span>
                  </div>
                  <div className={styles.figmaActions}>
                    <div className={styles.figmaAction} />
                    <div className={styles.figmaAction} />
                  </div>
                </div>

                {/* Main Content */}
                <div className={styles.figmaContent}>
                  {/* Left Panel - Layers */}
                  <div className={styles.figmaLayers}>
                    <div className={styles.layerGroup}>
                      <span className={styles.layerTitle}>📁 Home Screen</span>
                      <div className={styles.layerItem}>Frame</div>
                      <div className={styles.layerItem}>Hero</div>
                      <div className={styles.layerItem}>Features</div>
                      <div className={styles.layerItem}>Testimonials</div>
                    </div>
                    <div className={styles.layerGroup}>
                      <span className={styles.layerTitle}>📁 Profile</span>
                      <div className={styles.layerItem}>Header</div>
                      <div className={styles.layerItem}>About</div>
                      <div className={styles.layerItem}>Settings</div>
                    </div>
                  </div>

                  {/* Center - Design Canvas */}
                  <div className={styles.figmaCanvas}>
                    {/* Wireframe Frame */}
                    <div className={styles.wireframeFrame}>
                      <div className={styles.wireframeHeader}>
                        <div className={styles.wireframeAvatar} />
                        <div className={styles.wireframeTitle} />
                      </div>
                      <div className={styles.wireframeBody}>
                        <div className={styles.wireframeCard} />
                        <div className={styles.wireframeCard} />
                        <div className={styles.wireframeCard} />
                      </div>
                    </div>

                    {/* UI Frame */}
                    <div className={styles.uiFrame}>
                      <div className={styles.uiHeader}>
                        <div className={styles.uiLogo} />
                        <div className={styles.uiNav} />
                      </div>
                      <div className={styles.uiBody}>
                        <div className={styles.uiHero}>
                          <div className={styles.uiTitle} />
                          <div className={styles.uiSubtitle} />
                          <div className={styles.uiButton} />
                        </div>
                        <div className={styles.uiCards}>
                          <div className={styles.uiCard} />
                          <div className={styles.uiCard} />
                          <div className={styles.uiCard} />
                        </div>
                      </div>
                    </div>

                    {/* Prototype Frame */}
                    <div className={styles.prototypeFrame}>
                      <div className={styles.prototypeHeader}>
                        <div className={styles.prototypePhone} />
                        <div className={styles.prototypeControls} />
                      </div>
                      <div className={styles.prototypeBody}>
                        <div className={styles.prototypeScreen}>
                          <div className={styles.prototypeApp}>
                            <div className={styles.prototypeAvatar} />
                            <div className={styles.prototypeName} />
                            <div className={styles.prototypeButtons} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Panel - Properties */}
                  <div className={styles.figmaProperties}>
                    <div className={styles.propertyGroup}>
                      <span className={styles.propertyTitle}>Typography</span>
                      <div className={styles.propertyItem}>
                        <span>Heading</span>
                        <span>32px</span>
                      </div>
                      <div className={styles.propertyItem}>
                        <span>Body</span>
                        <span>16px</span>
                      </div>
                    </div>
                    <div className={styles.propertyGroup}>
                      <span className={styles.propertyTitle}>Colors</span>
                      <div className={styles.colorPalette}>
                        <div className={styles.colorSwatch} style={{ background: '#0EA5E9' }} />
                        <div className={styles.colorSwatch} style={{ background: '#3B82F6' }} />
                        <div className={styles.colorSwatch} style={{ background: '#8B5CF6' }} />
                        <div className={styles.colorSwatch} style={{ background: '#F59E0B' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div 
                className={styles.floatingBadge1}
                animate={{ 
                  y: [0, -6, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5
                }}
              >
                <span className={styles.badgeIcon}>🎯</span>
                <span className={styles.badgeText}>User-Centered</span>
              </motion.div>

              <motion.div 
                className={styles.floatingBadge2}
                animate={{ 
                  y: [0, 6, 0],
                  rotate: [0, -2, 0]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1
                }}
              >
                <span className={styles.badgeIcon}>✨</span>
                <span className={styles.badgeText}>Pixel Perfect</span>
              </motion.div>

              <motion.div 
                className={styles.floatingBadge3}
                animate={{ 
                  y: [0, -4, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1.5
                }}
              >
                <span className={styles.badgeIcon}>📱</span>
                <span className={styles.badgeText}>Responsive</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}