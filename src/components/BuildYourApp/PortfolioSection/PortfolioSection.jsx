import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PortfolioSection.module.css';

const PortfolioSection = () => {
    const portfolioItems = [
        {
            title: "My Tank Virtual Live Well",
            description: "Virtual LiveWell is a fishing app that gives your catch a life after release. Photograph what you reel in, upload it through the app, and watch an animated version of that exact species swim into your personal virtual tank. Your tank grows with every trip, decorates with every milestone, and connects you to a community of anglers whose collections tell the story of every river, lake, and shoreline they have fished.",
            image: "/build-your-app/my-tank-virtual.png",
            tags: ["33 Species at Launch", "Gold Coin Economy", "Daily Retention Loops"],
            reverse: false
        },
        {
            title: "Global Reflex",
            description: "Global Reflex is a precision reaction-time game that strips competitive mobile gaming down to its most honest form. A dot appears. The millisecond timer starts. You tap. Your score is verified, ranked, and placed on a global leaderboard against every other player on the planet. No upgrades that buy you an edge. No luck mechanics. Just the speed of your nervous system, measured accurately, compared fairly, and ranked in real time against the world.",
            image: "/build-your-app/global-reflex.png",
            tags: ["iOS & Android", "Anti-Cheat Verified", "Global Leaderboards"],
            reverse: true
        },
        {
            title: "Mic2Money",
            description: "Mic2Money is a live music competition platform built for artists who are tired of waiting for permission. Artists enter contests, perform for a real audience, and earn actual cash based on fan votes: no label, no algorithm, no gatekeepers deciding who gets heard. For fans, it's the first platform that makes discovery feel like participation. You don't just listen. You influence outcomes and get rewarded for spotting talent before the rest of the world catches on.",
            image: "/build-your-app/mic2money.png",
            tags: ["Live Contest Engine", "Real Cash Payouts", "Fan-Driven Voting"],
            reverse: false
        }
    ];

    const industries = [
        "Fintech", "Healthcare", "E-Commerce", "Food Delivery", "Gaming", "Music", "Real Estate", "EdTech", "Logistics", "Travel"
    ];

    return (
        <section className={styles.portfolioSection}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.subtitle}>
                        <span className={styles.dot}></span>
                        OUR WORK
                    </div>
                    <h2 className={styles.title}>
                        Apps we've shipped, <span className={styles.cyanText}>start to store.</span>
                    </h2>
                    <p className={styles.description}>
                        Real products built for real founders — designed, engineered and launched by our team. Here are a few of the latest.
                    </p>
                </div>

                <div className={styles.portfolioList}>
                    {portfolioItems.map((item, index) => (
                        <div className={`${styles.portfolioItem} ${item.reverse ? styles.reverse : ''}`} key={index}>
                            <div className={styles.imageCol}>
                                <div className={styles.imageWrapper}>
                                    <Image 
                                        src={item.image} 
                                        alt={item.title} 
                                        width={600} 
                                        height={400} 
                                        className={styles.image} 
                                    />
                                </div>
                            </div>
                            <div className={styles.contentCol}>
                                <h3 className={styles.itemTitle}>{item.title}</h3>
                                <p className={styles.itemDesc}>{item.description}</p>
                                <div className={styles.tags}>
                                    {item.tags.map((tag, idx) => (
                                        <span className={styles.tag} key={idx}>{tag}</span>
                                    ))}
                                </div>
                                <Link href="#case-study" className={styles.primaryBtn}>
                                    View Case Study <span className={styles.arrow}>→</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.industriesWrapper}>
                    <h4 className={styles.industriesTitle}>INDUSTRIES WE'VE SHIPPED FOR:</h4>
                    <div className={styles.industriesList}>
                        {industries.map((industry, index) => (
                            <React.Fragment key={index}>
                                <span className={styles.industryItem}>{industry}</span>
                                {index < industries.length - 1 && <span className={styles.industryDot}>·</span>}
                            </React.Fragment>
                        ))}
                        <span className={styles.industryDot}>·</span>
                        <span className={styles.moreText}>+31 more</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
