"use client"
import React from 'react'
import Header from '@/components/BuildYourApp/Header/Header'
import Banner from '@/components/BuildYourApp/Banner/Banner'
import ComparisonSection from '@/components/BuildYourApp/ComparisonSection/ComparisonSection'
import PortfolioSection from '@/components/BuildYourApp/PortfolioSection/PortfolioSection'
import HowItWorksSection from '@/components/BuildYourApp/HowItWorksSection/HowItWorksSection'
import TrustedByFoundersSection from '@/components/BuildYourApp/TrustedByFoundersSection/TrustedByFoundersSection'
import WhyAppstersSection from '@/components/BuildYourApp/WhyAppstersSection/WhyAppstersSection'
import CTASection from '@/components/BuildYourApp/CTASection/CTASection'
import LPFooter from '@/components/BuildYourApp/LPFooter/LPFooter'
import styles from './page.module.css'

const Page = () => {
    return (
        <main className={styles.buildYourAppMain}>
            <Header />
            <Banner />
            <ComparisonSection />
            <PortfolioSection />
            <HowItWorksSection />
            <TrustedByFoundersSection />
            <WhyAppstersSection />
            <CTASection />
            <LPFooter />
        </main>
    )
}

export default Page
