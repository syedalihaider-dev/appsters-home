"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { SITE_EMAIL as EMAIL_ADDRESS, SITE_PHONE as PHONE_NUMBER } from "@/app/constants"
import {
  FaCheck,
  FaLock,
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
  FaComments,
  FaStar,
  FaClock,
} from 'react-icons/fa'
import styles from './ContactSection.module.css'

const ASSURANCES = [
  'A free architecture roadmap & ballpark estimate',
  'NDA signed before every discussion — 100% confidential',
  'A senior solutions architect replies within 4 hours',
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

export default function ContactSection() {
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
    <section className={styles.contactSection} id="contact">
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className={styles.contentWrapper}>
              <div className={styles.badge}>
                <span className={styles.badgeDot} /> FREE ENTERPRISE CONSULTATION
              </div>
              <h2 className={styles.heading}>
                Ready to Build Your{' '}
                <span className={styles.highlight}>Enterprise App</span>?
              </h2>
              <p className={styles.subheading}>
                Join 450+ companies who trusted Appsters with their most
                important product. Walk away with a clear scope, a realistic
                timeline, and an honest estimate.
              </p>

              <ul className={styles.assure}>
                {ASSURANCES.map((a) => (
                  <li key={a}>
                    <span className={styles.tick}>
                      <FaCheck />
                    </span>
                    {a}
                  </li>
                ))}
              </ul>

              <div className={styles.contactLinks}>
                <a href={`tel:${PHONE_NUMBER}`}>
                  <span className={styles.linkIcon}>
                    <FaPhoneAlt />
                  </span>
                  {PHONE_NUMBER}
                </a>
                <a href={`mailto:${EMAIL_ADDRESS}`}>
                  <span className={styles.linkIcon}>
                    <FaEnvelope />
                  </span>
                  {EMAIL_ADDRESS}
                </a>
                <button type="button" className="chat-btn chat">
                  <span className={styles.linkIcon}>
                    <FaComments />
                  </span>
                  Live Chat 24/7
                </button>
              </div>

              <div className={styles.trustBadges}>
                <span className={styles.trustItem}>
                  <b>Clutch</b> 4.9
                  <span className={styles.stars}>
                    <FaStar />
                  </span>
                </span>
                <span className={styles.trustItem}>
                  <b>GoodFirms</b> 4.8
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

          <div className="col-lg-6">
            <div className={styles.formWrapper}>
              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <div className={styles.inputGroup}>
                  <label htmlFor="c-name">
                    Full name <span className={styles.req}>*</span>
                  </label>
                  <input
                    id="c-name"
                    type="text"
                    name="name"
                    placeholder="Jordan Rivera"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="c-phone">
                    Phone number <span className={styles.req}>*</span>
                  </label>
                  <input
                    id="c-phone"
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="c-email">
                    Work email <span className={styles.req}>*</span>
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    name="email"
                    placeholder="jordan@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.row2}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="c-service">
                      What are you building? <span className={styles.req}>*</span>
                    </label>
                    <select
                      id="c-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      {SERVICE_OPTIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="c-budget">
                      Estimated budget <span className={styles.req}>*</span>
                    </label>
                    <select
                      id="c-budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select a range…
                      </option>
                      {BUDGET_OPTIONS.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="c-timeline">
                    Project timeline <span className={styles.req}>*</span>
                  </label>
                  <select
                    id="c-timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    {TIMELINE_OPTIONS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="c-desc">Brief project description</label>
                  <textarea
                    id="c-desc"
                    name="description"
                    placeholder="What do you want to build, who is it for, and which systems must it integrate with?"
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
                  <FaLock /> NDA signed before every discussion. 100%
                  confidential.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
