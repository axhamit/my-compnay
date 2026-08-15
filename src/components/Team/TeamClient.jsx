// src/components/Team/TeamClient.jsx
'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import styles from './Team.module.css'

const teamMembers = [
  {
    id: 1,
    name: 'Amit',
    role: 'Founder',
    type: 'core',
    bio: 'Building products that make businesses better',
    image: '/founder/amit.jpg',
    linkedin: '#',
    twitter: '#',
    expertise: ['Product Strategy', 'Digital Innovation']
  },
  {
    id: 2,
    name: 'Priya',
    role: 'Product Designer',
    type: 'partner',
    bio: 'Creating intuitive, beautiful user experiences',
    image: null,
    linkedin: '#',
    dribbble: '#',
    expertise: ['UI/UX Design', 'Design Systems']
  },
  {
    id: 3,
    name: 'Rahul',
    role: 'Senior Developer',
    type: 'partner',
    bio: 'Building scalable, reliable digital products',
    image: null,
    linkedin: '#',
    github: '#',
    expertise: ['Full Stack', 'System Architecture']
  },
  {
    id: 4,
    name: 'Ananya',
    role: 'Growth & Marketing',
    type: 'partner',
    bio: 'Driving growth through strategic marketing',
    image: null,
    linkedin: '#',
    twitter: '#',
    expertise: ['Digital Strategy', 'Brand Growth']
  }
]

export default function TeamClient() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const coreTeam = teamMembers.filter(m => m.type === 'core')
  const partners = teamMembers.filter(m => m.type === 'partner')

  return (
    <section className={styles.team} ref={ref}>
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.badge}>The Team</span>
          <h2 className={styles.heading}>
            The People Behind
            <span className={styles.headingHighlight}> The Work</span>
          </h2>
          <p className={styles.subtitle}>
            A passionate team of designers, engineers, and strategists 
            dedicated to building exceptional digital products.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div 
          className={styles.grid}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className={`${styles.teamCard} ${member.type === 'partner' ? styles.partner : ''}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ y: -4 }}
            >
              {/* Member Photo */}
              <div className={styles.photoWrapper}>
                <div className={styles.photoFrame}>
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className={styles.memberImage}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  ) : (
                    <div className={styles.photoPlaceholder}>
                      <span className={styles.placeholderIcon}>👤</span>
                      <span className={styles.placeholderName}>{member.name}</span>
                    </div>
                  )}
                  
                  {/* Role Badge */}
                  <div className={styles.roleBadge}>
                    {member.type === 'core' ? 'Core Team' : 'Partner'}
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <p className={styles.memberRole}>{member.role}</p>
                <p className={styles.memberBio}>{member.bio}</p>

                {/* Expertise Tags */}
                <div className={styles.expertiseTags}>
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className={styles.expertiseTag}>
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className={styles.socialLinks}>
                  {member.linkedin && (
                    <a href={member.linkedin} className={styles.socialLink} aria-label="LinkedIn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  )}
                  {member.twitter && (
                    <a href={member.twitter} className={styles.socialLink} aria-label="Twitter">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  )}
                  {member.github && (
                    <a href={member.github} className={styles.socialLink} aria-label="GitHub">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.399s2.04.132 3 .399c2.292-1.552 3.3-1.23 3.3-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.694.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                      </svg>
                    </a>
                  )}
                  {member.dribbble && (
                    <a href={member.dribbble} className={styles.socialLink} aria-label="Dribbble">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308a10.174 10.174 0 004.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4a10.143 10.143 0 006.29 2.166c1.42 0 2.77-.29 4.006-.816zM4.67 16.788c.26-.42 3.04-4.89 8.27-6.37.025-.01.05-.02.075-.03-.13-.29-.27-.58-.42-.87-5.22 1.56-10.29 1.49-10.76 1.49-.01.09-.02.18-.02.27 0 2.33.94 4.46 2.48 6.02a.28.28 0 00.02.01c.01 0 .01 0 .02-.01l.03-.02c.11-.08.23-.16.34-.26zm.66-6.28c.46 0 4.56.03 8.95-1.19-1.6-2.85-3.34-5.27-3.64-5.67a10.18 10.18 0 00-5.31 6.86zm7.82-7.12c.35.48 2.16 2.98 3.96 5.92 3.49-.99 5.15-2.27 5.45-2.53a10.16 10.16 0 00-9.41-3.39z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note about Partners */}
        <motion.div 
          className={styles.note}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <span className={styles.noteIcon}>💼</span>
          <p className={styles.noteText}>
            <strong>Partners & Freelancers</strong> — We work with a talented network 
            of designers, developers, and strategists to bring you the best expertise 
            for every project.
          </p>
        </motion.div>
      </div>
    </section>
  )
}