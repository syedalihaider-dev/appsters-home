"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  SERVICE_OPTIONS,
  BUDGET_OPTIONS,
  Chevron,
  ArrowIcon,
  LockIcon,
  validateLead,
  submitLead,
} from '@/components/enterprise-app-development-2/_shared/formOptions'

export default function ContactSection() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', budget: '', idea: '',
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setFormData((p) => ({ ...p, [name]: value }))
    if (errors[name]) setErrors((p) => ({ ...p, [name]: undefined }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return
    const errs = validateLead(formData, ['name', 'email', 'phone', 'service', 'budget', 'idea'])
    if (Object.keys(errs).length) { setErrors(errs); return }
    setIsSubmitting(true)
    const ok = await submitLead({ ...formData, description: formData.idea, source: 'final-cta' }, router)
    if (!ok) { setIsSubmitting(false); setErrors({ form: 'Something went wrong. Please try again.' }) }
  }

  return (
    <section className="final pad" id="contact" data-screen-label="Final CTA">
      <div className="container">
        <div className="row final__grid g-4 g-lg-5">
          <div className="col-12 col-lg-6">
            <div className="reveal" data-anim="left">
              <div className="eyebrow"><span className="dot" /> Free enterprise consultation</div>
              <h2>Ready to Build Your <span className="neon-text">Enterprise App</span>?</h2>
              <p className="sub">Join 450+ companies who trusted Appsters with their most important product. Walk away with a clear scope, a realistic timeline, and an honest estimate.</p>
              <ul className="assure">
                <li><span className="tk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg></span> A free architecture roadmap &amp; ballpark estimate</li>
                <li><span className="tk"><LockIcon /></span> NDA signed before every discussion — 100% confidential</li>
                <li><span className="tk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg></span> A senior solutions architect replies within 4 hours</li>
              </ul>
              <div className="final__contact">
                <a href="tel:+18557991171"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" /></svg></span> +1 (855) 799-1171</a>
                <a href="mailto:support@appsters.io"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M4 7l8 6 8-6" /></svg></span> support@appsters.io</a>
                <span className="chat-btn chat" style={{ cursor: 'pointer' }}><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 01-11.5 7.2L4 20l.9-5.3A8 8 0 1121 12z" /></svg></span> Live Chat 24/7</span>
              </div>
              <div className="final__badges">
                <span className="b"><b>Clutch</b> 4.9<span className="stars">★★★★★</span></span>
                <span className="b"><b>GoodFirms</b> 4.8<span className="stars">★★★★★</span></span>
                <span className="b"><b>1,200+</b> Reviews</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="card fform hf reveal" data-anim="right">
              <form onSubmit={onSubmit} noValidate>
                <div className={`field${errors.name ? ' invalid' : ''}`}>
                  <label className="lab" htmlFor="c-name">Full name <span className="req">*</span></label>
                  <input className="input" id="c-name" name="name" type="text" placeholder="Jordan Rivera" value={formData.name} onChange={onChange} aria-invalid={!!errors.name} />
                  {errors.name && <span className="fld-err">{errors.name}</span>}
                </div>
                <div className={`field${errors.phone ? ' invalid' : ''}`}>
                  <label className="lab" htmlFor="c-phone">Phone number <span className="req">*</span></label>
                  <input className="input" id="c-phone" name="phone" type="tel" inputMode="tel" placeholder="+1 (555) 000-0000" value={formData.phone} onChange={onChange} aria-invalid={!!errors.phone} />
                  {errors.phone && <span className="fld-err">{errors.phone}</span>}
                </div>
                <div className={`field${errors.email ? ' invalid' : ''}`}>
                  <label className="lab" htmlFor="c-email">Work email <span className="req">*</span></label>
                  <input className="input" id="c-email" name="email" type="email" placeholder="jordan@company.com" value={formData.email} onChange={onChange} aria-invalid={!!errors.email} />
                  {errors.email && <span className="fld-err">{errors.email}</span>}
                </div>
                <div className={`field${errors.service ? ' invalid' : ''}`}>
                  <label className="lab" htmlFor="c-service">What are you building? <span className="req">*</span></label>
                  <div className="selwrap">
                    <select className="select" id="c-service" name="service" value={formData.service} onChange={onChange} required>
                      <option value="" disabled>Select…</option>
                      {SERVICE_OPTIONS.map((o) => (<option key={o}>{o}</option>))}
                    </select>
                    <Chevron />
                  </div>
                  {errors.service && <span className="fld-err">{errors.service}</span>}
                </div>
                <div className={`field${errors.budget ? ' invalid' : ''}`}>
                  <label className="lab" htmlFor="c-budget">Estimated budget <span className="req">*</span></label>
                  <div className="selwrap">
                    <select className="select" id="c-budget" name="budget" value={formData.budget} onChange={onChange} required>
                      <option value="" disabled>Select a range…</option>
                      {BUDGET_OPTIONS.map((o) => (<option key={o}>{o}</option>))}
                    </select>
                    <Chevron />
                  </div>
                  {errors.budget && <span className="fld-err">{errors.budget}</span>}
                </div>
                <div className={`field${errors.idea ? ' invalid' : ''}`}>
                  <label className="lab" htmlFor="c-idea">Brief project description <span className="req">*</span></label>
                  <textarea id="c-idea" name="idea" placeholder="What do you want to build, who is it for, and which systems must it integrate with?" value={formData.idea} onChange={onChange} aria-invalid={!!errors.idea} />
                  {errors.idea && <span className="fld-err">{errors.idea}</span>}
                </div>
                {errors.form && <span className="fld-err">{errors.form}</span>}
                <button className="btn btn-neon submit pulse" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending…' : 'Get My Free Enterprise Estimate'} {!isSubmitting && <ArrowIcon />}
                </button>
                <div className="foot"><LockIcon /> NDA signed before every discussion. 100% confidential.</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
