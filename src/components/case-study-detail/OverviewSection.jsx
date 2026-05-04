import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './OverviewSection.module.css';

export default function OverviewSection() {
  return (
    <section className={styles.overviewSection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className={styles.leftContent}>
              <div className={styles.titleWrapper}>
                <span className={styles.transparentHeading}>OVERVIEW</span>
                <h2>THE RISE OF MIC2MONEY</h2>
              </div>
              <div className={styles.textContent}>
                <p>
                  Mic2Money is built for artists who have already put in the work — the late nights, the recordings, the unseen performances. It transforms raw talent into opportunity by creating a space where artists compete live, grow real audiences, and earn from their craft.
                </p>
                <p>
                  At the same time, it empowers fans to become active participants — discovering emerging artists, influencing outcomes, and getting rewarded for backing talent early.
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
                src="/images/case-study-detail/mic2money.webp"
                alt="Mic2Money App Screens"
                width={571}
                height={708}
                className={styles.mockupImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
