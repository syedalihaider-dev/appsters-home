"use client"
import React, { useState, useEffect } from 'react'
import Header from '@/components/enterprise-app-development-2/Header/Header'
import Banner from '@/components/enterprise-app-development-2/Banner/Banner'
import CredibilityBar from '@/components/enterprise-app-development-2/CredibilityBar/CredibilityBar'
import IndustryServices from '@/components/enterprise-app-development-2/IndustryServices/IndustryServices'
import CaseStudySection from '@/components/enterprise-app-development-2/CaseStudySection/CaseStudySection'
import ResultsSection from '@/components/enterprise-app-development-2/ResultsSection/ResultsSection'
import WhyUs from '@/components/enterprise-app-development-2/WhyUs/WhyUs'
import ProcessSection from '@/components/enterprise-app-development-2/ProcessSection/ProcessSection'
import TestimonialsSection from '@/components/enterprise-app-development-2/TestimonialsSection/TestimonialsSection'
import TechStack from '@/components/enterprise-app-development-2/TechStack/TechStack'
import ContactSection from '@/components/enterprise-app-development-2/ContactSection/ContactSection'
import Footer from '@/components/enterprise-app-development-2/Footer/Footer'
import Popup from '@/components/enterprise-app-development-2/Popup/Popup'

export default function EnterpriseAppDevelopment2Page() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const openPopup = () => setIsPopupOpen(true)

  // Popup auto-opens after 5s (same as existing LP pattern)
  useEffect(() => {
    const timer = setTimeout(() => setIsPopupOpen(true), 5000)
    return () => clearTimeout(timer)
  }, [])

  // Scroll-reveal + count-up + parallax engine
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // ---- count-up helper ----
    const runCount = (el) => {
      const raw = el.getAttribute('data-count') || el.textContent
      const m = String(raw).match(/^([^\d]*)([\d.,]+)(.*)$/)
      if (!m) return
      const prefix = m[1]
      const target = parseFloat(m[2].replace(/,/g, ''))
      const suffix = m[3]
      const decimals = (m[2].split('.')[1] || '').length
      if (prefersReduced || isNaN(target)) { el.textContent = raw; return }
      const dur = 1400
      const start = performance.now()
      const fmt = (n) =>
        n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        el.textContent = prefix + fmt(target * eased) + suffix
        if (p < 1) requestAnimationFrame(tick)
        else el.textContent = raw
      }
      requestAnimationFrame(tick)
    }

    // ---- reveal observer ----
    const revealEls = document.querySelectorAll('.reveal:not(.in), .proc-line, .tr:not(.in)')
    if (!('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('in'))
      document.querySelectorAll('[data-count]').forEach((el) => (el.textContent = el.getAttribute('data-count')))
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('in')
              e.target.querySelectorAll?.('[data-count]').forEach(runCount)
              if (e.target.hasAttribute?.('data-count')) runCount(e.target)
              io.unobserve(e.target)
            }
          })
        },
        { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
      )
      revealEls.forEach((el) => io.observe(el))

      // observe metric numbers directly (some sit inside already-in heads)
      document.querySelectorAll('[data-count]').forEach((el) => io.observe(el))
    }

    // ---- parallax orbs + tagged elements ----
    let ticking = false
    const parallaxEls = document.querySelectorAll('[data-speed]')
    const onScroll = () => {
      if (prefersReduced || ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        parallaxEls.forEach((el) => {
          const speed = parseFloat(el.getAttribute('data-speed')) || 0
          el.style.setProperty('--py', `${(y * speed).toFixed(1)}px`)
        })
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <div className="bg-atmo" aria-hidden="true">
        <div className="grid" />
        <div className="orb o1 parallax" data-speed="0.06" />
        <div className="orb o2 parallax" data-speed="-0.04" />
      </div>

      <Header onOpenPopup={openPopup} />

      <main id="top">
        <Banner />
        <CredibilityBar />
        <IndustryServices />
        <CaseStudySection onOpenPopup={openPopup} />
        <ResultsSection />
        <WhyUs />
        <ProcessSection />
        <TestimonialsSection />
        <TechStack />
        <ContactSection />
      </main>

      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      <Footer />
    </>
  )
}
