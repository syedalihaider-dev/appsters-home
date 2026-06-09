"use client"
import React from 'react'

const SERVICES = [
  {
    title: 'Enterprise iOS & Android Apps',
    desc: 'Native enterprise apps built for corporate security, MDM integration, and large user bases.',
    tag: 'Native · MDM-ready',
    icon: (<><rect x="6" y="2.5" width="12" height="19" rx="3" /><path d="M11 18.5h2" /></>),
  },
  {
    title: 'Cross-Platform Enterprise Apps',
    desc: 'React Native & Flutter solutions that work across all devices with single-codebase efficiency.',
    tag: 'React Native · Flutter',
    icon: (<><path d="M8 3H5a2 2 0 00-2 2v3M16 3h3a2 2 0 012 2v3M8 21H5a2 2 0 01-2-2v-3M16 21h3a2 2 0 002-2v-3" /><rect x="8.5" y="8.5" width="7" height="7" rx="1.5" /></>),
  },
  {
    title: 'Enterprise SaaS Mobile Apps',
    desc: 'Mobile extensions of your existing SaaS products, built for enterprise user workflows.',
    tag: 'SaaS · Workflows',
    icon: (<><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" /></>),
  },
  {
    title: 'AI-Powered Enterprise Apps',
    desc: 'ChatGPT, NLP, computer vision, and predictive analytics integrated into enterprise-grade mobile solutions.',
    tag: 'GPT · NLP · Vision',
    icon: (<><rect x="5" y="7" width="14" height="12" rx="2.5" /><path d="M9 7V4.5M15 7V4.5M9 13h.01M15 13h.01M9.5 16.5h5" /><path d="M2.5 11v3M21.5 11v3" /></>),
  },
  {
    title: 'Legacy System Integration',
    desc: 'We connect your new mobile app to your existing ERP, CRM, and enterprise infrastructure.',
    tag: 'ERP · CRM · APIs',
    icon: (<><path d="M7 8L3 12l4 4M17 8l4 4-4 4" /><path d="M14 4l-4 16" /></>),
  },
  {
    title: 'Compliance-Ready Development',
    desc: 'HIPAA, PCI-DSS, SOC 2, GDPR compliant apps built with enterprise security from day one.',
    tag: 'HIPAA · SOC 2 · GDPR',
    icon: (<><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="M9 12l2 2 4-4" /></>),
  },
]

export default function IndustryServices() {
  return (
    <section className="pad" id="build" data-screen-label="What We Build">
      <div className="container">
        <div className="sec-head center reveal">
          <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="dot" /> Enterprise capabilities</div>
          <h2 className="h-sec">What we build for <span className="neon-text">enterprise</span>.</h2>
          <p className="lede">From native flagship apps to AI-powered platforms — engineered for corporate security, scale, and the systems you already run.</p>
        </div>
        <div className="row g-4 grid-neon" style={{ marginTop: 'clamp(34px,4vw,54px)' }}>
          {SERVICES.map((s, i) => (
            <div className="col-12 col-md-6 col-lg-4" key={s.title}>
              <article className="card card-neon ncard reveal" data-anim="zoom-up" style={{ '--i': i % 3 }}>
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg>
                </span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="tag">{s.tag}</span>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
