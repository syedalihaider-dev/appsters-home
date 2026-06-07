import React from 'react';
import styles from './WhyAppstersSection.module.css';

const WhyAppstersSection = () => {
    const features = [
        {
            title: "Expert Team",
            desc: "Senior engineers, designers and PMs with 10+ years shipping apps across 40+ industries.",
            colorClass: styles.colorCyan,
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <path d="M20 8v6"></path>
                    <path d="M23 11h-6"></path>
                </svg> /* Simplified user/signal icon */
            )
        },
        {
            title: "Custom Solutions",
            desc: "Zero templates. Every screen, flow and animation is built around your product and brand.",
            colorClass: styles.colorPurple,
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            )
        },
        {
            title: "Full Support",
            desc: "One partner from design to deployment — and a real human on call long after launch.",
            colorClass: styles.colorPink,
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
            )
        },
        {
            title: "Proven Process",
            desc: "Transparent, documented stages with weekly demos. You always know exactly where things stand.",
            colorClass: styles.colorBlue,
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
            )
        },
        {
            title: "Industry Expertise",
            desc: "Deep experience in healthcare, ecommerce, fintech, SaaS and fitness — we speak your domain.",
            colorClass: styles.colorCyan,
            icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                    <polygon points="12 2 20 10 20 22 4 22 4 10 12 2"></polygon>
                </svg>
            )
        }
    ];

    return (
        <section className={styles.whyAppstersSection}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.subtitle}>
                        <span className={styles.dot}></span>
                        WHY APPSTERS
                    </div>
                    <h2 className={styles.title}>
                        Five reasons teams <span className={styles.glowTextPurple}>stop<br/>Googling</span> and start building.
                    </h2>
                </div>

                <div className={styles.cardsGrid}>
                    {features.map((feature, index) => (
                        <div className={styles.featureCard} key={index}>
                            <div className={`${styles.iconBox} ${feature.colorClass}`}>
                                {feature.icon}
                            </div>
                            <h3 className={styles.featureTitle}>{feature.title}</h3>
                            <p className={styles.featureDesc}>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyAppstersSection;
