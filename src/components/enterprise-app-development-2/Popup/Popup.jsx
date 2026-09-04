"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {
  COUNTRIES,
  SERVICE_OPTIONS,
  BUDGET_OPTIONS,
  TIMELINE_OPTIONS,
  Chevron,
  ArrowIcon,
  LockIcon,
  validateLead,
  submitLead,
} from '@/components/enterprise-app-development-2/_shared/formOptions'

export default function Popup({ isOpen, onClose }) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    name: '', email: '', cc: '+1', phone: '', service: '', budget: '', timeline: '', desc: '',
  })

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && isOpen) onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  const onChange = (e) => {
    const { name, value } = e.target
    setFormData((p) => ({ ...p, [name]: value }))
    if (errors[name]) setErrors((p) => ({ ...p, [name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return
    const errs = validateLead(formData, ['name', 'email', 'phone', 'service', 'budget', 'timeline'])
    if (Object.keys(errs).length) { setErrors(errs); return }
    setIsSubmitting(true)
    const ok = await submitLead({ ...formData, source: 'popup' }, router)
    if (!ok) { setIsSubmitting(false); setErrors({ form: 'Something went wrong. Please try again.' }) }
  }

  if (!isOpen) return null

  return (
    <div className="eapp2-pf-overlay" id="pfOverlay" onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="card eapp2-pf-modal hf" role="dialog" aria-modal="true" aria-labelledby="pfTitle">
        <div className="eapp2-pf-modal__glow" aria-hidden="true" />
        <button className="eapp2-pf-close" aria-label="Close" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
        <div className="eapp2-pf-head">
          <div className="eyebrow"><span className="dot" /> Free enterprise estimate · No commitment</div>
          <h3 id="pfTitle">Let&apos;s scope your <span className="neon-text">enterprise app</span>.</h3>
          <p>Tell us about your project — a senior solutions architect replies within 4 hours with a free estimate &amp; roadmap.</p>
        </div>
        <form className="hf" onSubmit={onSubmit} noValidate>
          <div className="row2">
            <div className={`field${errors.name ? ' invalid' : ''}`}>
              <input className="input" name="name" type="text" placeholder="Full name" value={formData.name} onChange={onChange} aria-invalid={!!errors.name} />
              {errors.name && <span className="fld-err">{errors.name}</span>}
            </div>
            <div className={`field${errors.email ? ' invalid' : ''}`}>
              <input className="input" name="email" type="email" placeholder="Work email" value={formData.email} onChange={onChange} aria-invalid={!!errors.email} />
              {errors.email && <span className="fld-err">{errors.email}</span>}
            </div>
          </div>
          <div className={`field phone${errors.phone ? ' invalid' : ''}`}>
            <div className="ccwrap">
              <select className="cc" name="cc" aria-label="Country code" value={formData.cc} onChange={onChange}>
                {COUNTRIES.map((c, i) => (<option key={i} value={c[1]}>{c[0]}  {c[1]}</option>))}
              </select>
              <Chevron size={13} />
            </div>
            <input className="input" name="phone" type="number" inputMode="tel" placeholder="Phone number" value={formData.phone} onChange={onChange} aria-invalid={!!errors.phone} />
          </div>
          {errors.phone && <span className="fld-err">{errors.phone}</span>}
          <div className="row2">
            <div className={`field selwrap${errors.service ? ' invalid' : ''}`}>
              <select className="select" name="service" value={formData.service} onChange={onChange} required>
                <option value="" disabled>What are you building?</option>
                {SERVICE_OPTIONS.map((o) => (<option key={o}>{o}</option>))}
              </select>
              <Chevron />
            </div>
            <div className={`field selwrap${errors.budget ? ' invalid' : ''}`}>
              <select className="select" name="budget" value={formData.budget} onChange={onChange} required>
                <option value="" disabled>Estimated budget</option>
                {BUDGET_OPTIONS.map((o) => (<option key={o}>{o}</option>))}
              </select>
              <Chevron />
            </div>
          </div>
          <div className={`field selwrap${errors.timeline ? ' invalid' : ''}`}>
            <select className="select" name="timeline" value={formData.timeline} onChange={onChange} required>
              <option value="" disabled>Project timeline</option>
              {TIMELINE_OPTIONS.map((o) => (<option key={o}>{o}</option>))}
            </select>
            <Chevron />
          </div>
          <div className="field"><textarea className="input" name="desc" placeholder="Brief project description (optional)" value={formData.desc} onChange={onChange} /></div>
          {errors.form && <span className="fld-err">{errors.form}</span>}
          <button className="btn btn-neon submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending…' : 'Get My Free Enterprise Estimate'} {!isSubmitting && <ArrowIcon />}
          </button>
          <div className="hf__foot"><LockIcon /> NDA signed before every discussion. 100% confidential.</div>
        </form>
      </div>
    </div>
  )
}
