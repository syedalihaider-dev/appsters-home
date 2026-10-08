import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'
import { FiMic, FiCalendar, FiVolume2 } from 'react-icons/fi'
import styles from './MindCaseStudySection.module.css'

function BlueMountain() {
    return <svg className={styles.mountain} viewBox="0 0 1000 350" preserveAspectRatio="none" aria-hidden="true">
        <defs>
            <linearGradient id="mind-rock-fill" x1="0" x2=".6" y1="0" y2="1"><stop stopColor="#263346"/><stop offset=".35" stopColor="#111924"/><stop offset="1" stopColor="#05090f"/></linearGradient>
            <linearGradient id="mind-rock-edge" x1="0" x2="1"><stop stopColor="#12314d"/><stop offset=".5" stopColor="#36c8ff"/><stop offset="1" stopColor="#145b95"/></linearGradient>
            <filter id="mind-rock-glow" x="-20%" y="-40%" width="140%" height="180%"><feGaussianBlur stdDeviation="7" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <path d="M0 250 54 237l41 21 65-91 38 17 45-67 35 42 44-27 34 41 50-19 39 40 47-22 49 35 41-14 48 21 49-36 46 22 37-52 49 23 35-61 44 29 40-15 56 55 42-6v146H0z" fill="url(#mind-rock-fill)" />
        <path d="m0 251 54-14 41 21 65-91 38 17 45-67 35 42 44-27 34 41 50-19 39 40 47-22 49 35 41-14 48 21 49-36 46 22 37-52 49 23 35-61 44 29 40-15 56 55 42-6" fill="none" stroke="url(#mind-rock-edge)" strokeWidth="3" filter="url(#mind-rock-glow)" opacity=".92" />
        <path d="m92 272 69-81 22 9-46 77m147-132 39 39-31 22-22-27m234 54 42 31-37 18-48-35m302 39 46-52 22 14-28 57m114-99 34 23-30 25" fill="none" stroke="#65d8ff" strokeOpacity=".5" strokeWidth="2" />
        <path d="M0 311q130-32 248 8t250-2q147-32 251 0t251-4" fill="none" stroke="#14538a" strokeWidth="15" opacity=".25" />
    </svg>
}

export default function MindCaseStudySection() {
    return <section className={styles.section} id="minde-case-study" aria-labelledby="minde-case-title">
        <div className={styles.gridBg} aria-hidden="true" />
        <div className={styles.aura} aria-hidden="true" />
        <div className={styles.orbit} aria-hidden="true" />
        <BlueMountain />
        <div className={styles.content}>
            <div className={styles.copy}>
                <div className={styles.eyebrow}><i /><span>CASE STUDY</span></div>
                <h2 className={styles.title} id="minde-case-title">MINDE APP</h2>
                <p className={styles.description}>MINDE is an AI-powered voice companion built around continuity of self. Users capture thoughts, intentions, reminders, and encouragement in their own voice, then choose when to hear those messages again. Voice-first recording, AI-assisted scheduling, and original voice playback help people reconnect with what mattered to them.</p>
                <div className={styles.features}>
                    <span><FiMic aria-hidden="true" />AI Voice Companion</span>
                    <span><FiCalendar aria-hidden="true" />Smart Reminders</span>
                    <span><FiVolume2 aria-hidden="true" />Original Voice Playback</span>
                </div>
                <Link href="/case-study/mind-app" className={styles.button}>View Case Study <FaArrowRight aria-hidden="true" /></Link>
            </div>
            <div className={styles.visual}>
                <div className={styles.visualGlow} aria-hidden="true" />
                <Image src="/mobile-app-developers/mind-app-copy.png" alt="MINDE voice companion app shown on two mobile phones" fill sizes="(max-width: 760px) 94vw, 58vw" className={styles.phones} />
            </div>
        </div>
    </section>
}
