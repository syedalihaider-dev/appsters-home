import React, { useState } from 'react';
import Image from 'next/image';
import styles from './FAQs.module.css';


const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqData = [
        {
            question: "How long does it take to build a mobile app?",
            answer: "Most projects take 12–20 weeks, including planning, design, development, and testing, but we accelerate delivery through agile sprints and parallel workflows."
        },
        {
            question: "Do you sign NDAs for web and app projects?",
            answer: "Yes. We protect your intellectual property with strict NDAs, secured data handling, and compliance protocols to ensure your idea stays confidential from kickoff to launch."
        },
        {
            question: "Can I start with MVP development first?",
            answer: "Yes. MVPs help validate concepts, collect real user feedback, and save costs before committing to full-scale builds, reducing the risk of expensive pivots later."
        },
        {
            question: "What technologies and stacks do you use?",
            answer: "We work with React Native, Flutter, Swift, Kotlin, Node.js, and scalable cloud platforms, tailoring the tech stack to your project’s goals and future scalability"
        },
        {
            question: "Do you offer post-launch support for apps?",
            answer: "Yes, we provide end-to-end maintenance, bug fixes, and performance optimization, ensuring your app runs smoothly and stays up to date with the latest OS and security requirements"
        },
        {
            question: "How do you handle app monetization?",
            answer: "We integrate in-app purchases, ads, subscriptions, or custom business models, ensuring a seamless user experience and data-driven revenue strategies that align with your app’s growth objectives."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className={styles.faqSection}>
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-5 col-md-12">
                        <div className={styles.leftContent}>
                            <h2 className={styles.title}>
                                Frequently <br />
                                Asked <span className={styles.highlight}>
                                    Questions
                                    <Image
                                        src="/images/mobile-app-studio/spring-vector.png"
                                        alt="line"
                                        width={424}
                                        height={22}
                                        className={styles.spring}
                                    />
                                </span>
                            </h2>
                            <p className={styles.description}>
                                You have questions about building scalable, market-dominating tech, and we
                                have straightforward answers. From iOS, Android, web, and gaming apps toAI-driven platforms, we deliver solutions designed for scale, speed, and
                                future-ready outcomes.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className={styles.faqWrapper}>
                            {faqData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <div className={styles.faqHeader}>
                                        <h3 className={styles.question}>{item.question}</h3>
                                        <div className={styles.iconWrapper}>
                                            <Image
                                                src="/images/mobile-app-studio/faq-arrow.png"
                                                alt="arrow"
                                                width={16}
                                                height={16}
                                                className={styles.arrowIcon}
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.faqBody} style={{
                                        maxHeight: activeIndex === index ? '500px' : '0',
                                        opacity: activeIndex === index ? 1 : 0
                                    }}>
                                        <p className={styles.answer}>{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQs;
