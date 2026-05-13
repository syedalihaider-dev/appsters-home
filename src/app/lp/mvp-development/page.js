"use client"
import React from 'react'
import { Montserrat, DM_Sans } from 'next/font/google'
import Header from '@/components/MobileAppStudio/Header'
import Banner from '@/components/MobileAppStudio/Banner'
import LeadingPartner from '@/components/MobileAppStudio/LeadingPartner'
import AwardsSlider from '@/components/MobileAppStudio/AwardsSlider'
import Services from '@/components/MobileAppStudio/Services'
import Portfolio from '@/components/MobileAppStudio/Portfolio'
import CTA from '@/components/MobileAppStudio/CTA'
import Process from '@/components/MobileAppStudio/Process'
import ToolsMaster from '@/components/MobileAppStudio/ToolsMaster'
import Testimonials from '@/components/MobileAppStudio/Testimonials'
import Industries from '@/components/MobileAppStudio/Industries'
import EngagementModels from '@/components/MobileAppStudio/EngagementModels'
import FAQs from '@/components/MobileAppStudio/FAQs'
import Location from '@/components/home/LocationSection'
import ContactForm from '@/components/MobileAppStudio/ContactForm'
import Footer from '@/components/MobileAppStudio/Footer'
import styles from './page.module.css'
import Image from 'next/image'

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
        <main className={`${styles.lpMobileAppStudio} ${montserrat.variable} ${dmsans.variable}`}>
            <Header />
            <Banner />
            <LeadingPartner />
            <AwardsSlider />
            <Services />
            <Portfolio />
            <CTA />
            <Process />
            <div className={styles.cover}>
                <Image src="/images/mobile-app-studio/cover-bg.png" alt="cover" fill className={styles.coverImg} />
                <ToolsMaster />
                <Testimonials />
            </div>
            <Industries />
            <EngagementModels />
            <FAQs />
            <Location />
            <ContactForm />
            <Footer />
        </main>
    )
}

export default Page
