import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaHandPaper } from 'react-icons/fa'
import { FiBookOpen, FiUsers } from 'react-icons/fi'
import styles from './StorySignCaseStudySection.module.css'

function StoryMountain() {
    return <svg className={styles.mountain} viewBox="0 0 1000 350" preserveAspectRatio="none" aria-hidden="true">
        <defs>
            <linearGradient id="story-rock" x1="0" x2=".7" y1="0" y2="1"><stop stopColor="#292743"/><stop offset=".35" stopColor="#11121e"/><stop offset="1" stopColor="#05060c"/></linearGradient>
            <linearGradient id="story-edge"><stop stopColor="#291966"/><stop offset=".5" stopColor="#7866ff"/><stop offset="1" stopColor="#226aff"/></linearGradient>
            <filter id="story-glow" x="-20%" y="-40%" width="140%" height="180%"><feGaussianBlur stdDeviation="7" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <path d="M0 250 54 237l41 21 65-91 38 17 45-67 35 42 44-27 34 41 50-19 39 40 47-22 49 35 41-14 48 21 49-36 46 22 37-52 49 23 35-61 44 29 40-15 56 55 42-6v146H0z" fill="url(#story-rock)" />
        <path d="m0 251 54-14 41 21 65-91 38 17 45-67 35 42 44-27 34 41 50-19 39 40 47-22 49 35 41-14 48 21 49-36 46 22 37-52 49 23 35-61 44 29 40-15 56 55 42-6" fill="none" stroke="url(#story-edge)" strokeWidth="3" filter="url(#story-glow)" opacity=".92" />
        <path d="m92 272 69-81 22 9-46 77m147-132 39 39-31 22-22-27m234 54 42 31-37 18-48-35m302 39 46-52 22 14-28 57m114-99 34 23-30 25" fill="none" stroke="#9786ff" strokeOpacity=".5" strokeWidth="2" />
    </svg>
}

export default function StorySignCaseStudySection() {
    return <section className={styles.section} id="storysign-case-study" aria-labelledby="storysign-title">
        <div className={styles.grid} aria-hidden="true" />
        <div className={styles.aura} aria-hidden="true" />
        <div className={styles.arc} aria-hidden="true" />
        <StoryMountain />
        <div className={styles.content}>
            <div className={styles.copy}>
                <div className={styles.eyebrow}><span>CASE STUDY</span><i /></div>
                <div className={styles.titleRow}>
                    <Image src="/mobile-app-developers/storysign-app-icon.png" alt="StorySign app icon" width={92} height={92} className={styles.appIcon} />
                    <h2 id="storysign-title">Story<span>Sign</span></h2>
                </div>
                <p className={styles.description}>StorySign is an inclusive storytelling app designed to make communication and learning more visual, engaging, and accessible. Users can explore guided stories, interactive sign support, and intuitive learning flows that help make everyday communication feel natural and confidence-building for children and families.</p>
                <div className={styles.features}>
                    <span><FiBookOpen aria-hidden="true" />Interactive Storytelling</span>
                    <span><FaHandPaper aria-hidden="true" />Visual Sign Support</span>
                    <span><FiUsers aria-hidden="true" />Accessible Learning</span>
                </div>
                <Link href="/case-study/storysign" className={styles.button}>View Case Study <FaArrowRight aria-hidden="true" /></Link>
            </div>
            <div className={styles.visual}>
                <div className={styles.visualGlow} aria-hidden="true" />
                <Image src="/mobile-app-developers/story-sign-copy.png" alt="StorySign storytelling and sign-learning app on two phones" fill sizes="(max-width: 760px) 94vw, 58vw" className={styles.phones} />
            </div>
        </div>
    </section>
}
