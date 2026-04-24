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
        img: "/images/industry-healthcare.png",
        text: `We develop HIPAA-compliant healthcare apps that bridge doctors,
        patients, and data. From telemedicine to AI-powered diagnostics, our
        solutions improve workflows, reduce wait times, and empower smarter
        decision-making. Every feature is designed to keep patient privacy
        airtight while driving measurable results for hospitals and clinics.`,
    },
    {
        title: "FinTech",
        img: "/images/industry-fintech.png",
        text: `We co-create secure, compliant fintech apps that simplify payments,
        investments, and trading. From blockchain-backed wallets to AI fraud
        detection, our solutions prioritize speed, trust, and transparency.
        We turn complex transactions into seamless, automated digital journeys.`,
    },
    {
        title: "Education",
        img: "/images/industry-education.png",
        text: `We build next-gen EdTech platforms including LMS, e-learning apps,
        virtual classrooms, AI tutoring systems, and gamified learning solutions.`,
    },
    {
        title: "Real Estate",
        img: "/images/industry-real-estate.png",
        text: `We create powerful property listing platforms, real estate CRM software,
        AR/VR property tours, and investment dashboards.`,
    },
    {
        title: "Automotive",
        img: "/images/industry-automotive.png",
        text: `From connected car apps to EV charging platforms, we modernize the
        automotive ecosystem with IoT + AI powered experiences.`,
    },
    {
        title: "Music",
        img: "/images/industry-music.png",
        text: `We craft streaming apps, artist platforms, royalty systems, and AI-based
        recommendation engines for next-gen music experiences.`,
    },
    {
        title: "Social Media",
        img: "/images/industry-social-media.png",
        text: `We build high-performance social networks with messaging, feeds,
        creator tools, live features, and community systems.`,
    },
    {
        title: "Logistics",
        img: "/images/industry-logistics.png",
        text: `We create logistics automation apps including fleet tracking,
        dispatch software, delivery apps, and inventory systems.`,
    },
    {
        title: "eCommerce",
        img: "/images/industry-ecommerce.png",
        text: `We craft scalable eCommerce apps with marketplaces, single vendor stores,
        subscription systems, and AI-driven product recommendations.`,
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
                            Shaping Success Stories Across <span className="primarytxt">Global Industries</span>
                        </h2>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4">
                    <div className={styles.top_right}>
                        <p className={styles.para}>
                            Our web, app, gaming, and AI solutions are built to perform, scale, and adapt while setting
                            industry standards and redefining what’s possible for businesses everywhere.
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
                            <li key={i} className={`${styles.tabBtn} ${active===i ? styles.activeTab : "" }`}
                                onClick={()=> setActive(i)}
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
