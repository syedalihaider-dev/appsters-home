"use client"
import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from './Header.module.css'

const NAV_LINKS = [
  { label: 'What We Build', href: '#services' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'Results', href: '#results' },
  { label: 'Process', href: '#process' },
]

export default function Header({ onOpenPopup }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.headerInner}>
          <a href="#top" className={styles.brand}>
            <span className={styles.brandMark} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="6" y="2.5" width="12" height="19" rx="3" />
                <path d="M11 18.5h2" />
              </svg>
            </span>
            Appsters
          </a>

          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <button
              type="button"
              className={styles.navCta}
              onClick={() => {
                setMenuOpen(false)
                onOpenPopup()
              }}
            >
              Free Enterprise Estimate
            </button>
          </nav>

          <button
            type="button"
            className={styles.primaryCta}
            onClick={onOpenPopup}
          >
            Free Enterprise Estimate
          </button>

          <button
            type="button"
            className={styles.toggle}
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  )
}
