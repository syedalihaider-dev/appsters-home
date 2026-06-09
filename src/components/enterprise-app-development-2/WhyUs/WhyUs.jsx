"use client"
import React from 'react'

const CARDS = [
  { title: 'Security-First Architecture', desc: 'Every app is built with enterprise-grade encryption, role-based access, and vulnerability testing.', icon: (<><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="M12 11v3M12 8h.01" /></>) },
  { title: 'Dedicated Project Manager', desc: 'A senior PM assigned to your project from day one — with daily standups and Slack access.', icon: (<><circle cx="9" cy="8" r="3.2" /><path d="M3.5 19a5.5 5.5 0 0111 0" /><path d="M16 7.5a3 3 0 010 5M18.5 5a6 6 0 010 10" /></>) },
  { title: 'Scalable from Day One', desc: 'Architecture designed to handle 1M+ users without performance degradation.', icon: (<><path d="M3 17l5-5 4 4 8-8" /><path d="M16 8h4v4" /></>) },
  { title: 'Full IP Ownership', desc: 'You own 100% of the code, designs, and assets. Always.', icon: (<><path d="M9 12l2 2 4-4" /><path d="M12 3a9 9 0 100 18 9 9 0 000-18z" /></>) },
  { title: 'Compliance Expertise', desc: 'HIPAA, PCI-DSS, SOC 2, GDPR — we know enterprise compliance inside out.', icon: (<><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></>) },
  { title: 'Post-Launch Support', desc: 'Ongoing maintenance, monitoring, and feature development after launch.', icon: (<><path d="M4 12a8 8 0 018-8 8 8 0 018 8 8 8 0 01-8 8" /><path d="M12 8v4l3 2" /></>) },
]

export default function WhyUs() {
  return (
    <section className="pad band" id="why" data-screen-label="Why Appsters">
      <div className="container">
        <div className="sec-head center reveal">
          <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="dot" /> Why Appsters</div>
          <h2 className="h-sec">Why enterprises choose <span className="neon-text">Appsters</span>.</h2>
          <p className="lede">Built for the standards your security, legal, and procurement teams will hold us to.</p>
        </div>
        <div className="row g-4 grid-neon" style={{ marginTop: 'clamp(34px,4vw,54px)' }}>
          {CARDS.map((c, i) => (
            <div className="col-12 col-md-6 col-lg-4" key={c.title}>
              <div className="card card-neon ncard reveal" data-anim="zoom-up" style={{ '--i': i % 3 }}>
                <span className="ic">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{c.icon}</svg>
                </span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
