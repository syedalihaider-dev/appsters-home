"use client"
import React from 'react'

const METRICS = [
  ['$2.4B', 'Transactions processed for fintech clients'],
  ['400K', 'Enterprise users onboarded in 6 months'],
  ['97%', 'On-time delivery rate'],
  ['90 Days', 'Free bug-fix warranty on every app'],
]

export default function ResultsSection() {
  return (
    <section className="pad" id="results" data-screen-label="Results">
      <div className="container">
        <div className="sec-head center reveal">
          <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="dot" /> Enterprise results</div>
          <h2 className="h-sec">Numbers that survive a <span className="neon-purple">board review</span>.</h2>
          <p className="lede">The outcomes enterprise teams actually report back to us after launch.</p>
        </div>
        <div className="row g-4 metrics" style={{ marginTop: 'clamp(34px,4vw,54px)' }}>
          {METRICS.map((m, i) => (
            <div className="col-6 col-lg-3" key={m[1]}>
              <div className="metric reveal" data-anim="zoom-up" style={{ '--i': i }}>
                <div className="n" data-count={m[0]}>{m[0]}</div>
                <div className="l">{m[1]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
