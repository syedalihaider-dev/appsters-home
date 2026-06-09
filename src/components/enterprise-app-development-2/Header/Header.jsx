"use client"
import React, { useState } from 'react'

const BrandMark = () => (
  <span className="mk">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="2.5" width="12" height="19" rx="3" />
      <path d="M11 18.5h2" />
    </svg>
  </span>
)

export default function Header({ onOpenPopup }) {
  const [open, setOpen] = useState(false)

  const handleOpenPopup = (e) => {
    e.preventDefault()
    setOpen(false)
    onOpenPopup?.()
  }

  return (
    <header className={`nav${open ? ' open' : ''}`} id="nav">
      <div className="container nav__in">
        <a className="brand" href="#top">
          <BrandMark />App<b>sters</b>
        </a>
        <nav className="nav__links">
          <a href="#build" onClick={() => setOpen(false)}>What We Build</a>
          <a href="#cases" onClick={() => setOpen(false)}>Case Studies</a>
          <a href="#results" onClick={() => setOpen(false)}>Results</a>
          <a href="#why" onClick={() => setOpen(false)}>Why Us</a>
          <a href="#process" onClick={() => setOpen(false)}>Process</a>
          <a className="mlink-cta" href="#contact" onClick={handleOpenPopup}>Free Enterprise Estimate</a>
        </nav>
        <a className="btn btn-neon nav__cta" href="#contact" onClick={handleOpenPopup}>
          Free Enterprise Estimate
        </a>
        <button
          className="nav__toggle"
          id="navToggle"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="bars" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          <svg className="x" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </div>
    </header>
  )
}
