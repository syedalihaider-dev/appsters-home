"use client"
import React from 'react'

const TECH = [
  'Swift (iOS)', 'Kotlin (Android)', 'React Native', 'Flutter', 'Node.js',
  'Python / Django', 'AWS / GCP / Azure', 'Firebase', 'GraphQL', 'PostgreSQL',
  'OpenAI / GPT-4', 'TensorFlow', 'Stripe / Plaid', 'Twilio', 'Kubernetes',
]

export default function TechStack() {
  return (
    <section className="pad" id="stack" data-screen-label="Tech Stack">
      <div className="container">
        <div className="sec-head center reveal">
          <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="dot" /> Technology stack</div>
          <h2 className="h-sec">The enterprise-grade tools we <span className="neon-purple">build with</span>.</h2>
          <p className="lede">Battle-tested languages, frameworks, and platforms — chosen for security, scale, and longevity.</p>
        </div>
        <div className="stack reveal" data-anim="blur">
          {TECH.map((t, i) => (<span className="t" style={{ '--i': i % 6 }} key={t}>{t}</span>))}
        </div>
      </div>
    </section>
  )
}
