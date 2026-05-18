import React from 'react';
import Image from 'next/image';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <section className={styles.bannerSection}>
      <Image src="/images/custom-app/banner-bg.jpg" alt="Backgroud Image..." fill priority className={styles.bgImg} />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-7 mb-5 mb-lg-0 position-relative z-2" style={{ zIndex: 2 }}>
            <h1 className={styles.title}>
              Top-ranking Mobile App <br />
              Development Company
            </h1>
            <p className={styles.description}>
              We dive headfirst into today's dynamic market's challenges to provide robust,
              scalable, & outcome-oriented mobile app development solutions (iOS & Android)
              to help businesses scale.
            </p>

            <div className={`d-flex flex-wrap gap-3 ${styles.actionBtns}`}>
              <a href="#contactSection" className={`${styles.quoteBtn} text-decoration-none`}>
                Request a Quote
              </a>
              <button className={`${styles.chatBtn} chat`}>
                Live Chat
              </button>
            </div>

            <div className={styles.reviewsWrapper}>
              <Image src="/images/custom-app/bnr-logo.png" alt="GoodFirms" width={455} height={114} className={styles.reviewLogo} />
            </div>
          </div>

          <div className="col-12 col-lg-5 position-relative z-1 text-center text-lg-end">
            <div className={styles.imageWrapper}>
              <div className={styles.shapeBg}>
                <Image
                  src="/images/custom-app/bnr-side-bf.png"
                  alt="Background Shape"
                  width={684} height={573}
                  className={styles.shapeImg}
                />
              </div>
              <Image
                src="/images/custom-app/bnr-side-img.png"
                alt="Mobile App Development"
                width={495}
                height={428}
                className={`img-fluid ${styles.mainImg}`}
              />
            </div>
          </div>
        </div>

        <div className={styles.statsBar}>
          <ul>
            <li>
              <h3 className={styles.statNumber}>650+</h3>
              <p className={styles.statText}>Applications Developed and<br />Designed</p>
            </li>
            <li>
              <h3 className={styles.statNumber}>590+</h3>
              <p className={styles.statText}>In-house App Development<br />Team & Software Engineers</p>
            </li>
            <li>
              <h3 className={styles.statNumber}>10+</h3>
              <p className={styles.statText}>Providing Mobile App Service<br />Since 2008</p>
            </li>
            <li>
              <h3 className={styles.statNumber}>450+</h3>
              <p className={styles.statText}>Satisfied Mobile App Clients in<br />All Over Globe</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Banner;
