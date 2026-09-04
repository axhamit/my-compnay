// src/app/components/navbar/NavbarClient.jsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import MobileMenu from './MobileMenu'
import NavLink from './NavLink'
import styles from './Navbar.module.css'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'Industries', href: '/industries' },
  { name: 'Process', href: '/process' },
  { name: 'About', href: '/about' },
]

export default function NavbarClient() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header 
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      >
        <nav className={styles.navbar}>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.logoContainer}
          >
            <Link href="/" className={styles.logo}>
              <Image
                src="/digiFu.png"
                alt="Digifu logo"
                width={160}
                height={60}
                className={styles.logoImage}
              />
              {/* <span className={styles.logoText}>
                Digifu
              </span> */}
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <NavLink href={item.href}>
                  {item.name}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={styles.ctaContainer}
          >
            <Link href="/contact" className={styles.ctaButton}>
              Start a Project
              <svg className={styles.ctaIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={styles.mobileMenuButton}
            aria-label="Toggle menu"
          >
            <div className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu 
            navigation={navigation}
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.backdrop}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}