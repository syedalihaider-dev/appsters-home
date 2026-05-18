import React from 'react';
import Image from 'next/image';
import styles from './ServiceCardsSlider.module.css';

const services = [
  { id: 1, title: "Application\nDevelopment", icon: "/images/custom-app/serv-icon-1.png" },
  { id: 2, title: "E-commerce\nDevelopment", icon: "/images/custom-app/serv-icon-2.png" },
  { id: 3, title: "Game\nDevelopment", icon: "/images/custom-app/serv-icon-3.png" },
  { id: 4, title: "Web\nDevelopment", icon: "/images/custom-app/serv-icon-4.png" },
  { id: 5, title: "MVP\nDevelopment", icon: "/images/custom-app/serv-icon-5.png" },
  { id: 6, title: "Startup &\nEnterprises", icon: "/images/custom-app/serv-icon-6.png" },
];

const ServiceCardsSlider = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>
          Shopify Web Developers Provides Custom-Built Pioneer Digital Mobile<br className="d-none d-lg-block" />
          App Development Solutions<br className="d-none d-lg-block" />
          That Aim To Acquire Customers' Loyalty & Trust.
        </h2>

        <div className={styles.sliderWrapper}>
          <div className={styles.cardsContainer}>
            {services.map((service) => (
              <div key={service.id} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Image src={service.icon} alt={service.title.replace('\n', ' ')} width={70} height={70} />
                </div>
                <h3 className={styles.cardTitle}>
                  {service.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i !== service.title.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCardsSlider;
