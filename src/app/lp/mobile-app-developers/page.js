"use client"
import React from 'react'
import { Montserrat, DM_Sans, Inter } from 'next/font/google'
import Header from '@/components/mobile-app-developers/Header/Header'
import Banner from '@/components/mobile-app-developers/Banner/Banner'
import IndustryServices from '@/components/mobile-app-developers/IndustryServices/IndustryServices'
import PortfolioSection from '@/components/mobile-app-developers/PortfolioSection/PortfolioSection'
import TestimonialsSection from '@/components/mobile-app-developers/TestimonialsSection/TestimonialsSection'
import ProcessSection from '@/components/mobile-app-developers/ProcessSection/ProcessSection'
import ContactSection from '@/components/mobile-app-developers/ContactSection/ContactSection'
import Footer from '@/components/mobile-app-developers/Footer/Footer'
import CaseStudySection from '@/components/mobile-app-developers/CaseStudySection/CaseStudySection'
import styles from './page.module.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
    variable: '--font-montserrat',
    display: 'swap',
})

const dmsans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-dmsans',
    display: 'swap',
})

const Page = () => {
    return (
        <main className={`${styles.lpMobileAppStudio} ${inter.variable} ${montserrat.variable} ${dmsans.variable}`}>
            <Header />
            <Banner />
            <IndustryServices />
            <PortfolioSection />
            <CaseStudySection />
            <TestimonialsSection />
            <ProcessSection />
            <ContactSection />
            <Footer />
        </main>
    )
}

export default Page
