"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./FAQSection.module.css";

export default function FAQSection({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const middle = Math.ceil(faqs.length / 2);
  const faqsLeft = faqs.slice(0, middle);
  const faqsRight = faqs.slice(middle);

  return (
    <section className={`${styles.faq_section} sec_padding`}>
      <Image
        src="/faqs-bg.png"
        alt="FAQs Bg Image"
        fill
        style={{ objectFit: "cover" }}
        className={styles.bannerBg}
      />
      <div className="container">
        <div className={styles.sec_top}>
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h2>Frequently Asked Questions</h2>
            </div>
          </div>
        </div>
        <div className={styles.sec_content}>
          <div className="row">
            <div className="col-md-6">
              {faqsLeft.map((faq, index) => (
                <div
                  key={index}
                  className={`${styles.box} ${openIndex === index ? styles.active : ""}`}
                >
                  <div
                    className={styles.heading}
                    onClick={() => toggleFAQ(index)}
                  >
                    <strong>{faq.question}</strong>
                    <span
                      className={`${styles.icon} ${openIndex === index ? styles.rotate : ""}`}
                    ></span>
                  </div>
                  <div
                    className={`${styles.answer} ${openIndex === index ? styles.open : ""}`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-6">
              {faqsRight.map((faq, index) => {
                const actualIndex = index + middle;
                return (
                  <div
                    key={actualIndex}
                    className={`${styles.box} ${openIndex === actualIndex ? styles.active : ""}`}
                  >
                    <div
                      className={styles.heading}
                      onClick={() => toggleFAQ(actualIndex)}
                    >
                      <strong>{faq.question}</strong>
                      <span
                        className={`${styles.icon} ${openIndex === actualIndex ? styles.rotate : ""}`}
                      ></span>
                    </div>
                    <div
                      className={`${styles.answer} ${openIndex === actualIndex ? styles.open : ""}`}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}