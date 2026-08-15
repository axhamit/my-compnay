// src/components/Footer/FooterClient.jsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './Footer.module.css'

const services = [
  { name: 'Web Development', href: '/services/web-development' },
  { name: 'Mobile Apps', href: '/services/mobile-apps' },
  { name: 'Custom Software', href: '/services/custom-software' },
  { name: 'UI/UX Design', href: '/services/ui-ux-design' },
  { name: 'E-Commerce', href: '/services/ecommerce' },
  { name: 'Digital Growth', href: '/services/digital-growth' }
]

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Work', href: '/work' },
  { name: 'Process', href: '/process' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' }
]

const industries = [
  { name: 'Startups', href: '/industries/startups' },
  { name: 'Education', href: '/industries/education' },
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'E-Commerce', href: '/industries/ecommerce' },
  { name: 'Real Estate', href: '/industries/real-estate' },
  { name: 'Hospitality', href: '/industries/hospitality' }
]

const resources = [
  { name: 'Blog', href: '/blog' },
  { name: 'Insights', href: '/insights' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Contact', href: '/contact' }
]

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'in' },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'ig' },
  { name: 'GitHub', href: 'https://github.com', icon: 'gh' },
  { name: 'X', href: 'https://x.com', icon: 'x' }
]

export default function FooterClient() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Top Section: Logo + Description + CTA */}
        <div className={styles.topSection}>
          <div className={styles.brandSection}>
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
            
            <p className={styles.brandDescription}>
              We design, build and grow digital products
              <br />
              that help businesses move forward.
            </p>
            
            <Link href="/contact" className={styles.ctaLink}>
              Start a Project →
            </Link>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className={styles.linksSection}>
          <div className={styles.linksGrid}>
            {/* Services */}
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Services</h4>
              <ul className={styles.linkList}>
                {services.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className={styles.linkItem}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Company</h4>
              <ul className={styles.linkList}>
                {company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className={styles.linkItem}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Industries</h4>
              <ul className={styles.linkList}>
                {industries.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className={styles.linkItem}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>Resources</h4>
              <ul className={styles.linkList}>
                {resources.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className={styles.linkItem}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact & Social Section */}
        <div className={styles.contactSection}>
          <div className={styles.contactGrid}>
            {/* Let's Talk */}
            <div className={styles.contactInfo}>
              <h4 className={styles.contactTitle}>Let's Talk</h4>
              <div className={styles.contactDetails}>
                <a href="mailto:hello@company.com" className={styles.contactItem}>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  hello@company.com
                </a>
                <a href="tel:+919999999999" className={styles.contactItem}>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  +91 XXXXX XXXXX
                </a>
                <div className={styles.contactItem}>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Bengaluru, India
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={styles.socialSection}>
              <h4 className={styles.socialTitle}>Connect With Us</h4>
              <div className={styles.socialLinks}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={social.name}
                  >
                    {social.icon === 'in' && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )}
                    {social.icon === 'ig' && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    )}
                    {social.icon === 'gh' && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.399s2.04.132 3 .399c2.292-1.552 3.3-1.23 3.3-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.694.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    )}
                    {social.icon === 'x' && (
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className={styles.bottomSection}>
          <div className={styles.bottomContent}>
            <span className={styles.copyright}>
              © {currentYear} StudioX. All rights reserved.
            </span>
            <div className={styles.legalLinks}>
              <Link href="/privacy" className={styles.legalLink}>
                Privacy Policy
              </Link>
              <span className={styles.legalDivider}>|</span>
              <Link href="/terms" className={styles.legalLink}>
                Terms
              </Link>
              <span className={styles.legalDivider}>|</span>
              <Link href="/cookies" className={styles.legalLink}>
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Back to Top */}
          {showBackToTop && (
            <motion.button
              className={styles.backToTop}
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ y: -2 }}
              aria-label="Back to top"
            >
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1z" />
                <path fillRule="evenodd" d="M4.293 9.293a1 1 0 011.414 0L10 13.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z" />
              </svg>
              <span>Back to top</span>
            </motion.button>
          )}
        </div>
      </div>
    </footer>
  )
}