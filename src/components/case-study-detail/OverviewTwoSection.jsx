import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './OverviewTwoSection.module.css';

export default function OverviewTwoSection({ data }) {
    if (!data) return null;
    return (
        <section className={`sec_padding ${styles.overviewSection}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className={styles.leftContent}>
                            <div className={styles.titleWrapper}>
                                <span className={styles.transparentHeading}>{data.transparentHeading}</span>
                                <h2>{data.title}</h2>
                            </div>
                            <div className={styles.textContent}>
                                <p dangerouslySetInnerHTML={{ __html: data.text || "" }}>
                                </p>
                            </div>
                            <div className={styles.storeBadges}>
                                {/* <Link href="#" className={styles.badgeLink}>
                                    <Image src="/images/case-study/google-play.webp" alt="Get it on Google Play" width={159} height={47} />
                                </Link>
                                <Link href="#" className={styles.badgeLink}>
                                    <Image src="/images/case-study/app-store.webp" alt="Download on the App Store" width={141} height={47} />
                                </Link> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.rightContent}>
                            <Image
                                src={data.image}
                                alt={`${data.title} App Screens`}
                                width={595}
                                height={737}
                                className={styles.mockupImage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
