"use client"
import React from 'react'

export default function Footer() {
  return (
    <footer className="foot">
      <div className="container foot__in">
        <a className="brand" href="#top">
          <span className="mk">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="6" y="2.5" width="12" height="19" rx="3" />
              <path d="M11 18.5h2" />
            </svg>
          </span>
          App<b>sters</b>
        </a>
        <span className="mono">© 2026 Appsters · appsters.io — Enterprise mobile app development, built for scale.</span>
      </div>
    </footer>
  )
}
