"use client"
import React from 'react'

const STEPS = [
  { t: 'Discovery & Enterprise Requirements', p: 'We map goals, stakeholders, and system constraints to lock the right scope.', w: 'Week 1', icon: (<><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></>) },
  { t: 'Security Architecture Planning', p: 'Threat modeling, encryption strategy, and access controls defined up front.', w: 'Week 1–2', icon: (<><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="M9 12l2 2 4-4" /></>) },
  { t: 'UI/UX Design & Prototyping', p: 'Clickable prototypes & enterprise UI you approve before a line of code.', w: 'Week 2–3', icon: (<><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 7h8M8 11h8M8 15h5" /></>) },
  { t: 'Scalable Backend Architecture', p: 'Cloud infrastructure designed for millions of users from day one.', w: 'Week 3–4', icon: (<><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" /></>) },
  { t: 'Agile Development — 2-Week Sprints', p: 'Native & cross-platform builds shipped in fast, visible sprints.', w: 'Week 4–9', icon: (<><path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" /></>) },
  { t: 'Enterprise QA & Penetration Testing', p: 'Real-device testing, load testing, and full security penetration audits.', w: 'Week 9–10', icon: (<><path d="M9 12l2 2 4-4" /><path d="M12 3a9 9 0 100 18 9 9 0 000-18z" /></>) },
  { t: 'App Store & Enterprise Deployment', p: 'Public store submission plus private MDM & enterprise distribution.', w: 'Week 11–12', icon: (<><path d="M5 19l4-1 9-9a2.8 2.8 0 00-4-4l-9 9-1 4z" /><path d="M14 6l4 4" /></>) },
  { t: 'Dedicated Post-Launch Support', p: 'Monitoring, maintenance, and a roadmap for ongoing feature development.', w: 'Ongoing', icon: (<><path d="M4 12a8 8 0 018-8 8 8 0 018 8 8 8 0 01-8 8" /><path d="M12 8v4l3 2" /></>) },
]

export default function ProcessSection() {
  return (
    <section className="pad" id="process" data-screen-label="Process">
      <div className="container">
        <div className="sec-head center reveal">
          <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="dot" /> How it works</div>
          <h2 className="h-sec">A clear path from <span className="neon-text">requirements</span> to <span className="neon-pink">enterprise deployment</span>.</h2>
          <p className="lede">Eight tight stages with security baked into every one — and you in the loop the whole way.</p>
        </div>
        <div className="position-relative proc8" style={{ marginTop: 'clamp(40px,5vw,58px)' }}>
          <span className="proc-line" aria-hidden="true" />
          <div className="row g-4 gy-5">
            {STEPS.map((s, i) => (
              <div className="col-6 col-lg-3" key={s.t}>
                <div className="pstep reveal" data-anim="up-lg" style={{ '--i': i % 4 }}>
                  <div className="node">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{s.icon}</svg>
                    <span className="num">{i + 1}</span>
                  </div>
                  <h3>{s.t}</h3>
                  <p>{s.p}</p>
                  <span className="time">{s.w}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
