import React from 'react';
import Image from 'next/image';
import styles from './AwardsSection.module.css';

const AwardsSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-8 text-center text-center">
            <h2 className={styles.title}>Best Mobile App Development Company!</h2>
            <p className={styles.subtitle}>
              We are a team of like-minded people in software & mobile app development at a single platform with a unified approach to craft the right solutions for the businesses.
            </p>
          </div>
          <div className="col-lg-4 text-center mt-4 mt-lg-0">
            <Image
              src="/images/custom-app/app-dev-phone.png"
              alt="Mobile App Development Company"
              width={495}
              height={307}
              className="img-fluid"
            />
          </div>
        </div>

        <div className={`row ${styles.awardsRow}`}>
          <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className={styles.awardItem}>
              <div className={styles.awardBadge}>
                <Image src="/images/custom-app/review-logo-01.png" alt="Clutch Review" width={181} height={145} className={styles.badgeImg} />
              </div>
              <div className={styles.awardDivider}></div>
              <div className={styles.awardText}>
                <h4>2026</h4>
                <p>Top Mobile App<br />Development<br />Company On Clutch</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className={styles.awardItem}>
              <div className={styles.awardBadge}>
                <Image src="/images/custom-app/review-logo-02.png" alt="GoodFirms Review" width={181} height={145} className={styles.badgeImg} />
              </div>
              <div className={styles.awardDivider}></div>
              <div className={styles.awardText}>
                <h4>2026</h4>
                <p>Top Mobile App<br />Development<br />Company On Good Firms</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mt-4 mt-md-0 mt-lg-0 mx-auto">
            <div className={styles.awardItem}>
              <div className={styles.awardBadge}>
                <Image src="/images/custom-app/review-logo-03.png" alt="AppFutura Review" width={181} height={145} className={styles.badgeImg} />
              </div>
              <div className={styles.awardDivider}></div>
              <div className={styles.awardText}>
                <h4>2026</h4>
                <p>Top Mobile App<br />Development<br />Company On App Futura</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
