"use client"
import React from 'react';
import { motion } from 'framer-motion';
import styles from './RealResultsSection.module.css';
import { staggerContainer, staggerItem } from '../_shared/motion';

const RealResultsSection = () => {
    const cards = [
        {
            badge: "REAL TALK",
            accent: styles.accentCyan,
            screen: styles.screenCyan,
            story: "A clear, honest brand voice and a frictionless onboarding flow turned curious first-timers into daily regulars within weeks of launch.",
            metrics: [
                { value: "10K+", label: "Downloads in month one" },
                { value: "-38%", label: "Onboarding drop-off" }
            ]
        },
        {
            badge: "ECOMMERCE",
            accent: styles.accentPink,
            screen: styles.screenPink,
            story: "A rebuilt native checkout and edge-fast performance lifted conversion and unlocked a serious new revenue line in the first year.",
            metrics: [
                { value: "$500K+", label: "New revenue, year one" },
                { value: "3.2x", label: "Return on investment" }
            ]
        },
        {
            badge: "FITNESS",
            accent: styles.accentBlue,
            screen: styles.screenBlue,
            story: "Streaks, smart reminders and a live community feed kept members coming back — and kept the App Store ratings glowing.",
            metrics: [
                { value: "50K+", label: "Active members" },
                { value: "4.9", label: "Avg. App Store rating" }
            ]
        }
    ];

    return (
        <section className={styles.resultsSection} id="results-proof">
            <div className="container">
                <motion.div className={styles.header} {...staggerContainer(0.1)}>
                    <motion.div className={styles.subtitle} variants={staggerItem('up')}>
                        <span className={styles.dot}></span>
                        PROOF, NOT PROMISES
                    </motion.div>
                    <motion.h2 className={styles.title} variants={staggerItem('up')}>
                        Real apps. <span className={styles.glowCyan}>Real results.</span>
                    </motion.h2>
                    <motion.p className={styles.description} variants={staggerItem('up')}>
                        A look at what happens when a great idea meets a professional team.
                    </motion.p>
                </motion.div>

                <motion.div className={styles.cardsGrid} {...staggerContainer(0.12, 0.05)}>
                    {cards.map((card, index) => (
                        <motion.div className={styles.card} key={index} variants={staggerItem('up', 40)}>
                            <div className={`${styles.deviceArea} ${card.accent}`}>
                                <div className={styles.phone}>
                                    <div className={styles.notch}></div>
                                    <div className={`${styles.screen} ${card.screen}`}></div>
                                </div>
                            </div>

                            <div className={styles.cardBody}>
                                <span className={`${styles.badge} ${card.accent}`}>{card.badge}</span>
                                <span className={styles.storyLabel}>THE STORY</span>
                                <p className={styles.story}>{card.story}</p>

                                <div className={styles.metricsRow}>
                                    {card.metrics.map((m, i) => (
                                        <div className={styles.metric} key={i}>
                                            <span className={`${styles.metricValue} ${card.accent}`}>{m.value}</span>
                                            <span className={styles.metricLabel}>{m.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default RealResultsSection;
