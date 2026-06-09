"use client"
import React from 'react'

const QUOTES = [
  { q: "Appsters shipped a payments app that's now processing nine figures a year — and it passed every audit our compliance team threw at it.", nm: 'Michael Kern', rl: 'CEO, NovaPay', av: 'MK' },
  { q: 'HIPAA-ready from day one, integrated cleanly with our records system, and delivered on time. They understood healthcare better than our last vendor.', nm: 'Dr. Sarah Rahman', rl: 'MediConnect', av: 'SR' },
  { q: 'Our logistics app scaled to hundreds of thousands of drivers without a hiccup. The architecture they designed just keeps holding.', nm: 'Alsha Thornton', rl: 'CTO, LogiTrack', av: 'AT' },
  { q: 'Transparent, documented, and genuinely senior. It felt like an in-house enterprise team — not an agency. We own every line of it.', nm: 'Ryan Patel', rl: 'PropNest', av: 'RP' },
]

export default function TestimonialsSection() {
  return (
    <section className="pad band" data-screen-label="Testimonials">
      <div className="container">
        <div className="sec-head center reveal">
          <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="dot" /> Trusted by enterprise leaders</div>
          <h2 className="h-sec">The people who signed off on the <span className="neon-text">build</span>.</h2>
        </div>
        <div className="row g-4 quotes4" style={{ marginTop: 'clamp(30px,3.5vw,46px)' }}>
          {QUOTES.map((t, i) => (
            <div className="col-12 col-md-6 col-xl-3" key={t.nm}>
              <figure className="card card-neon quote reveal" data-anim="zoom-up" style={{ '--i': i, margin: 0 }}>
                <div className="stars">★★★★★</div>
                <blockquote>&ldquo;{t.q}&rdquo;</blockquote>
                <figcaption className="who">
                  <span className="av">{t.av}</span>
                  <span><div className="nm">{t.nm}</div><div className="rl">{t.rl}</div></span>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
