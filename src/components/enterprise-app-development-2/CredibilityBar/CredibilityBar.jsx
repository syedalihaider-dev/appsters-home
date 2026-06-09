"use client"
import React from 'react'

export default function CredibilityBar() {
  return (
    <section className="cred" data-screen-label="Credibility Bar">
      <div className="container cred__in">
        <div className="cred__score reveal" data-anim="zoom">
          <div className="cred__badge c1">
            <span className="plat"><span className="v">Clutch</span> <span className="v">4.9</span><span className="stars">★★★★★</span></span>
            <span className="rt">Top App Developers 2026</span>
          </div>
          <div className="cred__badge c2">
            <span className="plat"><span className="v">GoodFirms</span> <span className="v">4.8</span><span className="stars">★★★★★</span></span>
            <span className="rt">Leading Mobile Agency</span>
          </div>
          <div className="cred__badge c3">
            <span className="plat"><span className="v">1,200+</span> <span>Reviews</span></span>
            <span className="rt">Across global platforms</span>
          </div>
        </div>
        <p className="cred__line reveal" data-d="2">Trusted by <b>Fortune 500s</b>, funded startups, and global enterprises across <b>40+ industries</b>.</p>
      </div>
    </section>
  )
}
