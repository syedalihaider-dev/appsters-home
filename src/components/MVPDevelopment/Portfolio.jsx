import React from 'react'
import Image from 'next/image'
import styles from './Portfolio.module.css'

const Portfolio = () => {
    const portfolioItems = [
        {
            id: 1,
            brand: "Bloom Money",
            title: "Switch Poker",
            desc: "Switch Poker is a mobile game app that allows users to play poker with each other and compete in different rounds until a winner has been decided.",
            img: "/images/mobile-app-studio/showcase/4.png",
            stats: [
                { value: "6k+", label: "Downloads" },
                { value: "4.6", label: "App Rating" },
                { value: "2k+", label: "Active Users" },
                { value: "78.9%", label: "Uptime" }
            ]
        },
        {
            id: 2,
            brand: "Check Your Reflexes",
            title: "Global Reflex",
            desc: "Global Reflex is a mobile app that delivers a fast, reliable, and engaging user experience. It allows users to connect, interact, and perform tasks seamlessly across a modern digital platform.",
            img: "/images/mobile-app-studio/showcase/2.png",
            stats: [
                { value: "12.9k", label: "Active Users" },
                { value: "4.8", label: "App Rating" },
                { value: "1k+", label: "Monthly Users" },
                { value: "54%", label: "Uptime" }
            ]
        },
        {
            id: 3,
            brand: "Share Your Content",
            title: "Mic 2 Money",
            desc: "Mic 2 Money is a mobile app that empowers users to create, share, and monetize podcast content. It allows creators to record audio, grow their audience, and turn their voice into income through a simple and engaging platform.",
            img: "/images/mobile-app-studio/showcase/1.png",
            stats: [
                { value: "4.5k", label: "Active Users" },
                { value: "4.7", label: "App Rating" },
                { value: "1.8k+", label: "Monthly Users" },
                { value: "19.9%", label: "Uptime" }
            ]
        },
        {
            id: 4,
            brand: "Virtual Live Well",
            title: "My Tank – Perfect for Anglers",
            desc: "My Tank is a mobile app built for anglers to record, track, and showcase their catches. Users can manage their fishing activity, analyze performance, and compete with others.",
            img: "/images/mobile-app-studio/showcase/3.png",
            stats: [
                { value: "24.2k", label: "Active Users" },
                { value: "4.7", label: "App Rating" },
                { value: "1.2k+", label: "Monthly Users" },
                { value: "81%", label: "Uptime" }
            ]
        },
    ]

    return (
        <section id='portfolio' className={styles.portfolioSection}>
            <div className="container">
                <div className={styles.headingBox}>
                    <h2 className={styles.title}>
                        A Portfolio That Powers <span className={styles.highlight}>Performance
                            <Image src="/images/mobile-app-studio/spring-vector.png" alt="spring" width={300} height={20} className={styles.spring} />
                        </span>
                    </h2>
                    <p className={styles.desc}>
                        Experience our showcase of apps and digital products that have helped brands
                        and businesses pierce through the charts and rank at the top in their specific
                        categories.
                    </p>
                </div>

                <div className={styles.portfolioGrid}>
                    {portfolioItems.map((item) => (
                        <div key={item.id} className={styles.portfolioItem}>
                            <Image src={item.img} alt={item.title} fill className={styles.bgImg} />
                            <div className={styles.overlay}>
                                <div className={styles.mainContent}>
                                    <p className={styles.itemBrand}>{item.brand}</p>
                                    <h3 className={styles.itemTitle}>{item.title}</h3>
                                </div>
                                <div className={styles.hoverContent}>
                                    <p className={styles.itemDesc}>{item.desc}</p>
                                    <div className={styles.statsGrid}>
                                        {item.stats.map((stat, idx) => (
                                            <div key={idx} className={styles.stat}>
                                                <h4>{stat.value}</h4>
                                                <p>{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <a href="#contact" className={styles.ctaBtn}>START YOUR PROJECT</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Portfolio
