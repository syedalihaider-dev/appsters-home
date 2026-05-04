import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './FeaturesDetailSection.module.css';

const featuresList = [
  {
    title: "Easy Contest Entry",
    desc: "Jump into competitions in seconds. No complicated setup, no industry connections.",
    icon: "/images/case-study-detail/icon-01.webp"
  },
  {
    title: "Upload Your Performance",
    desc: "Put your best track forward and let it speak for itself.",
    icon: "/images/case-study-detail/icon-02.webp"
  },
  {
    title: "Fair Voting System",
    desc: "Fan-driven. Transparent. No backroom deals.",
    icon: "/images/case-study-detail/icon-03.webp"
  },
  {
    title: "Real Cash Rewards",
    desc: "Your talent deserves more than likes. Win and actually get paid.",
    icon: "/images/case-study-detail/icon-04.webp"
  }
];

export default function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.bgDecor}>
        <Image
          src="/images/appsters-shape-decor.png"
          alt="Appsters Shape Image"
          width={979}
          height={916}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6"></div>
          <div className="col-lg-6">
            <div className={styles.rightContent}>
              <div className={styles.titleWrapper}>
                <span className={styles.transparentHeading}>FEATURES</span>
                <h2>KEY HIGHLIGHTS OF MIC2MONEY</h2>
              </div>

              <div className={styles.featuresList}>
                {featuresList.map((item, index) => (
                  <div key={index} className={styles.featureItem}>
                    <div className={styles.iconWrapper}>
                      <Image src={item.icon} alt={item.title} width={48} height={48} style={{ objectFit: 'contain' }} />
                    </div>
                    <div className={styles.featureText}>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
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
        </div>
      </div>
      <div className={styles.featureImageWrapper}>
        <Image
          src="/images/case-study-detail/features.webp"
          alt="Mic2Money Features"
          width={1004}
          height={854}
          className={styles.featureImage}
        />
      </div>
    </section>
  );
}
