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
      question: "How does Appsters approach a new product from scratch?",
      answer:
        "Every engagement starts with a full scope session before any sprint is opened. We map the product's core mechanic, user flows, technical requirements, and growth trajectory in that order. What ships first is always intentional, never arbitrary.",
    },
    {
      question: "Do you build for iOS, Android, or both?",
      answer:
        "Both when it matters. We build natively and cross-platform, depending on the product's requirements. If your users are split across platforms and the core experience depends on performance-critical interactions, we scope accordingly. We don't default to one answer.",
    }, {
      question: "What does scalability actually mean in your process?",
      answer:
        "It means your architecture handles ten users and ten thousand users without a rebuild in between. We design database structures, API layers, and third-party integrations with future load in mind from day one. Scalability isn't an add-on. It's the starting assumption.",
    },
    {
      question: "Do you work with founders or only enterprise clients?",
      answer:
        "Both. We've built MVPs for first-time founders who had an idea and a deadline, and we've modernized infrastructure for enterprise teams held back by legacy systems. The process adapts. The quality standard doesn't.",
    },
    {
      question: "What makes a case study product different from a standard client project?",
      answer:
        "In several of our featured partnerships, Appsters holds a vested interest in the platform's long-term performance. That changes how decisions are made throughout the build. When the team has skin in the game, the product reflects that accountability at every layer.",
    },
    {
      question: "How long does a typical app build take with Appsters?",
      answer:
        "A focused MVP with a clean scope, a single core mechanic, and a tested, deployable product typically runs eight to fourteen weeks. Full product builds with complex backends, multiple user roles, and monetization layers vary based on scope. We give timeline estimates after the discovery session, not before.",
    }
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
