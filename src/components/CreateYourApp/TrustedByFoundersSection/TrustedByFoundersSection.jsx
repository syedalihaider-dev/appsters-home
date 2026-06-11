"use client"
import React from 'react';
import { motion } from 'framer-motion';
import styles from './TrustedByFoundersSection.module.css';
import { staggerContainer, staggerItem, reveal } from '../_shared/motion';

const TrustedByFoundersSection = () => {
    const stats = [
        { value: "3,000+", label: "Apps built", colorClass: styles.cyanGlow },
        { value: "98%", label: "Client satisfaction", colorClass: styles.purpleGlow },
        { value: "450+", label: "Clients worldwide", colorClass: styles.pinkGlow },
        { value: "10+", label: "Years in business", colorClass: styles.blueGlow }
    ];

    const testimonials = [
        {
            quote: "We tried two DIY builders first and wasted four months. Appsters shipped the real thing in ten weeks — and it actually scales.",
            initials: "MR",
            name: "Maria Reyes",
            title: "Founder, HealthLoop",
            avatarColor: styles.avatarBlue1
        },
        {
            quote: "Our app drove half a million in new revenue the first year. Best money this company has ever spent, full stop.",
            initials: "DK",
            name: "Daniel Kerr",
            title: "CEO, Loop Commerce",
            avatarColor: styles.avatarBlue2
        },
        {
            quote: "Transparent, documented, on time. I always knew what was happening. It felt like an in-house team, not an agency.",
            initials: "PA",
            name: "Priya Anand",
            title: "Head of Product, FitWave",
            avatarColor: styles.avatarBlue3
        }
    ];

    const companies = ["HealthLoop", "Loop Commerce", "FitWave", "Nimbus", "Cargomatic", "Verdant"];

    return (
        <section className={styles.trustedSection} id="results">
            <div className="container">
                <motion.div className={styles.header} {...staggerContainer(0.1)}>
                    <motion.div className={styles.subtitle} variants={staggerItem('up')}>
                        <span className={styles.dot}></span>
                        TRUSTED BY FOUNDERS
                    </motion.div>
                    <motion.h2 className={styles.title} variants={staggerItem('up')}>
                        The numbers — and the people <span className={styles.glowTextCyan}>behind them.</span>
                    </motion.h2>
                </motion.div>

                <motion.div className={styles.statsGrid} {...staggerContainer(0.1)}>
                    {stats.map((stat, index) => (
                        <motion.div className={styles.statCard} key={index} variants={staggerItem('scale')}>
                            <h3 className={`${styles.statValue} ${stat.colorClass}`}>{stat.value}</h3>
                            <p className={styles.statLabel}>{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div className={styles.testimonialsGrid} {...staggerContainer(0.12)}>
                    {testimonials.map((testi, index) => (
                        <motion.div className={styles.testimonialCard} key={index} variants={staggerItem('up', 36)}>
                            <div className={styles.stars}>
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FFC107" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                    </svg>
                                ))}
                            </div>
                            <p className={styles.quote}>&ldquo;{testi.quote}&rdquo;</p>
                            <div className={styles.author}>
                                <div className={`${styles.avatar} ${testi.avatarColor}`}>
                                    {testi.initials}
                                </div>
                                <div className={styles.authorInfo}>
                                    <h4 className={styles.authorName}>{testi.name}</h4>
                                    <p className={styles.authorTitle}>{testi.title}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div className={styles.companiesRow} {...reveal('up')}>
                    {companies.map((company, index) => (
                        <span className={styles.companyName} key={index}>{company}</span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TrustedByFoundersSection;
