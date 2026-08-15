// src/app/components/navbar/NavLink.jsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import styles from './Navbar.module.css'

export default function NavLink({ href, children }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href} className={`${styles.navLink} ${isActive ? styles.active : ''}`}>
      {children}
      {isActive && (
        <motion.div
          layoutId="underline"
          className={styles.underline}
          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        />
      )}
    </Link>
  )
}