"use client"
import React from 'react'
import Link from 'next/link'
import { Space_Grotesk, Manrope, Space_Mono } from 'next/font/google'

import '../styles/eapp2-base.css'
import '../styles/eapp2-sections.css'
import '../styles/eapp2-animations.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-space-grotesk', display: 'swap' })
const manrope = Manrope({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800'], variable: '--font-manrope', display: 'swap' })
const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-space-mono', display: 'swap' })

export default function ThankYouPage() {
  return (
    <div className={`eapp2 ${spaceGrotesk.variable} ${manrope.variable} ${spaceMono.variable}`}>
      <div className="bg-atmo" aria-hidden="true">
        <div className="grid" />
        <div className="orb o1" />
        <div className="orb o2" />
      </div>
      <main id="top" style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '40px 22px' }}>
        <div className="card" style={{ maxWidth: 600, width: '100%', textAlign: 'center', padding: '44px 40px' }}>
          <div className="hf__check" style={{ margin: '0 auto 20px' }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
          </div>
          <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="dot" /> Request received</div>
          <h1 className="h-sec" style={{ marginTop: 16, fontSize: 'clamp(26px,4vw,38px)' }}>
            Thank You! Your Enterprise App Consultation is <span className="neon-text">Confirmed</span>.
          </h1>
          <p className="lede" style={{ marginTop: 14, maxWidth: 460, marginInline: 'auto' }}>
            A senior solutions architect will reach out within 4 hours with your free enterprise estimate and roadmap. Your project is protected from the first conversation.
          </p>
          <div className="final__contact" style={{ justifyContent: 'center', borderTop: 'none', marginTop: 26, paddingTop: 0 }}>
            <a href="tel:+18554422711"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" /></svg></span> +1 (855) 442-2711</a>
            <a href="mailto:support@appsters.io"><span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M4 7l8 6 8-6" /></svg></span> support@appsters.io</a>
          </div>
          <Link className="btn btn-neon" href="/lp/enterprise-app-development-2" style={{ marginTop: 28 }}>
            Back to Home
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </div>
      </main>
    </div>
  )
}
