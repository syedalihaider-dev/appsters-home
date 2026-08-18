"use client";
import Image from "next/image";
import ActionButtons from "@/components/ui/ActionButtons";
import { SITE_PHONE_LINK } from "@/app/constants";
import styles from "./CTASection.module.css";

export default function CTASectionIndustry() {
    return (
        <section className={styles.ctaSection}>
            <Image
                src="/images/industries/cta-ind-bg.png"
                alt="Main Banner Image..."
                fill
                style={{ objectFit: "cover" }}
                className={styles.ctaBg}
            />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <div className={styles.sec_left}>
                            <h2 className={`${styles.title} ${styles.titleV1}`}>
                                As a Premier <span className="primarytxt">Mobile App Development</span> Company in Houston,
                                We’re Recognized by Leading Industry <span className="primarytxt">Experts & Platforms for</span>
                                Our <span className="primarytxt">Outstanding App</span> Development Services.
                            </h2>

                            <div className="combo_btn combo_btn_v1 justify-content-center">
                                <ActionButtons />
                                <ActionButtons text="Call Us Now" href={SITE_PHONE_LINK} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}
