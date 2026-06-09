"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import styles from './CaseStudySection.module.css'

const cases = [
  {
    title: 'Mic2Money',
    description:
      "Mic2Money is a live music competition platform built for artists who are tired of waiting for permission. Artists enter contests, perform for a real audience, and earn actual cash based on fan votes: no label, no algorithm, no gatekeepers deciding who gets heard. For fans, it's the first platform that makes discovery feel like participation. You don't just listen. You influence outcomes and get rewarded for spotting talent before the rest of the world catches on.",
    badges: ['Live Contest Engine', 'Real Cash Payouts', 'Fan-Driven Voting'],
    image: '/mobile-app-developers/mic2money.png',
    reverse: false,
  },
  {
    title: 'Global Reflex',
    description:
      'Global Reflex is a precision reaction-time game that strips competitive mobile gaming down to its most honest form. A dot appears. The millisecond timer starts. You tap. Your score is verified, ranked, and placed on a global leaderboard against every other player on the planet. No upgrades that buy you an edge. No luck mechanics. Just the speed of your nervous system, measured accurately, compared fairly, and ranked in real time against the world.',
    badges: ['iOS & Android', 'Anti-Cheat Verified', 'Global Leaderboards'],
    image: '/mobile-app-developers/global-reflex.png',
    reverse: true,
  },
  {
    title: 'My Tank Virtual Live Well',
    description:
      'Virtual LiveWell is a fishing app that gives your catch a life after release. Photograph what you reel in, upload it through the app, and watch an animated version of that exact species swim into your personal virtual tank. Your tank grows with every trip, decorates with every milestone, and connects you to a community of anglers whose collections tell the story of every river, lake, and shoreline they have fished. It turns catch-and-release into something you genuinely look forward to logging.',
    badges: ['33 Species at Launch', 'Gold Coin Economy', 'Daily Retention Loops'],
    image: '/mobile-app-developers/my-tank-virtual.png',
    reverse: false,
  },
]

export default function CaseStudySection() {
  return (
    <section className={styles.caseSection} id="cases">
      <div className="container">
        <div className={styles.sectionHead}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} /> BEYOND THE CODE
          </div>
          <h2 className={styles.sectionTitle}>REAL STORIES, REAL RESULTS</h2>
        </div>

        {cases.map((c) => (
          <article
            key={c.title}
            className={`${styles.caseRow} ${c.reverse ? styles.caseRowReverse : ''}`}
          >
            <div className={styles.caseMedia}>
              <div className={styles.mediaInner}>
                <Image
                  src={c.image}
                  alt={`${c.title} app screens`}
                  width={720}
                  height={526}
                  className={styles.caseImage}
                />
              </div>
            </div>
            <div className={styles.caseBody}>
              <h3 className={styles.caseTitle}>{c.title}</h3>
              <p className={styles.caseDesc}>{c.description}</p>
              <div className={styles.caseBadges}>
                {c.badges.map((b) => (
                  <span key={b} className={styles.caseBadge}>
                    <span className={styles.dot} />
                    {b}
                  </span>
                ))}
              </div>
              <Link href="#contact" className={styles.caseBtn}>
                View Case Study <FaArrowRight />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
