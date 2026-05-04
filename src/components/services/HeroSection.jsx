"use client";

import Image from "next/image";
import ActionButtons from "@/components/ui/ActionButtons";
import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <span className={styles.transparent_heading}>App Deveopment</span>
            <Image
                src="/images/banner-bg.png"
                alt="Main Banner Image..."
                fill
                priority
                sizes="100vw"
                style={{ objectFit: "cover" }}
                className={styles.bannerBg}
            />
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <div className={styles.banner_left}>
                            <p className={styles.sub_heading}>We Create Apps that Solve Problems</p>
                            <h1 className={styles.main_heading}>
                                <span className="primarytxt">Smart Solutions</span> for Modern Businesses
                            </h1>
                            <p className={styles.paragraph}>
                                Our approach focuses on building meaningful digital experiences that improve efficiency, engage users, and generate measurable results.
                            </p>
                            <div className="combo_btn">
                                <ActionButtons />
                            </div>
                            <div className={styles.clutch_rating_badge}>
                                <Image
                                    src="/images/clutch-rating-badge.png"
                                    alt="Clutch Rating Badge Image..."
                                    width={331}
                                    height={68}
                                    priority
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className={styles.banner_right}>
                            <div className={styles.banner_mobile}>
                                <Image
                                    src="/images/services/banner-mobile.webp"
                                    alt="Banner Mobile Image..."
                                    priority
                                    width={612}
                                    height={598}
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}