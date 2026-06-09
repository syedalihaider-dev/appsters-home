"use client"
import React from 'react'
import Link from 'next/link'
import { Montserrat, DM_Sans } from 'next/font/google'
import { FaCheck, FaArrowRight, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import styles from './ThankYou.module.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
})
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dmsans',
  display: 'swap',
})

export default function ThankYouPage() {
  return (
    <main className={`${styles.page} ${montserrat.variable} ${dmSans.variable}`}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.card}>
        <div className={styles.checkWrap}>
          <FaCheck />
        </div>
        <div className={styles.badge}>
          <span className={styles.dot} /> REQUEST RECEIVED
        </div>
        <h1 className={styles.title}>
          Thank You! Your Enterprise App Consultation is Confirmed.
        </h1>
        <p className={styles.subtitle}>
          A senior solutions architect will reach out within 4 hours with your
          free enterprise estimate and roadmap. Your project is protected from
          the first conversation.
        </p>

        <ul className={styles.points}>
          <li>
            <span className={styles.tick}>
              <FaCheck />
            </span>
            A free architecture roadmap &amp; ballpark estimate
          </li>
          <li>
            <span className={styles.tick}>
              <FaCheck />
            </span>
            NDA signed before every discussion — 100% confidential
          </li>
          <li>
            <span className={styles.tick}>
              <FaCheck />
            </span>
            A reply from a senior architect within 4 hours
          </li>
        </ul>

        <div className={styles.contactRow}>
          <a href="tel:+18554422711" className={styles.contactLink}>
            <FaPhoneAlt /> +1 (855) 442-2711
          </a>
          <a href="mailto:support@appsters.io" className={styles.contactLink}>
            <FaEnvelope /> support@appsters.io
          </a>
        </div>

        <Link href="/lp/enterprise-app-development" className={styles.homeBtn}>
          Back to Home <FaArrowRight />
        </Link>
      </div>
    </main>
  )
}
