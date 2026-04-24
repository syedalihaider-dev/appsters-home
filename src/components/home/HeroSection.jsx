"use client";

import Image from "next/image";
import ActionButtons from "@/components/ui/ActionButtons";
import styles from './HeroSection.module.css';

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

export default function HeroSection() {
    return (
        <section className={styles.heroSection}>
            <span className={styles.transparent_heading}>Creative Agency</span>
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
                            <p className={styles.sub_heading}>Transforming Ambitious ideas</p>
                            <h1 className={styles.main_heading}>
                                Into <span className="primarytxt">Powerful</span> <span className="break_line"></span>
                                <span className="primarytxt">Digital</span> Products
                            </h1>
                            <p className={styles.paragraph}>
                                Trusted by CTOs, valued by users, and built for AI scalability. Appsters deliver mobile apps that your business needs today & tomorrow.
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
                            <div className={styles.hand_holding_mobile}>
                                <Image
                                    src="/images/hand-hold-mobile.png"
                                    alt="Hand Holding Mobile Image..."
                                    priority
                                    width={683}
                                    height={595}
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                            <div className={styles.mobile_screen}>
                                {/* <iframe
                                    src="https://player.vimeo.com/video/1184236936?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
                                    frameBorder="0"
                                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                    allowFullScreen
                                    title="diamond-animation"
                                    className={styles.vimeo_video}
                                ></iframe> */}
                                <Image
                                    src="/video/banner-mobile.gif"
                                    alt="Banner Mobile Image..."
                                    priority
                                    width={720}
                                    height={720}
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                            <div className={styles.appsters_shape_decor}>
                                <Image
                                    src="/images/appsters-shape-decor.png"
                                    alt="Appsters Shape Decor Image..."
                                    fill
                                    priority
                                    sizes="100vw"
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                            <div className={styles.circle}>
                                <Image
                                    src="/images/circle.png"
                                    alt="Circle Image..."
                                    fill
                                    priority
                                    sizes="100vw"
                                    style={{ objectFit: "contain" }}
                                />
                                <div className={styles.circle_content}>
                                    <Image
                                        src="/images/lets-start-a-project-circle.png"
                                        alt="Lets Start a Project Circle Image..."
                                        fill
                                        priority
                                        sizes="100vw"
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                                <div className={styles.circle_arrow}>
                                    <Image
                                        src="/images/circle-arrow.png"
                                        alt="Circle Arrow Image..."
                                        fill
                                        priority
                                        sizes="100vw"
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                            </div>
                            <div className={styles.counting}>
                                <p>200K</p>
                                <div className={styles.global_clients}>
                                    <Image
                                        src="/images/global-clients.png"
                                        alt="Global Clients Image..."
                                        fill
                                        priority
                                        sizes="100vw"
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}