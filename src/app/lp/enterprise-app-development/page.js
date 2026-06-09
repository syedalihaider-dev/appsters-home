"use client"
import React, { useState, useEffect } from 'react'
import { Montserrat, DM_Sans, Inter } from 'next/font/google'
import Header from '@/components/enterprise-app-development/Header/Header'
import Banner from '@/components/enterprise-app-development/Banner/Banner'
import IndustryServices from '@/components/enterprise-app-development/IndustryServices/IndustryServices'
import CaseStudySection from '@/components/enterprise-app-development/CaseStudySection/CaseStudySection'
import PortfolioSection from '@/components/enterprise-app-development/PortfolioSection/PortfolioSection'
import TestimonialsSection from '@/components/enterprise-app-development/TestimonialsSection/TestimonialsSection'
import ProcessSection from '@/components/enterprise-app-development/ProcessSection/ProcessSection'
import ContactSection from '@/components/enterprise-app-development/ContactSection/ContactSection'
import Footer from '@/components/enterprise-app-development/Footer/Footer'
import Popup from '@/components/enterprise-app-development/Popup/Popup'
import styles from './page.module.css'

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
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export default function EnterpriseAppDevelopmentPage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <main
      className={`${styles.page} ${montserrat.variable} ${dmSans.variable} ${inter.variable}`}
    >
      <Header onOpenPopup={() => setIsPopupOpen(true)} />
      <Banner />
      <IndustryServices onOpenPopup={() => setIsPopupOpen(true)} />
      <CaseStudySection />
      <PortfolioSection />
      <TestimonialsSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </main>
  )
}
