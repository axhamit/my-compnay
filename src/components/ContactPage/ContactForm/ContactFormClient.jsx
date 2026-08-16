// src/components/ContactForm/ContactFormClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import styles from './ContactForm.module.css'

export default function ContactFormClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    details: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('')

  const projectTypes = [
    'Website',
    'Web Application',
    'Mobile App',
    'Custom Software',
    'E-commerce',
    'UI/UX Design',
    'Digital Marketing',
    'Other'
  ]

  const budgets = [
    '₹50K–₹1L',
    '₹1L–₹3L',
    '₹3L–₹5L',
    '₹5L+',
    'Not sure'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear status when user starts typing again
    if (submitStatus) setSubmitStatus(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          projectType: '',
          budget: '',
          details: ''
        })
        // Scroll to success message
        document.querySelector(`.${styles.successMessage}`)?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        })
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={styles.contactForm} ref={ref}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column - Contact Info */}
          <motion.div 
            className={styles.leftColumn}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className={styles.sectionTitle}>Let's Talk</h2>
            <p className={styles.sectionDescription}>
              Tell us about your project. We'll get back to you within 1 business day.
            </p>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <div>
                  <span className={styles.contactLabel}>Email</span>
                  <a href="mailto:hello@company.com" className={styles.contactValue}>
                    hello@company.com
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className={styles.contactLabel}>Location</span>
                  <span className={styles.contactValue}>Bengaluru, India</span>
                </div>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <span className={styles.socialLabel}>Connect with us</span>
              <div className={styles.socialIcons}>
                <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className={styles.socialIcon} aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="#" className={styles.socialIcon} aria-label="GitHub">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.399s2.04.132 3 .399c2.292-1.552 3.3-1.23 3.3-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.694.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            className={styles.rightColumn}
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className={styles.form}>
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Thank you!</strong>
                    <p>Your inquiry has been sent successfully. We'll get back to you within 1 business day.</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className={styles.errorMessage}>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <strong>Something went wrong.</strong>
                    <p>{errorMessage}</p>
                  </div>
                </div>
              )}

              {/* Name & Company */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Your Name <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="John Doe"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="company" className={styles.label}>
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Company name"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>
                    Email <span className={styles.required}>*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="john@company.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="+91 XXXXX XXXXX"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Project Type */}
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  What do you need? <span className={styles.required}>*</span>
                </label>
                <div className={styles.optionsGrid}>
                  {projectTypes.map((type) => (
                    <label key={type} className={styles.optionLabel}>
                      <input
                        type="radio"
                        name="projectType"
                        value={type}
                        checked={formData.projectType === type}
                        onChange={handleChange}
                        className={styles.radioInput}
                        disabled={isSubmitting}
                      />
                      <span className={styles.optionText}>{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Budget */}
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  Budget
                </label>
                <div className={styles.optionsGrid}>
                  {budgets.map((budget) => (
                    <label key={budget} className={styles.optionLabel}>
                      <input
                        type="radio"
                        name="budget"
                        value={budget}
                        checked={formData.budget === budget}
                        onChange={handleChange}
                        className={styles.radioInput}
                        disabled={isSubmitting}
                      />
                      <span className={styles.optionText}>{budget}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className={styles.formGroup}>
                <label htmlFor="details" className={styles.label}>
                  Project Details <span className={styles.required}>*</span>
                </label>
                <textarea
                  id="details"
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  className={styles.textarea}
                  placeholder="Tell us about your project, goals and requirements..."
                  rows={4}
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className={styles.spinner} />
                    Sending...
                  </>
                ) : (
                  'Send Project Inquiry →'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}