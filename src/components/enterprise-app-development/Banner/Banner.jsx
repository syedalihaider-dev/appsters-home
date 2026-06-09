"use client"
import React, { useState } from 'react'
import { SITE_PHONE as PHONE_NUMBER } from '@/app/constants'
import { useRouter } from 'next/navigation'
import {
  FaCheck,
  FaLock,
  FaArrowRight,
  FaPhoneAlt,
  FaStar,
  FaClock,
} from 'react-icons/fa'
import styles from './Banner.module.css'

const FEATURE_BADGES = [
  'No commitment required',
  'Reply within 4 hours',
  'NDA signed on request',
  'Launch in as little as 12 weeks',
]

const STATS = [
  { number: '3,000+', label: 'APPS DELIVERED' },
  { number: '40+', label: 'INDUSTRIES' },
  { number: '450+', label: 'HAPPY CLIENTS' },
  { number: '12 Wks', label: 'AVG. LAUNCH' },
]

const SERVICE_OPTIONS = [
  'Enterprise iOS App',
  'Enterprise Android App',
  'Cross-Platform Enterprise App',
  'Enterprise SaaS App',
  'AI-Powered Enterprise App',
]

const BUDGET_OPTIONS = [
  '$25k - $50k',
  '$50k - $100k',
  '$100k - $250k',
  '$250k+',
  'Custom Enterprise',
]

const TIMELINE_OPTIONS = ['Immediately', '1-3 Months', '3+ Months']

export default function Banner() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    description: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/lp-enterprise-app-development', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        router.push('/lp/enterprise-app-development/thank-you')
      } else {
        setIsSubmitting(false)
      }
    } catch (err) {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={styles.bannerSection} id="top">
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className="container">
        <div className="row align-items-center">
          {/* LEFT — content */}
          <div className="col-lg-7">
            <div className={styles.contentWrapper}>
              <div className={styles.badge}>
                <span className={styles.badgeDot} />
                RATED #1 ON CLUTCH &amp; GOODFIRMS 2026
              </div>

              <h1 className={styles.heading}>
                Enterprise Mobile App Development for{' '}
                <span className={styles.highlight}>iOS</span>,{' '}
                <span className={styles.highlight}>Android</span> &amp;
                Cross-Platform
              </h1>

              <p className={styles.subheading}>
                From MVP to enterprise scale — we build secure, compliant, and
                AI-ready mobile apps trusted by CTOs and product leaders across
                40+ industries.
              </p>

              <div className={styles.btnGroup}>
                <a href="#contact" className={styles.primaryBtn}>
                  Get a Free Enterprise Estimate <FaArrowRight />
                </a>
                <a href={`tel:${PHONE_NUMBER}`} className={styles.phoneBtn}>
                  <FaPhoneAlt /> {PHONE_NUMBER}
                </a>
              </div>

              <ul className={styles.featureBadges}>
                {FEATURE_BADGES.map((f) => (
                  <li key={f}>
                    <span className={styles.featureTick}>
                      <FaCheck />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className={styles.statsCard}>
                {STATS.map((s) => (
                  <div key={s.label} className={styles.statItem}>
                    <div className={styles.statNumber}>{s.number}</div>
                    <div className={styles.statLabel}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="col-lg-5">
            <div className={styles.formWrapper}>
              <div className={styles.formGlow} aria-hidden="true" />
              <div className={styles.formHead}>
                <div className={styles.formEyebrow}>
                  <span className={styles.badgeDot} /> FREE ESTIMATE
                </div>
                <h3 className={styles.formTitle}>
                  Tell us about your enterprise project
                </h3>
                <p className={styles.formSubtitle}>
                  Get a free consultation &amp; cost estimate — no strings
                  attached.
                </p>
              </div>

              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Work Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      What Are You Building?
                    </option>
                    {SERVICE_OPTIONS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Estimated Budget
                    </option>
                    {BUDGET_OPTIONS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Project Timeline
                    </option>
                    {TIMELINE_OPTIONS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <textarea
                    name="description"
                    placeholder="Brief project description (optional)"
                    value={formData.description}
                    onChange={handleChange}
                    rows={3}
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending…' : 'Get My Free Enterprise Estimate'}
                  {!isSubmitting && <FaArrowRight />}
                </button>

                <div className={styles.formFoot}>
                  <FaLock /> We sign NDAs to protect your idea. 100%
                  confidential.
                </div>
              </form>

              <div className={styles.trustBadges}>
                <span className={styles.trustItem}>
                  <b>Clutch</b> 4.9/5
                  <span className={styles.stars}>
                    <FaStar />
                  </span>
                </span>
                <span className={styles.trustItem}>
                  <b>GoodFirms</b> 4.8/5
                  <span className={styles.stars}>
                    <FaStar />
                  </span>
                </span>
                <span className={styles.trustItem}>
                  <b>1,200+</b> Reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
