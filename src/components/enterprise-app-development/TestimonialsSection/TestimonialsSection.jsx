"use client"
import React from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import styles from './TestimonialsSection.module.css'

const TESTIMONIALS = [
  {
    quote:
      "Appsters shipped a payments app that's now processing nine figures a year — and it passed every audit our compliance team threw at it.",
    name: 'Michael Kern',
    role: 'CEO, NovaPay',
    initials: 'MK',
  },
  {
    quote:
      'HIPAA-ready from day one, integrated cleanly with our records system, and delivered on time. They understood healthcare better than our last vendor.',
    name: 'Dr. Sarah Rahman',
    role: 'MediConnect',
    initials: 'SR',
  },
  {
    quote:
      'Our logistics app scaled to hundreds of thousands of drivers without a hiccup. The architecture they designed just keeps holding.',
    name: 'Alsha Thornton',
    role: 'CTO, LogiTrack',
    initials: 'AT',
  },
  {
    quote:
      'Transparent, documented, and genuinely senior. It felt like an in-house enterprise team — not an agency. We own every line of it.',
    name: 'Ryan Patel',
    role: 'PropNest',
    initials: 'RP',
  },
]

export default function TestimonialsSection() {
  return (
    <section className={styles.testimonialsSection} id="testimonials">
      <div className="container">
        <div className={styles.sectionHead}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} /> TRUSTED BY ENTERPRISE LEADERS
          </div>
          <h2 className={styles.sectionTitle}>
            The people who signed off on the build
          </h2>
        </div>

        <div className="row">
          {TESTIMONIALS.map((t) => (
            <div className="col-lg-6" key={t.name}>
              <figure className={styles.card}>
                <span className={styles.quoteMark}>
                  <FaQuoteLeft />
                </span>
                <div className={styles.stars}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <blockquote className={styles.quote}>{t.quote}</blockquote>
                <figcaption className={styles.who}>
                  <span className={styles.avatar}>{t.initials}</span>
                  <span>
                    <span className={styles.name}>{t.name}</span>
                    <span className={styles.role}>{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
