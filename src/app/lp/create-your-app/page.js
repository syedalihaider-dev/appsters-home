"use client"
import React from 'react'
import Header from '@/components/CreateYourApp/Header/Header'
import Banner from '@/components/CreateYourApp/Banner/Banner'
import ComparisonSection from '@/components/CreateYourApp/ComparisonSection/ComparisonSection'
import RealResultsSection from '@/components/CreateYourApp/RealResultsSection/RealResultsSection'
import WhyAppstersSection from '@/components/CreateYourApp/WhyAppstersSection/WhyAppstersSection'
import HowItWorksSection from '@/components/CreateYourApp/HowItWorksSection/HowItWorksSection'
import PortfolioSection from '@/components/CreateYourApp/PortfolioSection/PortfolioSection'
import TrustedByFoundersSection from '@/components/CreateYourApp/TrustedByFoundersSection/TrustedByFoundersSection'
import CTASection from '@/components/CreateYourApp/CTASection/CTASection'
import LPFooter from '@/components/CreateYourApp/LPFooter/LPFooter'
import Popup from '@/components/CreateYourApp/Popup/Popup'
import styles from './page.module.css'

const Page = () => {
    return (
        <main className={styles.createYourAppMain}>
            <Header />
            <Banner />
            <ComparisonSection />
            <RealResultsSection />
            <WhyAppstersSection />
            <HowItWorksSection />
            <PortfolioSection />
            <TrustedByFoundersSection />
            <CTASection />
            <LPFooter />
            <Popup />
        </main>
    )
}

export default Page
