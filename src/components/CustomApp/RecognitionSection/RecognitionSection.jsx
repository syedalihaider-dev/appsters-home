import React from 'react';
import Image from 'next/image';
import styles from './RecognitionSection.module.css';

const logos = [
  { id: 1, src: '/images/custom-app/clinticon1.jpg', alt: 'Trustpilot' },
  { id: 2, src: '/images/custom-app/clinticon2.jpg', alt: 'bark' },
  { id: 3, src: '/images/custom-app/clinticon3.jpg', alt: 'GoodFirms' },
  { id: 4, src: '/images/custom-app/clinticon4.jpg', alt: 'Clutch' },
  { id: 5, src: '/images/custom-app/clinticon5.jpg', alt: 'appfutura' },
];

const RecognitionSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className={styles.title}>
              Awarded Recognition On<br />Major App Review Platforms
            </h2>
            <div className={styles.headingLine}></div>
          </div>
        </div>

        <div className={styles.logosContainer}>
          {logos.map((logo, index) => (
            <React.Fragment key={logo.id}>
              <div className={styles.logoWrapper}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={212}
                  height={88}
                  className={styles.logoImg}
                />
              </div>
              {index < logos.length - 1 && <div className={styles.divider}></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
