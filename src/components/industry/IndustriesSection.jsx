"use client";
import { useState } from "react";
import Image from "next/image";
import ActionButtons from "@/components/ui/ActionButtons";
import { SITE_PHONE_LINK } from "@/app/constants";
import styles from "./IndustriesSection.module.css";

export default function IndustriesSection({ style = {} }) {
    const [active, setActive] = useState(0);

    const tabs = [
        {
            title: "Cutting-Edge Technology",
            img: "/images/industries/Cutting-Edge.png",
            text: `We continuously adopt the latest technologies to offer you innovative solutions in mobile app development. By integrating modern tools and techniques, we create apps that are not only operational but also geared for the future. This approach keeps your business ahead of the competition.`,
        },
        {
            title: "Ongoing Support and Maintenance",
            img: "/images/industries/fintech.webp",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            title: "Competitive Pricing",
            img: "/images/industries/education.webp",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            title: "Uncompromising Quality",
            img: "/images/industries/real-estate.webp",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            title: "Customized Solutions",
            img: "/images/industries/automotive.webp",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            title: "Expertise and Experience",
            img: "/images/industries/music.webp",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },


    ];

    return (
        <section className={`${styles.industriesSection} ${styles.industriesSection_v1}`} style={style}>
            <div className="container">
                <div className={styles.sec_top}>
                    <div className="row align-items-center justify-content-between">
                        <div className="col-sm-12 col-md-6">
                            <div className={styles.top_left}>
                                <h2 className={styles.title}>
                                    <span className="primarytxt">Compelling</span> Reasons to Choose Us <span className="primarytxt">as a Trustable</span> App <span className="primarytxt">Development</span> Company in <span className="primarytxt">Houston</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <div className={styles.top_right}>
                                <p className={styles.para}>
                                    Being one of the fastest-growing mobile app development companies in Houston, we are well aware of all the intricacies that could happen during app development. Our adept team of Houston app developers has the expertise to develop flawless digital apps that help generate massive revenue. Here are the top reasons why you should choose us a mobile app development company in Houston.
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
                                        <ActionButtons text="Call Us Now" href={SITE_PHONE_LINK} />
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
