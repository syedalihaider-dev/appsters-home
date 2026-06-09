"use client"
import React from 'react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerInner}>
          <a href="#top" className={styles.brand}>
            <span className={styles.brandMark} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="2.5" width="12" height="19" rx="3" />
                <path d="M11 18.5h2" />
              </svg>
            </span>
            Appsters
          </a>
          <span className={styles.copy}>
            © 2026 Appsters · appsters.io — Enterprise mobile app development,
            built for scale.
          </span>
        </div>
      </div>
    </footer>
  )
}
