import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { FiZap, FiLayers, FiUsers } from 'react-icons/fi'
import styles from './CaseStudySection.module.css'

function NeonMountain() {
    return <svg className={styles.mountain} viewBox="0 0 1000 350" preserveAspectRatio="none" aria-hidden="true">
        <defs>
            <linearGradient id="rock-fill" x1="0" x2="0.7" y1="0" y2="1"><stop stopColor="#27243c"/><stop offset=".3" stopColor="#11111e"/><stop offset="1" stopColor="#05060b"/></linearGradient>
            <linearGradient id="rock-edge" x1="0" x2="1" y1="0" y2="0"><stop stopColor="#22123f"/><stop offset=".48" stopColor="#9b4cff"/><stop offset="1" stopColor="#52269d"/></linearGradient>
            <filter id="mountain-glow" x="-20%" y="-40%" width="140%" height="180%"><feGaussianBlur stdDeviation="7" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <path d="M0 250 54 237l41 21 65-91 38 17 45-67 35 42 44-27 34 41 50-19 39 40 47-22 49 35 41-14 48 21 49-36 46 22 37-52 49 23 35-61 44 29 40-15 56 55 42-6v146H0z" fill="url(#rock-fill)" />
        <path d="m0 251 54-14 41 21 65-91 38 17 45-67 35 42 44-27 34 41 50-19 39 40 47-22 49 35 41-14 48 21 49-36 46 22 37-52 49 23 35-61 44 29 40-15 56 55 42-6" fill="none" stroke="url(#rock-edge)" strokeWidth="3" filter="url(#mountain-glow)" opacity=".88" />
        <path d="m92 272 69-81 22 9-46 77m147-132 39 39-31 22-22-27m234 54 42 31-37 18-48-35m302 39 46-52 22 14-28 57m114-99 34 23-30 25" fill="none" stroke="#aa75ff" strokeOpacity=".48" strokeWidth="2" />
        <path d="M0 311q130-32 248 8t250-2q147-32 251 0t251-4" fill="none" stroke="#401b74" strokeWidth="15" opacity=".22" />
    </svg>
}

export default function CaseStudySection() {
    return <section className={styles.caseStudySection} id="case-studies" aria-labelledby="mic2money-title">
        <div className={styles.gridBg} aria-hidden="true" />
        <div className={styles.neonAura} aria-hidden="true" />
        <div className={styles.orbit} aria-hidden="true" />
        <NeonMountain />
        <div className={styles.content}>
            <div className={styles.copy}>
                <div className={styles.eyebrow}><span>CASE STUDY</span><i /></div>
                <div className={styles.titleRow}>
                    <Image className={styles.appIcon} src="/mobile-app-developers/mic2money-app-icon.png" alt="Mic2Money app icon" width={88} height={88} />
                    <h2 id="mic2money-title">Mic2<span>Money</span></h2>
                </div>
                <p className={styles.description}>Mic2Money is a live music competition platform built for artists who are tired of waiting for permission. Artists enter contests, perform for a real audience, and earn actual cash based on fan votes: no label, no algorithm, no gatekeepers deciding who gets heard. For fans, it’s the first platform that makes discovery feel like participation. You don’t just listen. You influence outcomes and get rewarded for spotting talent before the rest of the world catches on.</p>
                <div className={styles.features}>
                    <span><FiZap aria-hidden="true" />Live Contest Engine</span>
                    <span><FiLayers aria-hidden="true" />Real Cash Payouts</span>
                    <span><FiUsers aria-hidden="true" />Fan-Driven Voting</span>
                </div>
                <Link href="/case-study/mic-2-money" className={styles.primaryBtn}>View Case Study <FaArrowRight aria-hidden="true" /></Link>
            </div>
            <div className={styles.visual}>
                <div className={styles.visualGlow} aria-hidden="true" />
                <Image src="/mobile-app-developers/mic2money-copy.png" alt="Mic2Money music contest app displayed on two mobile phones" fill priority sizes="(max-width: 760px) 94vw, 58vw" className={styles.phones} />
            </div>
        </div>
    </section>
}
