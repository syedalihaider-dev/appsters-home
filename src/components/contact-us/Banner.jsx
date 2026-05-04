import React from 'react';
import Link from 'next/link';
import styles from './Banner.module.css';

const checkList = [
  "Scalable Architecture",
  "End-to-End Data Security",
  "Intuitive User Experience",
  "Custom-Built Solutions",
  "Future-Ready Technology",
  "Cost-Effective Development",
  "Ongoing Support & Maintenance"
];

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#4CAF50" />
    <path d="M7 12.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Banner() {
  return (
    <section className={`sec_padding ${styles.bannerSection}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className={styles.leftContent}>
              <p className={styles.subHeading}>Let's Build Something You'll Love</p>
              <h1 className={styles.mainHeading}>
                WE EXCEL AT <span className={styles.highlight}>CRAFTING HIGH-QUALITY</span> APP SOLUTIONS BUILT AROUND YOUR UNIQUE NEEDS.
              </h1>
              <p className={styles.paragraph}>
                We design and develop high-quality, user-focused applications that are tailored to your unique business needs. From concept to deployment, our solutions are built for performance, scalability, and long-term success—ensuring your product not only works seamlessly but also delivers real value to your users and supports your growth.
              </p>
              <ul className={styles.checkList}>
                {checkList.map((item, index) => (
                  <li key={index}>
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <div className={styles.rightContent}>
              <div className={styles.formContainer}>
                <h2>LET'S TURN IDEAS INTO IMPACT.</h2>
                <form className={styles.contactForm}>
                  <div className={styles.inputGroup}>
                    <input type="text" placeholder="Full Name*" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <input type="email" placeholder="Email Address*" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <input type="tel" placeholder="Phone Number*" required />
                  </div>
                  <div className={styles.inputGroup}>
                    <input type="text" placeholder="Project Budget" />
                  </div>
                  <div className={styles.inputGroup}>
                    <textarea placeholder="Tell us about your Requirements*" rows="4" required></textarea>
                  </div>
                  <div className={styles.privacyText}>
                    We take your privacy seriously. Read our <Link href="/privacy-policy">Privacy Policy</Link>
                  </div>
                  <button type="submit" className={styles.submitBtn}>
                    <span>Submit</span>
                    <span className={styles.iconCircle}>
                      <ArrowRight />
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
