// src/components/ECommerce/ECommerceClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import styles from './ECommerce.module.css'

const commerceCapabilities = [
  'Custom storefronts',
  'Product management',
  'Payments',
  'Inventory',
  'Order management',
  'Customer accounts',
  'Admin dashboards',
  'Analytics'
]

const commerceStack = [
  { name: 'Storefront', icon: '🛍️' },
  { name: 'Product', icon: '📦' },
  { name: 'Payments', icon: '💳' },
  { name: 'Orders', icon: '📋' },
  { name: 'Inventory', icon: '📊' },
  { name: 'Analytics', icon: '📈' }
]

export default function ECommerceClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section className={styles.ecommerce} ref={ref}>
      <div className={styles.bgElements}>
        <div className={styles.bgGlow} />
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
              E-Commerce
            </div>

            {/* Heading */}
            <h2 className={styles.heading}>
              Commerce experiences
              <span className={styles.headingHighlight}> designed to convert.</span>
            </h2>

            {/* Description */}
            <p className={styles.description}>
              Build scalable online stores with seamless checkout, intelligent 
              product management, and data-driven insights.
            </p>

            {/* Commerce Stack */}
            <div className={styles.commerceStack}>
              {commerceStack.map((item, index) => (
                <motion.div 
                  key={index} 
                  className={styles.stackItem}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + (index * 0.05), duration: 0.3 }}
                >
                  <span className={styles.stackIcon}>{item.icon}</span>
                  <span className={styles.stackName}>{item.name}</span>
                  {index < commerceStack.length - 1 && (
                    <span className={styles.stackPlus}>+</span>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Capabilities */}
            <div className={styles.capabilities}>
              {commerceCapabilities.map((cap, index) => (
                <motion.span 
                  key={index} 
                  className={styles.capabilityTag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + (index * 0.03), duration: 0.3 }}
                >
                  {cap}
                </motion.span>
              ))}
            </div>

            {/* CTA */}
            <Link href="/services/ecommerce" className={styles.ctaButton}>
              Build Your Store →
            </Link>
          </motion.div>

          {/* Right Visual - Shop Interface */}
          <motion.div 
            className={styles.visual}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className={styles.shopContainer}>
              {/* Shop Interface */}
              <div className={styles.shopInterface}>
                {/* Shop Header */}
                <div className={styles.shopHeader}>
                  <div className={styles.shopLogo}>
                    <svg viewBox="0 0 30 30" fill="none">
                      <rect width="30" height="30" rx="8" fill="#0EA5E9"/>
                      <path d="M9 9L15 21L21 9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    <span className={styles.shopName}>Digifu Store</span>
                  </div>
                  <div className={styles.shopNav}>
                    <span className={styles.navItem}>Products</span>
                    <span className={styles.navItem}>Orders</span>
                    <span className={styles.navItem}>Analytics</span>
                  </div>
                  <div className={styles.shopActions}>
                    <div className={styles.cartIcon}>
                      <span className={styles.cartBadge}>3</span>
                    </div>
                    <div className={styles.userAvatar} />
                  </div>
                </div>

                {/* Shop Body */}
                <div className={styles.shopBody}>
                  {/* Sidebar */}
                  <div className={styles.shopSidebar}>
                    <div className={styles.sidebarSection}>
                      <span className={styles.sidebarLabel}>Categories</span>
                      <div className={styles.categoryItem}>All Products</div>
                      <div className={styles.categoryItem}>Electronics</div>
                      <div className={styles.categoryItem}>Clothing</div>
                      <div className={styles.categoryItem}>Home & Living</div>
                      <div className={styles.categoryItem}>Books</div>
                    </div>
                    <div className={styles.sidebarSection}>
                      <span className={styles.sidebarLabel}>Filters</span>
                      <div className={styles.filterItem}>
                        <span className={styles.filterDot} />
                        Price Range
                      </div>
                      <div className={styles.filterItem}>
                        <span className={styles.filterDot} />
                        Rating
                      </div>
                      <div className={styles.filterItem}>
                        <span className={styles.filterDot} />
                        Availability
                      </div>
                    </div>
                  </div>

                  {/* Product Grid */}
                  <div className={styles.productGrid}>
                    <div className={styles.productCard}>
                      <div className={styles.productImage}>
                        <div className={styles.productBadge}>New</div>
                      </div>
                      <div className={styles.productInfo}>
                        <span className={styles.productName}>Wireless Headphones</span>
                        <span className={styles.productPrice}>$199</span>
                        <div className={styles.productRating}>★★★★★</div>
                      </div>
                    </div>

                    <div className={styles.productCard}>
                      <div className={styles.productImage}>
                        <div className={styles.productBadge}>Sale</div>
                      </div>
                      <div className={styles.productInfo}>
                        <span className={styles.productName}>Smart Watch Pro</span>
                        <span className={styles.productPrice}>$249</span>
                        <div className={styles.productRating}>★★★★☆</div>
                      </div>
                    </div>

                    <div className={styles.productCard}>
                      <div className={styles.productImage} />
                      <div className={styles.productInfo}>
                        <span className={styles.productName}>Wireless Speaker</span>
                        <span className={styles.productPrice}>$89</span>
                        <div className={styles.productRating}>★★★★★</div>
                      </div>
                    </div>

                    <div className={styles.productCard}>
                      <div className={styles.productImage} />
                      <div className={styles.productInfo}>
                        <span className={styles.productName}>Laptop Stand</span>
                        <span className={styles.productPrice}>$45</span>
                        <div className={styles.productRating}>★★★★☆</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Shop Footer */}
                <div className={styles.shopFooter}>
                  <span className={styles.footerText}>Showing 1-4 of 24 products</span>
                  <div className={styles.footerPagination}>
                    <span className={styles.paginationItem}>←</span>
                    <span className={`${styles.paginationItem} ${styles.active}`}>1</span>
                    <span className={styles.paginationItem}>2</span>
                    <span className={styles.paginationItem}>3</span>
                    <span className={styles.paginationItem}>→</span>
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
                <span className={styles.badgeIcon}>🛒</span>
                <span className={styles.badgeText}>3 Orders Today</span>
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
                <span className={styles.badgeIcon}>⭐</span>
                <span className={styles.badgeText}>4.8 Avg Rating</span>
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
                <span className={styles.badgeIcon}>🚀</span>
                <span className={styles.badgeText}>$12.4K Revenue</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}