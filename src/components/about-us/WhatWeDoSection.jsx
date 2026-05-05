import React from 'react';
import styles from './WhatWeDoSection.module.css';

export default function WhatWeDoSection() {
  const services = [
    {
      title: "MOBILE APP DEVELOPMENT",
      description: "We build high-performance Android and iOS applications designed for speed, usability, and scalability."
    },
    {
      title: "WEB DEVELOPMENT",
      description: "Modern, responsive, and scalable web platforms tailored to your business goals and user needs."
    },
    {
      title: "CUSTOM SOFTWARE SOLUTIONS",
      description: "Tailor-made systems built to solve complex business challenges and optimize operations."
    },
    {
      title: "UI/UX DESIGN",
      description: "Human-centered design systems that enhance user engagement and create seamless digital experiences."
    },
    {
      title: "PRODUCT STRATEGY & CONSULTING",
      description: "We help shape your idea into a validated product roadmap with clear market direction and technical feasibility."
    }
  ];

  return (
    <section className={styles.whatWeDoSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.leftSide}>
          <div className={styles.headingWrapper}>
            <span className={styles.transparentHeading}>WHAT WE DO</span>
            <h2 className={styles.mainHeading}>
              HOW WE BUILD <span className={styles.highlight}>DIGITAL</span> <span className={styles.highlight}>EXPERIENCES</span>
            </h2>
          </div>

          <div className={styles.contentWrapper}>
            <p className={styles.paragraph}>
              We specialize in end-to-end digital product development, guiding businesses through every stage of the product lifecycle—from initial concept and strategy to design, development, deployment, and ongoing optimization. Our approach is focused on transforming raw ideas into fully functional, high-performing, and market-ready digital applications that are built for real-world impact.
            </p>
            <p className={styles.paragraph}>
              We combine user-centered design, modern engineering practices, and scalable architecture to ensure every product we build is intuitive, reliable, and future-ready. Whether it's a mobile app, web platform, or complex digital system, we help businesses validate ideas, refine features, and deliver solutions that are not only technically strong but also aligned with user needs and business goals.
            </p>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.cardsWrapper}>
            {services.map((service, index) => (
              <div key={index} className={styles.card}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardText}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
