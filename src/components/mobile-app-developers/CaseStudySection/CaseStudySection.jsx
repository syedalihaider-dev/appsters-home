import React from 'react'
import styles from './CaseStudySection.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const cases = [
    {
        title: "Mic2Money",
        description: "Mic2Money is a live music competition platform built for artists who are tired of waiting for permission. Artists enter contests, perform for a real audience, and earn actual cash based on fan votes: no label, no algorithm, no gatekeepers deciding who gets heard. For fans, it's the first platform that makes discovery feel like participation. You don't just listen. You influence outcomes and get rewarded for spotting talent before the rest of the world catches on.",
        badges: ["Live Contest Engine", "Real Cash Payouts", "Fan-Driven Voting"],
        image: "/mobile-app-developers/mic2money.png",
        reverse: false
    },
    {
        title: "Global Reflex",
        description: "Global Reflex is a precision reaction-time game that strips competitive mobile gaming down to its most honest form. A dot appears. The millisecond timer starts. You tap. Your score is verified, ranked, and placed on a global leaderboard against every other player on the planet. No upgrades that buy you an edge. No luck mechanics. Just the speed of your nervous system, measured accurately, compared fairly, and ranked in real time against the world.",
        badges: ["iOS & Android", "Anti-Cheat Verified", "Global Leaderboards"],
        image: "/mobile-app-developers/global-reflex.png",
        reverse: true
    },
    {
        title: "My Tank Virtual Live Well",
        description: "Virtual LiveWell is a fishing app that gives your catch a life after release. Photograph what you reel in, upload it through the app, and watch an animated version of that exact species swim into your personal virtual tank. Your tank grows with every trip, decorates with every milestone, and connects you to a community of anglers whose collections tell the story of every river, lake, and shoreline they have fished. It turns catch-and-release into something you genuinely look forward to logging.",
        badges: ["33 Species at Launch", "Gold Coin Economy", "Daily Retention Loops"],
        image: "/mobile-app-developers/my-tank-virtual.png",
        reverse: false
    }
]

const CaseStudySection = () => {
    return (
        <section className={styles.caseStudySection} id="case-studies">
            <div className={styles.gridBg}></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center">
                        <div className={styles.badge}>
                            <span className={styles.badgeDot}></span> BEYOND THE CODE
                        </div>
                        <h2 className={styles.mainTitle}>
                            REAL STORIES, <br />
                            <span className={styles.highlight}>REAL RESULTS</span>
                        </h2>
                    </div>
                </div>

                <div className={styles.casesWrapper}>
                    {cases.map((study, index) => (
                        <div className={`${styles.caseRow} ${study.reverse ? styles.caseRowReverse : ''}`} key={index}>
                            <div className={`row align-items-center ${study.reverse ? 'flex-row-reverse' : ''}`}>
                                <div className="col-lg-6 mb-4 mb-lg-0">
                                    <div className={styles.imageWrapper}>
                                        <Image src={study.image} alt={study.title} width={600} height={600} className={styles.caseImage} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={styles.contentWrapper}>
                                        <h3 className={styles.caseTitle}>{study.title}</h3>
                                        <p className={styles.caseDesc}>{study.description}</p>
                                        <div className={styles.badgesWrapper}>
                                            {study.badges.map((badge, idx) => (
                                                <span className={styles.caseBadge} key={idx}>{badge}</span>
                                            ))}
                                        </div>
                                        <Link href="#contact" className={styles.primaryBtn}>
                                            View Case Study <FaArrowRight className={styles.btnIcon} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CaseStudySection
