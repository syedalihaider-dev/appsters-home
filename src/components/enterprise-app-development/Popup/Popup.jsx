"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FaTimes, FaLock, FaArrowRight } from 'react-icons/fa'
import styles from './Popup.module.css'

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

export default function Popup({ isOpen, onClose }) {
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

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

  if (!isOpen) return null

  return (
    <div
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pf-title"
      >
        <div className={styles.modalGlow} aria-hidden="true" />
        <button
          type="button"
          className={styles.close}
          aria-label="Close"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <div className={styles.head}>
          <div className={styles.eyebrow}>
            <span className={styles.dot} /> FREE ENTERPRISE ESTIMATE · NO
            COMMITMENT
          </div>
          <h3 id="pf-title" className={styles.title}>
            Let&apos;s scope your{' '}
            <span className={styles.highlight}>enterprise app</span>.
          </h3>
          <p className={styles.subtitle}>
            Tell us about your project — a senior solutions architect replies
            within 4 hours with a free estimate &amp; roadmap.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          <div className={styles.row2}>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Work email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <div className={styles.row2}>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                What are you building?
              </option>
              {SERVICE_OPTIONS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Estimated budget
              </option>
              {BUDGET_OPTIONS.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Project timeline
            </option>
            {TIMELINE_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          <textarea
            name="description"
            placeholder="Brief project description (optional)"
            value={formData.description}
            onChange={handleChange}
            rows={2}
          />
          <button
            type="submit"
            className={styles.submitBtn}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending…' : 'Get My Free Enterprise Estimate'}
            {!isSubmitting && <FaArrowRight />}
          </button>
          <div className={styles.foot}>
            <FaLock /> NDA signed before every discussion. 100% confidential.
          </div>
        </form>
      </div>
    </div>
  )
}
