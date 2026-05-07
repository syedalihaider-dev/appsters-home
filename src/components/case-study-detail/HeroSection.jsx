"use client";

import Image from "next/image";
import ActionButtons from "@/components/ui/ActionButtons";
import styles from './HeroSection.module.css';

export default function HeroSection({ data }) {
    if (!data) return null;
    return (
        <section className={styles.heroSection}>
            <span className={styles.transparent_heading}>Case Study Detail</span>
            <Image
                src="/images/banner-bg.png"
                alt="Banner Background Image..."
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
                            <p className={styles.sub_heading}>{data.subTitle}</p>
                            <h1
                                className={styles.main_heading}
                                dangerouslySetInnerHTML={{ __html: data.mainTitle || "" }}
                            >
                            </h1>
                            <p className={styles.paragraph}>
                                {data.description}
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
                                    src={data.mobileImage}
                                    alt={`${data.subTitle} Mobile Image...`}
                                    width={624}
                                    height={600}
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
