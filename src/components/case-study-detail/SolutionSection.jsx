import React from 'react';
import Image from 'next/image';
import styles from './SolutionSection.module.css';

export default function SolutionSection() {
    return (
        <section className={`sec_padding ${styles.solutionSection}`}>
            <Image
                src="/images/case-study-detail/solution-bg.webp"
                alt="Main Banner Image..."
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
                className={styles.bannerBg}
            />
            <div className={styles.bgTextLeft}>CREATIVE AGENCY</div>
            <div className="container position-relative">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className={styles.leftContent}>
                            <Image
                                src="/images/case-study-detail/iphone-cta.webp"
                                alt="Mic2Money Solution App Screen"
                                width={582}
                                height={675}
                                className={styles.mockupImage}
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.rightContent}>
                            <div className={styles.titleWrapper}>
                                <span className={styles.transparentHeading}>THE SOLUTION</span>
                                <h2>A PLATFORM WHERE TALENT MEETS OPPORTUNITY</h2>
                            </div>
                            <div className={styles.textContent}>
                                <p>
                                    Mic2Money flips the system. Instead of relying on gatekeepers, it gives power directly to the audience. Artists compete in live contests, fans vote to decide winners, and both sides are rewarded for participation.
                                </p>
                                <p className={styles.info}>
                                    This creates a transparent, engaging ecosystem where:
                                </p>
                                <ul>
                                    <li>Artists grow based on merit</li>
                                    <li>Fans become part of the journey</li>
                                    <li>Talent is recognized in real time</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
