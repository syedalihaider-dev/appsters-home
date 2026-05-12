import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './FeaturesDetailSection.module.css';

export default function FeaturesSection({ data }) {
  if (!data) return null;
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
                <span className={styles.transparentHeading}>{data.transparentHeading}</span>
                <h2>{data.title}</h2>
              </div>

              <div className={styles.featuresList}>
                {data.list && data.list.map((item, index) => (
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
                {/* <Link href="#" className={styles.badgeLink}>
                  <Image src="/images/case-study/google-play.webp" alt="Get it on Google Play" width={159} height={47} />
                </Link>
                <Link href="#" className={styles.badgeLink}>
                  <Image src="/images/case-study/app-store.webp" alt="Download on the App Store" width={141} height={47} />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.featureImageWrapper}>
        <Image
          src={data.image}
          alt={`${data.title} Features`}
          width={1004}
          height={854}
          className={styles.featureImage}
        />
      </div>
    </section>
  );
}
