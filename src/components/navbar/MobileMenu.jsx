// src/app/components/navbar/MobileMenu.jsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'

const menuVariants = {
  hidden: {
    opacity: 0,
    x: '100%',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

export default function MobileMenu({ navigation, onClose }) {
  return (
    <motion.div
      className={styles.mobileMenu}
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className={styles.mobileMenuContent}>
        <div className={styles.mobileMenuHeader}>
          <Link href="/" className={styles.mobileLogo} onClick={onClose}>
            <Image
              src="/file.svg"
              alt="Digifu logo"
              width={32}
              height={32}
              className={styles.mobileLogoImage}
            />
            <span>Digifu</span>
          </Link>
        </div>

        <nav className={styles.mobileNav}>
          {navigation.map((item) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              className={styles.mobileNavItem}
            >
              <Link href={item.href} onClick={onClose}>
                {item.name}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div 
          variants={itemVariants}
          className={styles.mobileCta}
        >
          <Link href="/contact" className={styles.mobileCtaButton} onClick={onClose}>
            Start a Project
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          variants={itemVariants}
          className={styles.mobileSocial}
        >
          <Link href="#" aria-label="Twitter">Twitter</Link>
          <Link href="#" aria-label="LinkedIn">LinkedIn</Link>
          <Link href="#" aria-label="Dribbble">Dribbble</Link>
          <Link href="#" aria-label="GitHub">GitHub</Link>
        </motion.div>
      </div>
    </motion.div>
  )
}