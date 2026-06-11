"use client"
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ComparisonSection.module.css';
import { reveal, staggerContainer, staggerItem } from '../_shared/motion';

const ComparisonSection = () => {
    const comparisonData = [
        { feature: "Customisation", diy: "Locked to templates", appsters: "Unlimited, pixel-perfect" },
        { feature: "Performance", diy: "Slow, bloated wrappers", appsters: "Native-grade speed" },
        { feature: "Scalability", diy: "Breaks past a few thousand users", appsters: "Built for millions" },
        { feature: "True cost", diy: "Hidden monthly fees forever", appsters: "You own the code" },
        { feature: "Support", diy: "Help docs & a ticket queue", appsters: "Dedicated team, design to launch" },
        { feature: "Time to a real launch", diy: "Months of trial & error", appsters: "Shipped in as little as 12 weeks" }
    ];

    return (
        <section className={styles.comparisonSection} id="why">
            <div className="container">
                <motion.div className={styles.header} {...staggerContainer(0.1)}>
                    <motion.div className={styles.subtitle} variants={staggerItem('up')}>
                        <span className={styles.dot}></span>
                        THE DIY TRAP
                    </motion.div>
                    <motion.h2 className={styles.title} variants={staggerItem('up')}>
                        DIY app builders feel cheap —<br />
                        <span className={styles.glowTextPink}>until they aren&apos;t.</span>
                    </motion.h2>
                    <motion.p className={styles.description} variants={staggerItem('up')}>
                        AppyPie, BuildFire and the rest get you a demo. They rarely get you a business. Here&apos;s the honest comparison.
                    </motion.p>
                </motion.div>

                <motion.div className={styles.tableWrapper} {...reveal('up', 0.1)}>
                    <div className={styles.tableHeader}>
                        <div className={styles.colFeature}>
                            <h4>What actually matters</h4>
                            <p>The things that decide if your app survives</p>
                        </div>
                        <div className={styles.colDiy}>
                            <div className={styles.colTitleWrapper}>
                                <h4>DIY Builders</h4>
                                <div className={styles.badges}>
                                    <span className={styles.smallBadge}>APPYPIE</span>
                                    <span className={styles.smallBadge}>BUILDFIRE</span>
                                </div>
                            </div>
                            <p>Template-based, self-serve</p>
                        </div>
                        <div className={styles.colAppsters}>
                            <div className={styles.colTitleWrapper}>
                                <h4>Appsters</h4>
                                <span className={styles.agencyBadge}>AGENCY</span>
                            </div>
                            <p>Custom-built by experts</p>
                        </div>
                    </div>

                    <motion.div className={styles.tableBody} {...staggerContainer(0.08)}>
                        {comparisonData.map((row, index) => (
                            <motion.div className={styles.tableRow} key={index} variants={staggerItem('up', 24)}>
                                <div className={styles.colFeature}>
                                    <span className={styles.featureName}>{row.feature}</span>
                                </div>
                                <div className={styles.colDiy}>
                                    <div className={styles.crossIcon}>×</div>
                                    <span>{row.diy}</span>
                                </div>
                                <div className={styles.colAppsters}>
                                    <div className={styles.checkIcon}>✓</div>
                                    <span>{row.appsters}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ComparisonSection;
