"use client";

import Image from "next/image";
import ActionButtons from "@/components/ui/ActionButtons";
import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <span className={styles.transparent_heading}>Case Study Detail</span>
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
                            <p className={styles.sub_heading}>Mic2Money</p>
                            <h1 className={styles.main_heading}>
                                Turn Talent Into
                                <span className="primarytxt"> Currency</span>
                            </h1>
                            <p className={styles.paragraph}>
                                Our approach focuses on building meaningful digital experiences that improve efficiency, engage users, and generate measurable results.
                            </p>
                            <div className="combo_btn">
                                <ActionButtons />
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
                                    width={971}
                                    height={704}
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