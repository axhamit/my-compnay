// src/app/components/navbar/NavbarClient.jsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
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
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('studiox-theme')
    const preferredTheme = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

    setTheme(preferredTheme)
    document.documentElement.setAttribute('data-theme', preferredTheme)
    document.documentElement.style.colorScheme = preferredTheme
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('studiox-theme', theme)
  }, [theme])

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

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

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
              <svg 
                className={styles.logoSvg}
                viewBox="0 0 40 40" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="12" fill="#0EA5E9"/>
                <path d="M12 12L20 28L28 12" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="20" cy="20" r="16" stroke="white" strokeWidth="2" opacity="0.3"/>
              </svg>
              <span className={styles.logoText}>
                Studio<span className={styles.logoHighlight}>X</span>
              </span>
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

          <button
            type="button"
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <span className={styles.themeToggleIcon}>{theme === 'dark' ? '☀' : '☾'}</span>
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>

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