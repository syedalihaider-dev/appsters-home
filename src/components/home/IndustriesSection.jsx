"use client";
import { useState } from "react";
import Image from "next/image";
import ActionButtons from "@/components/ui/ActionButtons";
import styles from "./IndustriesSection.module.css";

export default function IndustriesSection() {
    const [active, setActive] = useState(0);

    const tabs = [
        {
            title: "Healthcare",
            img: "/images/industries/healthcare.webp",
            text: `We develop HIPAA-compliant healthcare apps that bridge doctors, patients, and data. From telemedicine to AI-powered diagnostics, our solutions improve workflows, reduce wait times, and empower smarter, faster decision-making. Every feature is designed to keep patient privacy airtight while driving measurable results for hospitals, clinics, and health-tech startups.`,
        },
        {
            title: "FinTech",
            img: "/images/industries/fintech.webp",
            text: `We co-create secure, compliant fintech apps that simplify payments, investments, and trading. From blockchain-backed wallets to AI fraud detection, our solutions prioritize speed, trust, and transparency. We help financial institutions and startups scale confidently, turning complex transactions into seamless user journeys with powerful analytics and risk-free automation.`,
        },
        {
            title: "Education",
            img: "/images/industries/education.webp",
            text: `Our education apps gamify learning, power virtual classrooms, and track student progress. We integrate AR/VR modules, quizzes, and real-time assessments to boost engagement. Schools, universities, and ed-tech startups leverage our platforms to personalize teaching, improve retention, and make learning as interactive and rewarding as social media scrolling.`,
        },
        {
            title: "Real Estate",
            img: "/images/industries/real-estate.webp",
            text: `We design real estate apps that help buyers, sellers, and agents close deals faster. AR-powered property tours, AI-driven recommendations, and secure document management streamline every step. Our platforms keep listings fresh, negotiations quick, and users delighted, turning real estate buying and selling into a guided, data-driven experience.`,
        },
        {
            title: "Automotive",
            img: "/images/industries/automotive.webp",
            text: `From fleet management dashboards to car rental apps, we digitize automotive operations. IoT sensors, real-time tracking, and predictive maintenance keep vehicles safer and downtime lower. Our solutions put dealerships, logistics providers, and automakers in the driver’s seat of efficiency, customer experience, and future mobility innovation.`,
        },
        {
            title: "Music",
            img: "/images/industries/music.webp",
            text: `We create streaming apps, artist marketplaces, and licensing solutions that let music businesses scale and monetize. AI-powered recommendations, offline playback, and fan engagement features keep listeners hooked. Our process covers rights management, secure distribution, and seamless playback to hit the perfect balance between creativity, tech, and revenue.`,
        },
        {
            title: "Social Media",
            img: "/images/industries/social-media.webp",
            text: `We build social media platforms that are scalable, sticky, and secure. AI-driven feeds, privacy-first chat systems, and live content features drive engagement. Our architecture ensures your platform can handle viral moments without crashing, giving creators, communities, and brands a digital stage to connect and grow.`,
        },
        {
            title: "Logistics",
            img: "/images/industries/logistics.webp",
            text: `We power logistics apps with route optimization, GPS tracking, and real-time inventory sync. Our solutions cut costs, eliminate bottlenecks, and ensure every delivery meets its deadline. Carriers, 3PLs, and warehouses rely on us to bring transparency, speed, and automation to complex supply chains across industries.`,
        },
        {
            title: "eCommerce",
            img: "/images/industries/ecommerce.webp",
            text: `We build ecommerce apps that sell more with frictionless checkouts, AI product recommendations, and mobile-first design. Our solutions handle scale effortlessly, from flash sales to global launches. Businesses get powerful dashboards, while shoppers get a personalized, smooth, and secure experience that turns carts into conversions.`,
        },
    ];

    return (
        <section className={styles.industriesSection}>
            <div className="container">
                <div className={styles.sec_top}>
                    <div className="row align-items-center justify-content-between">
                        <div className="col-sm-12 col-md-6">
                            <div className={styles.top_left}>
                                <h2 className={styles.title}>
                                    <span className="primarytxt">One Codebase. Infinite Industries.</span> Where Every Industry Finds Its Edge.
                                </h2>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className={styles.top_right}>
                                <p className={styles.para}>
                                    Our web, app, gaming, and AI solutions are built to perform, scale, and adapt while setting industry standards and redefining what’s possible for businesses everywhere.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.sec_content}>
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-3">
                            <div className={styles.sec_left}>
                                <ul>
                                    {tabs.map((t, i) => (
                                        <li key={i} className={`${styles.tabBtn} ${active === i ? styles.activeTab : ""}`}
                                            onClick={() => setActive(i)}
                                        >
                                            {t.title}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-5">
                            <div className={styles.sec_center}>
                                <div className={styles.imageWrap}>
                                    <div key={active} className={styles.fadeSlide}>
                                        <Image src={tabs[active].img} alt={tabs[active].title} fill sizes="100vw"
                                            style={{ objectFit: "contain" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className={styles.sec_right}>
                                <div key={active} className={styles.fadeSlideRight}>
                                    <h3 className={styles.title}>{tabs[active].title}</h3>
                                    <p className={`${styles.para} scroll_block`}>{tabs[active].text}</p>
                                    <div className="combo_btn">
                                        <ActionButtons />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
