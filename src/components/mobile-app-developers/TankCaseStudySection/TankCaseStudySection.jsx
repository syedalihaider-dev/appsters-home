import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaFish, FaCoins, FaChartBar } from 'react-icons/fa'
import styles from './TankCaseStudySection.module.css'

function AquariumRidge() {
    return <svg className={styles.ridge} viewBox="0 0 900 250" preserveAspectRatio="none" aria-hidden="true">
        <defs>
            <linearGradient id="tank-rock" x1="0" x2="0.3" y1="0" y2="1"><stop stopColor="#314c5a"/><stop offset=".28" stopColor="#15212a"/><stop offset="1" stopColor="#050a0d"/></linearGradient>
            <linearGradient id="tank-edge"><stop stopColor="#0b3147"/><stop offset=".52" stopColor="#54caff"/><stop offset="1" stopColor="#103959"/></linearGradient>
            <filter id="tank-glow" x="-20%" y="-35%" width="140%" height="170%"><feGaussianBlur stdDeviation="6" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <path d="M0 155 45 134l42 27 61-81 42 34 53-69 42 55 46-25 51 44 43-23 51 43 48-32 42 20 57-66 40 44 58-31 38 26 56-16 45 37 58-27v126H0z" fill="url(#tank-rock)" />
        <path d="m0 155 45-21 42 27 61-81 42 34 53-69 42 55 46-25 51 44 43-23 51 43 48-32 42 20 57-66 40 44 58-31 38 26 56-16 45 37 58-27" fill="none" stroke="url(#tank-edge)" strokeWidth="3" filter="url(#tank-glow)" opacity=".9" />
        <path d="M72 221q15-68 29 0m18 8q18-91 36 0m588-1q16-74 32 0m23 0q18-98 36 0" fill="none" stroke="#36d39d" strokeOpacity=".56" strokeWidth="5" />
        <path d="M0 220q160-24 300 9t300-4q151-29 300 0" fill="none" stroke="#39baff" strokeOpacity=".34" strokeWidth="10" />
    </svg>
}

export default function TankCaseStudySection() {
    return <section className={styles.section} id="my-tank-case-study" aria-labelledby="my-tank-title">
        <div className={styles.grid} aria-hidden="true" />
        <div className={styles.waterGlow} aria-hidden="true" />
        <article className={styles.card}>
            <div className={styles.imageSide}>
                <div className={styles.imageAura} aria-hidden="true" />
                <AquariumRidge />
                <Image src="/mobile-app-developers/my-tank-copy.png" alt="My Tank fishing app on two phones, showing a mountain lake and virtual aquarium" fill sizes="(max-width: 760px) 94vw, 50vw" className={styles.phones} />
            </div>
            <div className={styles.copy}>
                <div className={styles.eyebrow}><span>CASE STUDY</span><i /></div>
                <h2 id="my-tank-title">My Tank<br /><span>Virtual Live Well</span></h2>
                <p className={styles.description}>Virtual LiveWell is a fishing app that gives your catch a life after release. Photograph what you reel in, upload it through the app, and watch an animated version of that exact species swim into your personal virtual tank. Your tank grows with every trip, decorates with every milestone, and connects you to a community of anglers whose collections tell the story of every river, lake, and shoreline they have fished. It turns catch-and-release into something you genuinely look forward to logging.</p>
                <div className={styles.features}>
                    <span><FaFish aria-hidden="true" />33 Species<br />at Launch</span>
                    <span><FaCoins aria-hidden="true" />Gold Coin<br />Economy</span>
                    <span><FaChartBar aria-hidden="true" />Daily Retention<br />Loops</span>
                </div>
                <Link href="/case-study/my-tank" className={styles.button}>View Case Study <FaArrowRight aria-hidden="true" /></Link>
            </div>
        </article>
    </section>
}
