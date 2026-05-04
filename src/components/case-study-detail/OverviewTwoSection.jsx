import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './OverviewTwoSection.module.css';

export default function OverviewTwoSection() {
    return (
        <section className={`sec_padding ${styles.overviewSection}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className={styles.leftContent}>
                            <div className={styles.titleWrapper}>
                                <span className={styles.transparentHeading}>The Problem</span>
                                <h2>Breaking Through Without Industry Access</h2>
                            </div>
                            <div className={styles.textContent}>
                                <p>
                                    Emerging artists struggle to get visibility without industry connections, labels, or viral luck. Traditional platforms prioritize algorithms over authenticity, making it harder for real talent to stand out.
                                    <br /><br />
                                    Fans, on the other hand, consume music passively — with no real influence or reward for discovering talent early.
                                </p>
                            </div>
                            <div className={styles.storeBadges}>
                                <Link href="#" className={styles.badgeLink}>
                                    <Image src="/images/case-study-detail/google-play.webp" alt="Get it on Google Play" width={159} height={47} />
                                </Link>
                                <Link href="#" className={styles.badgeLink}>
                                    <Image src="/images/case-study-detail/app-store.webp" alt="Download on the App Store" width={141} height={47} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.rightContent}>
                            <Image
                                src="/images/case-study-detail/choose-role.webp"
                                alt="Mic2Money App Screens"
                                width={648}
                                height={768}
                                className={styles.mockupImage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
