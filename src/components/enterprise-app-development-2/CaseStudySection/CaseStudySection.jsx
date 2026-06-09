"use client"
import React from 'react'
import Image from 'next/image'
import { ArrowIcon } from '@/components/enterprise-app-development-2/_shared/formOptions'

const CASES = [
  {
    title: 'Mic2Money',
    accent: 'c-purple',
    img: '/enterprise-app-development-2/mic2money.jpg',
    alt: 'Mic2Money live music competition app screens',
    desc: "Mic2Money is a live music competition platform built for artists who are tired of waiting for permission. Artists enter contests, perform for a real audience, and earn actual cash based on fan votes — no label, no algorithm, no gatekeepers deciding who gets heard. For fans, it's the first platform that makes discovery feel like participation. You don't just listen — you influence outcomes and get rewarded for spotting talent before the rest of the world catches on.",
    chips: ['Live Contest Engine', 'Real Cash Payouts', 'Fan-Driven Voting'],
    reverse: false,
  },
  {
    title: 'Global Reflex',
    accent: 'c-blue',
    img: '/enterprise-app-development-2/globalreflex.jpg',
    alt: 'Global Reflex reaction-time game app screens',
    desc: 'Global Reflex is a precision reaction-time game that strips competitive mobile gaming down to its most honest form. A dot appears. The millisecond timer starts. You tap. Your score is verified, ranked, and placed on a global leaderboard against every other player on the planet. No upgrades that buy you an edge. No luck mechanics. Just the speed of your nervous system, measured accurately, compared fairly, and ranked in real time against the world.',
    chips: ['iOS & Android', 'Anti-Cheat Verified', 'Global Leaderboards'],
    reverse: true,
  },
  {
    title: 'My Tank Virtual Live Well',
    accent: 'c-cyan',
    img: '/enterprise-app-development-2/mytank.jpg',
    alt: 'My Tank Virtual Live Well app screens',
    desc: 'Virtual LiveWell is a fishing app that gives your catch a life after release. Photograph what you reel in, upload it through the app, and watch an animated version of that exact species swim into your personal virtual tank. Your tank grows with every trip, decorates with every milestone, and connects you to a community of anglers whose collections tell the story of every river, lake, and shoreline they have fished. It turns catch-and-release into something you genuinely look forward to logging.',
    chips: ['33 Species at Launch', 'Gold Coin Economy', 'Daily Retention Loops'],
    reverse: false,
  },
]

export default function CaseStudySection({ onOpenPopup }) {
  const handleCta = (e) => {
    e.preventDefault()
    onOpenPopup?.()
  }

  return (
    <section className="pad band" id="cases" data-screen-label="Case Studies">
      <div className="container">
        <div className="sec-head center reveal">
          <div className="eyebrow" style={{ justifyContent: 'center' }}><span className="dot" /> Proof, not promises</div>
          <h2 className="h-sec">Enterprise apps we&apos;ve shipped, <span className="neon-text">start to store</span>.</h2>
          <p className="lede">Real products engineered, secured, and launched by our team — from live payout engines to globally-ranked competition platforms.</p>
        </div>

        <div style={{ marginTop: 'clamp(36px,4.5vw,64px)' }}>
          {CASES.map((c) => (
            <article className={`row g-4 g-lg-5 cstudy${c.reverse ? ' rev' : ''}`} key={c.title}>
              <div className="col-12 col-lg-6 cstudy__media-col">
                <div className={`cstudy__media ${c.accent} reveal`} data-anim={c.reverse ? 'right' : 'left'}>
                  <Image src={c.img} alt={c.alt} fill sizes="(max-width: 992px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="cstudy__body reveal" data-anim={c.reverse ? 'left' : 'right'}>
                  <h3 className="cstudy__title">{c.title}</h3>
                  <p className="cstudy__desc">{c.desc}</p>
                  <div className="cstudy__chips">{c.chips.map((chip) => (<span key={chip}>{chip}</span>))}</div>
                  <a className="btn btn-neon cstudy__cta" href="#contact" onClick={handleCta}>View Case Study <ArrowIcon /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
