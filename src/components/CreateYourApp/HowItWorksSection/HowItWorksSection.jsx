"use client"
import React from 'react';
import { motion } from 'framer-motion';
import styles from './HowItWorksSection.module.css';
import { staggerContainer, staggerItem } from '../_shared/motion';

const HowItWorksSection = () => {
    const steps = [
        {
            id: 1,
            title: "Discovery & Strategy",
            desc: "We map your goals, users and market to lock the right scope.",
            duration: "~1 week",
            colorClass: styles.colorBlue,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            )
        },
        {
            id: 2,
            title: "Design & Wireframing",
            desc: "Clickable prototypes & UI you approve before a line of code.",
            duration: "2 - 3 weeks",
            colorClass: styles.colorPurple,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
            )
        },
        {
            id: 3,
            title: "Development",
            desc: "Native & cross-platform builds in fast, visible sprints.",
            duration: "8 - 10 weeks",
            colorClass: styles.colorPink,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
            )
        },
        {
            id: 4,
            title: "Testing & QA",
            desc: "Real-device testing, performance & security hardening.",
            duration: "1 - 2 weeks",
            colorClass: styles.colorCyan,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
            )
        },
        {
            id: 5,
            title: "Launch & Support",
            desc: "Store submission, monitoring & ongoing improvements.",
            duration: "Ongoing",
            colorClass: styles.colorLightBlue,
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
            )
        }
    ];

    return (
        <section className={styles.howItWorksSection} id="process">
            <div className="container">
                <motion.div className={styles.header} {...staggerContainer(0.1)}>
                    <motion.div className={styles.subtitle} variants={staggerItem('up')}>
                        <span className={styles.dot}></span>
                        HOW IT WORKS
                    </motion.div>
                    <motion.h2 className={styles.title} variants={staggerItem('up')}>
                        A clear path from <span className={styles.glowCyan}>idea</span> to <span className={styles.glowPink}>App Store.</span>
                    </motion.h2>
                    <motion.p className={styles.description} variants={staggerItem('up')}>
                        No black boxes. Five tight stages with you in the loop the whole way.
                    </motion.p>
                </motion.div>

                <div className={styles.timelineWrapper}>
                    <motion.div
                        className={styles.connectingLine}
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    ></motion.div>
                    <motion.div className={styles.stepsContainer} {...staggerContainer(0.14, 0.1)}>
                        {steps.map((step) => (
                            <motion.div className={styles.step} key={step.id} variants={staggerItem('up', 36)}>
                                <div className={`${styles.iconBox} ${step.colorClass}`}>
                                    <div className={styles.numberBadge}>{step.id}</div>
                                    <div className={styles.iconWrapper}>
                                        {step.icon}
                                    </div>
                                </div>
                                <h4 className={styles.stepTitle}>{step.title}</h4>
                                <p className={styles.stepDesc}>{step.desc}</p>
                                <span className={`${styles.stepDuration} ${step.colorClass}`}>
                                    {step.duration}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
