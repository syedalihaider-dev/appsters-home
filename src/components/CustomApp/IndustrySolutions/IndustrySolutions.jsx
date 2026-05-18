import React from 'react';
import Image from 'next/image';
import styles from './IndustrySolutions.module.css';

const servicesLeft = [
  {
    id: 1,
    icon: "/images/custom-app/serv-icon-1.png",
    title: "Fintech Solution Development",
    desc: "Delivering cutting-edge, secure, and scalable fintech solution development tailored for modern financial services and digital banking."
  },
  {
    id: 2,
    icon: "/images/custom-app/serv-icon-2.png",
    title: "Live Sports & Fitness App Development",
    desc: "Providing the best sports app for iPhone & android for all sports enthusiasts out there."
  },
  {
    id: 3,
    icon: "/images/custom-app/serv-icon-3.png",
    title: "Grocery Mobile App Solutions",
    desc: "On-demand app for grocery delivery from the nearest supermarket, grocery store."
  }
];

const servicesRight = [
  {
    id: 4,
    icon: "/images/custom-app/serv-icon-4.png",
    title: "Healthcare Mobile Apps Development",
    desc: "Our hospital management solutions provide professionals & patients a robust."
  },
  {
    id: 5,
    icon: "/images/custom-app/serv-icon-5.png",
    title: "Restaurant Solution Development",
    desc: "Crafting seamless and intelligent restaurant solution development for modern dining experiences."
  },
  {
    id: 6,
    icon: "/images/custom-app/serv-icon-6.png",
    title: "Real Estate Mobile App Development",
    desc: "We help to grow your business with our tech-savvy real estate mobile app company."
  }
];

const IndustrySolutions = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-12">
            <h2 className={styles.mainTitle}>Industry-Specific Mobile App Development Solutions</h2>
            <div className={styles.headingLine}></div>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-12 col-lg-4">
            {servicesLeft.map((service) => (
              <div key={service.id} className={styles.serviceItemLeft}>
                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.desc}</p>
                  <a href="#contactSection" className={`${styles.quoteBtn} text-decoration-none`}>
                    <span className={styles.circle}></span>
                    REQUEST A QUOTE
                  </a>
                </div>
                <div className={styles.serviceIcon}>
                  <Image src={service.icon} width={70} height={70} alt={service.title} />
                </div>
              </div>
            ))}
          </div>

          <div className="col-12 col-lg-4 text-center my-5 my-lg-0">
            <div className={styles.phoneWrapper}>
              <Image
                src="/images/custom-app/mobile-screen.jpg"
                width={278}
                height={548}
                alt="Mobile App Dashboard"
                className={`img-fluid ${styles.phoneImg}`}
              />
              <div className={styles.shadowWrapper}>
                <Image
                  src="/images/custom-app/mobile-shadow.jpg"
                  width={611}
                  height={61}
                  alt="Shadow"
                  className={styles.shadowImg}
                />
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            {servicesRight.map((service) => (
              <div key={service.id} className={styles.serviceItemRight}>
                <div className={styles.serviceIcon}>
                  <Image src={service.icon} width={70} height={70} alt={service.title} />
                </div>
                <div className={styles.serviceContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDesc}>{service.desc}</p>
                  <a href="#contactSection" className={`${styles.quoteBtn} text-decoration-none`}>
                    <span className={styles.circle}></span>
                    REQUEST A QUOTE
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
