import React from 'react';
import Image from 'next/image';
import styles from './AppSolutionsSection.module.css';

export default function AppSolutionsSection() {
  const services = [
    { id: '01', title: 'MVP Development' },
    { id: '02', title: 'Mobile App Consulting' },
    { id: '03', title: 'Mobile UI/UX Design' },
    { id: '04', title: 'Mobile Frontend & Backend Development' },
    { id: '05', title: 'App Testing & QA' },
  ];

  return (
    <section className={styles.appSolutionsSection}>
      <Image
        src="/images/about-us/app-solutions.webp"
        alt="App Solutions"
        fill
        className={styles.bgImg}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className={styles.heading}>
              ROBUST MOBILE APP SOLUTIONS<br />
              THAT GROW WITH YOUR <br />
              <span className={styles.highlight}>BUSINESS CURVE</span>
            </h2>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/about-us/global-reflex.webp"
                alt="Mobile App Solutions"
                width={638}
                height={539}
                className={styles.image}
              />
            </div>
          </div>
          <div className="col-md-6">
            <p className={styles.paragraph}>
              As a custom app development company, we bring together leading app developers
              and strategists who understand what makes digital products thrive. From MVP
              mobile apps to pixel-perfect mobile apps UI/UX designing, and rigorous app testing,
              our mobile application development model is built for agility, scalability, and long-term performance.
            </p>
            <div className={styles.servicesList}>
              {services.map((service, index) => (
                <div key={index} className={styles.serviceItem}>
                  <h4 className={styles.serviceId}>{service.id}</h4>
                  <h4 className={styles.serviceTitle}>{service.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
