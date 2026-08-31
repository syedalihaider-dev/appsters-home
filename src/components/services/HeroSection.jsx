"use client";

import Image from "next/image";
import ActionButtons from "@/components/ui/ActionButtons";
import ClutchWidget from "@/components/ClutchWidget";
import styles from './HeroSection.module.css';

export default function HeroSection({ data }) {
    const transparentHeading = data?.transparentHeading || "App Deveopment";
    const subTitle = data?.subTitle || "We Create Apps that Solve Problems";
    const mainTitle = data?.mainTitle || '<span class="primarytxt">Smart Solutions</span> for Modern Businesses';
    const description = data?.description || "Our approach focuses on building meaningful digital experiences that improve efficiency, engage users, and generate measurable results.";
    const mobileImage = data?.mobileImage || "/images/services/banner-mobile.webp";
    const bannerBg = data?.bannerBg || "/images/banner-bg.png";

    return (
        <section className={styles.heroSection}>
            <span className={styles.transparent_heading}>{transparentHeading}</span>
            <Image
                src={bannerBg}
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
                            <p className={styles.sub_heading}>{subTitle}</p>
                            <h1 
                                className={styles.main_heading}
                                dangerouslySetInnerHTML={{ __html: mainTitle }}
                            />
                            <p className={styles.paragraph}>
                                {description}
                            </p>
                            <div className="combo_btn">
                                <ActionButtons />
                            </div>
                            <div className={styles.clutch_rating_badge}>
                                <ClutchWidget />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className={styles.banner_right}>
                            <div className={styles.banner_mobile}>
                                <Image
                                    src={mobileImage}
                                    alt={`${subTitle} Mobile Image...`}
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