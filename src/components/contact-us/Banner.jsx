"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    msg: '',
    pageTitle: 'Contact Us Banner',
    pageUrl: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setFormData(prev => ({ ...prev, pageUrl: window.location.href }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push('/thank-you');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name*"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address*"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number*"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      name="budget"
                      placeholder="Project Budget"
                      required
                      value={formData.budget}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <textarea
                      name="msg"
                      placeholder="Tell us about your Requirements*"
                      rows="4"
                      required
                      value={formData.msg}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                    <span>{isSubmitting ? 'Sending...' : 'Submit'}</span>
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

