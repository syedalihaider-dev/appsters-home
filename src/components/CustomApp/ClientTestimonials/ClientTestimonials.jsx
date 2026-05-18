import React from 'react';
import Image from 'next/image';
import styles from './ClientTestimonials.module.css';

const stats = [
  { id: 1, number: '10K+', label: 'Live Business' },
  { id: 2, number: '180+', label: 'Countries' },
  { id: 3, number: '5M+', label: 'Users' }
];

const testimonials = [
  {
    id: 1,
    logo: '/images/custom-app/client-brocarz.png',
    text: 'Shopify Web Developers offered helpful advice, shared creative ideas, and delivered fantastic results.',
    name: 'Mary Kaumeyer',
    company: 'Bro Carz'
  },
  {
    id: 2,
    logo: '/images/custom-app/client-hope.png',
    text: 'Shopify Web Developers has been amazing in the implementation of Hope 4 You app. Great job to App Maestros',
    name: 'Sherri Reid',
    company: 'Hope 4 You'
  },
  {
    id: 3,
    logo: '/images/custom-app/client-gogo.png',
    text: 'The technology works consistently, and the web app launched successfully. Shopify Web Developers was professional, responsive, and maintained strong work ethic throughout the process',
    name: 'John Williams',
    company: 'Go Go Geezers'
  }
];

const infiniteTestimonials = [...testimonials, ...testimonials];

const ClientTestimonials = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Serving Client All Over The World</h2>
        <p className={styles.subtitle}>
          Customers in over 180 countries are growing their businesses with Silicongraphics.
        </p>

        <div className={styles.mapContainer}>
          <div className={styles.mapBgWrapper}>
            <Image
              src="/images/custom-app/globeImg.svg"
              alt="World Map"
              fill
              className={styles.mapBg}
            />
          </div>

          <div className={styles.statsWrapper}>
            {stats.map((stat, i) => (
              <div key={i} className={`${styles.statBox} ${i === 1 ? styles.middleBox : ''}`}>
                <h3 className={styles.statNumber}>{stat.number}</h3>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>

          <div className={styles.sliderSection}>
            <h3 className={styles.clientsSayTitle}>
              What Client Say<br />About Us
            </h3>

            <div className={styles.sliderContainer}>
              <div className={styles.sliderTrack}>
                {infiniteTestimonials.map((t, i) => (
                  <div key={i} className={styles.testimonialCard}>
                    <div className={styles.cardLogo}>
                      <Image src={t.logo} alt={t.company} width={153} height={153} />
                    </div>
                    <div className={styles.stars}>
                      ★★★★★
                    </div>
                    <p className={styles.cardText}>"{t.text}"</p>
                    <div className={styles.cardAuthor}>
                      <strong>- {t.name}</strong>
                      <span>{t.company}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
