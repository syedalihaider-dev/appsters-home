"use client"
import React, { useState } from 'react'
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

export default function Banner() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    name: '', cc: '+1', phone: '', email: '', service: '', budget: '', timeline: '', desc: '',
  })

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
    const ok = await submitLead({ ...formData, source: 'hero' }, router)
    if (!ok) { setIsSubmitting(false); setErrors({ form: 'Something went wrong. Please try again.' }) }
  }

  return (
    <section className="hero" data-screen-label="Hero">
      <div className="container">
        <div className="row hero__row g-4 g-lg-5">
          <div className="col-12 col-lg-7">
            <div className="reveal in eyebrow"><span className="dot" /> Enterprise app development · iOS · Android · Cross-platform</div>
            <h1 className="reveal in" data-d="1">
              Enterprise Mobile App Development Built for <span className="glow">Scale, Security</span> &amp; <span className="glowp">Speed</span>
            </h1>
            <p className="reveal in sub" data-d="2">
              We engineer custom enterprise mobile apps for iOS, Android &amp; cross-platform — built to handle millions of users, pass compliance audits, and integrate with your existing tech stack.
            </p>
            <div className="reveal in actions" data-d="3">
              <a className="btn btn-neon" href="#contact">Get My Free Enterprise Estimate <ArrowIcon /></a>
              <a className="btn btn-ghost" href="#cases">See Enterprise Work</a>
            </div>
            <div className="reveal in ent-trust" data-d="3"><span className="stars">★★★★★</span> Rated <b>#1</b> on Clutch &amp; GoodFirms 2026</div>
            <div className="row g-3 ent-statbar reveal in" data-d="4">
              {[['3,000+', 'Apps delivered'], ['40+', 'Industries served'], ['450+', 'Happy clients'], ['12 Wks', 'Avg. launch timeline']].map((s) => (
                <div className="col-6 col-md-3" key={s[1]}>
                  <div className="s"><div className="n">{s[0]}</div><div className="l">{s[1]}</div></div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="reveal in hero-form-wrap" data-anim="right">
              <div className="card hero-form">
                <div className="hero-form__glow" aria-hidden="true" />
                <div className="hero-form__head">
                  <div className="eyebrow"><span className="dot" /> Free enterprise estimate</div>
                  <h3>Scope your enterprise app</h3>
                  <p>Tell us what you&apos;re building — a senior solutions architect replies within 4 hours.</p>
                </div>
                <form className="hf" onSubmit={onSubmit} noValidate>
                  <div className={`field${errors.name ? ' invalid' : ''}`}>
                    <input className="input" name="name" type="text" placeholder="Full name" value={formData.name} onChange={onChange} aria-invalid={!!errors.name} />
                    {errors.name && <span className="fld-err">{errors.name}</span>}
                  </div>
                  <div className={`field phone${errors.phone ? ' invalid' : ''}`}>
                    <div className="ccwrap">
                      <select className="cc" name="cc" aria-label="Country code" value={formData.cc} onChange={onChange}>
                        {COUNTRIES.map((c, i) => (<option key={i} value={c[1]}>{c[0]}  {c[1]}</option>))}
                      </select>
                      <Chevron size={13} />
                    </div>
                    <input className="input" name="phone" type="tel" inputMode="tel" placeholder="Phone number" value={formData.phone} onChange={onChange} aria-invalid={!!errors.phone} />
                  </div>
                  {errors.phone && <span className="fld-err">{errors.phone}</span>}
                  <div className={`field${errors.email ? ' invalid' : ''}`}>
                    <input className="input" name="email" type="email" placeholder="Work email" value={formData.email} onChange={onChange} aria-invalid={!!errors.email} />
                    {errors.email && <span className="fld-err">{errors.email}</span>}
                  </div>
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
          </div>
        </div>
      </div>
    </section>
  )
}
