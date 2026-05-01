"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./FAQSection.module.css";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How long does it take to build a mobile app?",
      answer:
        "Most projects take 12–20 weeks, including planning, design, development, and testing, but we accelerate delivery through agile sprints and parallel workflows.",
    },
    {
      question: "Do you sign NDAs for web and app projects?",
      answer:
        "Yes. We protect your intellectual property with strict NDAs, secured data handling, and compliance protocols to ensure your idea stays confidential from kickoff to launch.",
    },
    {
      question: "Can I start with MVP development first?",
      answer:
        "Yes, we provide end-to-end maintenance, bug fixes, and performance optimization, ensuring your app runs smoothly and stays updated with the latest OS and security requirements.",
    },
    {
      question: "What technologies and stacks do you use?",
      answer:
        "We work with React Native, Flutter, Swift, Kotlin, Node.js, and scalable cloud platforms, tailoring the tech stack to your project’s goals and future scalability.",
    },
    {
      question: "Do you offer post-launch support for apps?",
      answer:
        "Yes, we provide end-to-end maintenance, bug fixes, and performance optimization, ensuring your app runs smoothly and stays updated with the latest OS and security requirements.",
    },
    {
      question: "Do you offer post-launch support for apps?",
      answer:
        "Yes, we provide end-to-end maintenance, bug fixes, and performance optimization, ensuring your app runs smoothly and stays updated with the latest OS and security requirements.",
    },
    {
      question: "How do you handle app monetization?",
      answer:
        "We integrate in-app purchases, ads, subscriptions, or custom business models, ensuring a seamless user experience and data-driven revenue strategies that align with your app’s growth objectives.",
    },
  ];

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-sm-12 col-md-5">
            <div className={styles.sec_left}>
              <p className={styles.sub_heading}>Frequently Asked Questions</p>
              <h2 className={styles.title}>
                Your Questions, <br /><span className="primarytxt">Our Clarity</span>.
              </h2>
              <div className={styles.diamond}>
                <iframe
                  src="https://player.vimeo.com/video/1184219827?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                  title="diamond-animation"
                  className={styles.vimeo_video}
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className={styles.sec_right}>

              <div className={styles.faqs}>
                {faqs.map((item, index) => (
                  <div
                    key={index}
                    className={`${styles.faq_item} ${activeIndex === index ? styles.active : ""
                      }`}
                  >
                    <div
                      className={styles.item_heading}
                      onClick={() => toggleFAQ(index)}
                    >
                      <h6>{item.question}</h6>

                      <div
                        className={`${styles.arrow} ${activeIndex === index ? styles.rotate : ""
                          }`}
                      >
                        <Image
                          src="/images/faqs-arrow.png"
                          alt="Faqs Arrow"
                          fill
                          sizes="100vw"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    </div>

                    <div
                      className={`${styles.item_body} ${activeIndex === index ? styles.open : ""
                        }`}
                    >
                      <p className={styles.para}>{item.answer}</p>
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
}
