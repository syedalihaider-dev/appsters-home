"use client";

import Image from "next/image";
import ActionButtons from "@/components/ui/ActionButtons";
import styles from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <span className={styles.transparent_heading}>App Development</span>
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
                            <p className={styles.sub_heading}>Find your digital edge.</p>
                            <h1 className={styles.main_heading}>
                                Engineered to Scale. <span className="primarytxt">Designed to Win.</span> Developed For Whatʼs Next.
                            </h1>
                            <p className={styles.paragraph}>
                                At Appsters, we go beyond development—we create digital experiences that empower businesses to grow, adapt, and lead in a fast-changing world. Our team blends creativity, strategy, and cutting-edge technology to deliver applications that are not only functional but meaningful.
                            </p>
                            <div className="combo_btn">
                                <ActionButtons />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className={styles.banner_right}>
                            <div className={styles.mobile_screen}>
                                <Image
                                    src="/images/about-us/banner-right.webp"
                                    alt="Banner Right Image..."
                                    priority
                                    width={1110}
                                    height={761}
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