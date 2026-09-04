"use client";
import Image from "next/image";
import Link from "next/link";
import ActionButtons from "@/components/ui/ActionButtons";
import { SITE_PHONE_LINK } from "@/app/constants";
import styles from "./CTASection.module.css";

export default function CTASection({ data = {} }) {
    const transparentHeading = data.transparentHeading || "Creative Agency";
    const title = data.title || "helpp";
    const para = data.para || "What if you get your desired services at home quickly? Exciting, right? Helpp app has got you covered. Our rewarding app makes service bookings easy and supports requests. Our Houston-based app development team delivered a responsive app that aids users in managing their activities anywhere.";
    
    const defaultStats = [
        { statNumber: "10X", statLabel: "Visitors" },
        { statNumber: "15X", statLabel: "Call Requests" },
        { statNumber: "20X", statLabel: "Customer Growth" },
        { statNumber: "50X", statLabel: "Downloads" },
    ];
    const stats = data.stats || defaultStats;

    return (
        <section className={styles.ctaSection}>
            <Image
                src="/images/banner-bg.png"
                alt="Main Banner Image..."
                fill
                style={{ objectFit: "cover" }}
                className={styles.ctaBg}
            />
            <div className={styles.cta_after}>
                <Image
                    src="/images/cta-after.png"
                    alt="CTA After Image..."
                    fill
                    style={{ objectFit: "contain" }}
                />
            </div>
            <p className={styles.transparent_heading}>{transparentHeading}</p>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className={styles.sec_left}>
                            <h2 className={styles.title}>
                                {title}
                            </h2>
                            <p className={styles.para}>
                                {para}
                            </p>

                            {/* Stats Section */}
                            <div className={styles.statsContainer}>
                                {stats.map((stat, idx) => (
                                    <div key={idx} className={styles.statItem}>
                                        <span className={styles.statNumber}>{stat.statNumber}</span>
                                        <span className={styles.statLabel}>{stat.statLabel}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="combo_btn">
                                <ActionButtons />
                                <ActionButtons text="Call Us Now" href={SITE_PHONE_LINK} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sec_right}>
                
                <div className={styles.hand_holding_mobile_center}>
                    <Image
                        src="/images/industries/help.png"
                        alt="CTA Right Image..."
                        fill
                        sizes="100vw"
                        style={{ objectFit: "contain" }}
                    />
                </div>
            </div>
            <Link href="#contactForm" className={`${styles.circle} ${styles.circle_v1}`}>
                    <Image
                        src="/images/circle.png"
                        fill
                        sizes="100vw"
                        alt="Circle Image..."
                        style={{ objectFit: "contain" }}
                        className={styles.circleBg}
                    />
                    <div className={styles.circle_content}>
                        <Image
                            src="/images/lets-start-a-project-circle.png"
                            fill
                            sizes="100vw"
                            style={{ objectFit: "contain" }}
                            alt="Lets Start a Project Circle Image..."
                        />
                    </div>
                    <div className={styles.circle_arrow}>
                        <Image
                            src="/images/circle-arrow.png"
                            fill
                            sizes="100vw"
                            style={{ objectFit: "contain" }}
                            alt="Circle Arrow Image..."
                        />
                    </div>
                </Link>
        </section>
    );
}
