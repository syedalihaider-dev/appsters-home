import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaApple, FaGooglePlay, FaShieldAlt, FaTrophy } from 'react-icons/fa'
import styles from './GlobalReflexCaseStudySection.module.css'

function ReflexMountain() {
    return <svg className={styles.mountain} viewBox="0 0 1000 350" preserveAspectRatio="none" aria-hidden="true">
        <defs>
            <linearGradient id="reflex-rock" x1="0" x2=".65" y1="0" y2="1"><stop stopColor="#252544"/><stop offset=".35" stopColor="#11121e"/><stop offset="1" stopColor="#05060c"/></linearGradient>
            <linearGradient id="reflex-edge"><stop stopColor="#18245f"/><stop offset=".48" stopColor="#5254ff"/><stop offset="1" stopColor="#1688ff"/></linearGradient>
            <filter id="reflex-glow" x="-20%" y="-40%" width="140%" height="180%"><feGaussianBlur stdDeviation="7" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <path d="M0 250 54 237l41 21 65-91 38 17 45-67 35 42 44-27 34 41 50-19 39 40 47-22 49 35 41-14 48 21 49-36 46 22 37-52 49 23 35-61 44 29 40-15 56 55 42-6v146H0z" fill="url(#reflex-rock)" />
        <path d="m0 251 54-14 41 21 65-91 38 17 45-67 35 42 44-27 34 41 50-19 39 40 47-22 49 35 41-14 48 21 49-36 46 22 37-52 49 23 35-61 44 29 40-15 56 55 42-6" fill="none" stroke="url(#reflex-edge)" strokeWidth="3" filter="url(#reflex-glow)" opacity=".92" />
        <path d="m92 272 69-81 22 9-46 77m147-132 39 39-31 22-22-27m234 54 42 31-37 18-48-35m302 39 46-52 22 14-28 57m114-99 34 23-30 25" fill="none" stroke="#667bff" strokeOpacity=".53" strokeWidth="2" />
    </svg>
}

export default function GlobalReflexCaseStudySection() {
    return <section className={styles.section} id="global-reflex-case-study" aria-labelledby="global-reflex-title">
        <div className={styles.grid} aria-hidden="true" />
        <div className={styles.aura} aria-hidden="true" />
        <div className={styles.arc} aria-hidden="true" />
        <ReflexMountain />
        <div className={styles.content}>
            <div className={styles.copy}>
                <div className={styles.eyebrow}><span>CASE STUDY</span><i /></div>
                <h2 id="global-reflex-title">Global <span>Reflex</span></h2>
                <p className={styles.description}>Global Reflex is a precision reaction-time game that strips competitive mobile gaming down to its most honest form. A dot appears. The millisecond timer starts. You tap. Your score is verified, ranked, and placed on a global leaderboard against every other player on the planet. No upgrades that buy you an edge. No luck mechanics. Just the speed of your nervous system, measured accurately, compared fairly, and ranked in real time against the world.</p>
                <div className={styles.features}>
                    <span><span className={styles.platformIcons}><FaApple /><FaGooglePlay /></span>iOS &amp; Android</span>
                    <span><FaShieldAlt />Anti-Cheat Verified</span>
                    <span><FaTrophy />Global Leaderboards</span>
                </div>
                <Link href="/case-study/global-reflex" className={styles.button}>View Case Study <FaArrowRight aria-hidden="true" /></Link>
            </div>
            <div className={styles.visual}>
                <div className={styles.visualGlow} aria-hidden="true" />
                <Image src="/mobile-app-developers/global-reflex-copy.png" alt="Global Reflex reaction-time game displayed on two mobile phones" fill sizes="(max-width: 760px) 94vw, 58vw" className={styles.phones} />
            </div>
        </div>
    </section>
}
