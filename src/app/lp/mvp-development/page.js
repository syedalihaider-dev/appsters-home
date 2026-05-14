"use client"
import React from 'react'
import { Montserrat, DM_Sans } from 'next/font/google'
import Header from '@/components/MVPDevelopment/Header'
import Banner from '@/components/MVPDevelopment/Banner'
import LeadingPartner from '@/components/MVPDevelopment/LeadingPartner'
import AwardsSlider from '@/components/MVPDevelopment/AwardsSlider'
import Services from '@/components/MVPDevelopment/Services'
import Portfolio from '@/components/MVPDevelopment/Portfolio'
import CTA from '@/components/MVPDevelopment/CTA'
import Process from '@/components/MVPDevelopment/Process'
import ToolsMaster from '@/components/MVPDevelopment/ToolsMaster'
import Testimonials from '@/components/MVPDevelopment/Testimonials'
import Industries from '@/components/MVPDevelopment/Industries'
import EngagementModels from '@/components/MVPDevelopment/EngagementModels'
import FAQs from '@/components/MVPDevelopment/FAQs'
import Location from '@/components/home/LocationSection'
import ContactForm from '@/components/MVPDevelopment/ContactForm'
import Footer from '@/components/MVPDevelopment/Footer'
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
        <main className={`${styles.lpMVPDevelopment} ${montserrat.variable} ${dmsans.variable}`}>
            <Header />
            <Banner />
            <LeadingPartner />
            <AwardsSlider />
            <Services />
            <Portfolio />
            <CTA />
            <Process />
            <div className={styles.cover}>
                <Image src="/images/mobile-app-studio/cover-bg-black.png" alt="cover" fill className={styles.coverImg} />
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
