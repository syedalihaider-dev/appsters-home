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
                style={{ objectFit: "cover", borderRadius: "50px" }}
                className={styles.ctaBg}
            />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-7">
                        <div className={styles.sec_left}>
                            <h2 className={`${styles.title} ${styles.titleV1}`}>
                                NOT AMATEURS BUT EXPERTS - LET'S <br/> BUILD YOUR <span className="primarytxt">NEXT BIG IDEA</span>
                                
                            </h2>
                            <p className={styles.paragraph}>
                                Partner with the top app developers in USA to create apps that
                                engage users and elevate your business. Let's connect today to
                                bring your vision to life!
                            </p>

                            <div className="combo_btn combo_btn_v1">
                                <ActionButtons text="Free Consultation" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-7">
                        <Image
                            src="/images/contact/mobile.png"
                            alt="Yellow Background Shape"
                            fill
                            className={styles.mobileImg}
                            />
                    </div>
                </div>
            </div>


        </section>
    );
}
