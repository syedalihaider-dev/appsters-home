import React from 'react';
import styles from './ComparisonSection.module.css';

const ComparisonSection = () => {
    const comparisonData = [
        {
            feature: "Customisation",
            diy: "Locked to templates",
            appsters: "Unlimited, pixel-perfect"
        },
        {
            feature: "Performance",
            diy: "Slow, bloated wrappers",
            appsters: "Native-grade speed"
        },
        {
            feature: "Scalability",
            diy: "Breaks past a few thousand users",
            appsters: "Built for millions"
        },
        {
            feature: "True cost",
            diy: "Hidden monthly fees forever",
            appsters: "You own the code"
        },
        {
            feature: "Support",
            diy: "Help docs & a ticket queue",
            appsters: "Dedicated team, design to launch"
        },
        {
            feature: "Time to a real launch",
            diy: "Months of trial & error",
            appsters: "Shipped in as little as 12 weeks"
        }
    ];

    return (
        <section className={styles.comparisonSection}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.subtitle}>
                        <span className={styles.dot}></span>
                        THE DIY TRAP
                    </div>
                    <h2 className={styles.title}>
                        DIY app builders feel cheap —<br />
                        <span className={styles.glowTextPink}>until they aren't.</span>
                    </h2>
                    <p className={styles.description}>
                        AppyPie, BuildFire and the rest get you a demo. They rarely get you a business. Here's the honest comparison.
                    </p>
                </div>

                <div className={styles.tableWrapper}>
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

                    <div className={styles.tableBody}>
                        {comparisonData.map((row, index) => (
                            <div className={styles.tableRow} key={index}>
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
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;
