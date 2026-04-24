"use client";
import Image from "next/image";
import ActionButtons from "@/components/ui/ActionButtons";
import styles from "./CTASection.module.css";

export default function CTASection() {
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
            <p className={styles.transparent_heading}>Creative Agency</p>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className={styles.sec_left}>
                            <p className={styles.sub_heading}>Take Your Ideas Forward With A Tech Partner</p>
                            <h2 className={styles.title}>
                                That's <span className="primarytxt">Ready to Build</span> What’s Next.
                            </h2>
                            <p className={styles.para}>
                                Your business deserves apps that create impact from day one. Let’s turn your idea base into a solution that’s fast, secure, and ready to scale. Get started with a free consultation today and take the first step toward building your next breakthrough with Appsters.
                            </p>
                            <div className="combo_btn">
                                <ActionButtons />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sec_right}>
                <div className={styles.circle}>
                    <Image
                        src="/images/circle.png"
                        fill
                        sizes="100vw"
                        alt="Circle Image..."
                        style={{ objectFit: "contain" }}
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
                </div>
                <div className={styles.hand_holding_mobile_center}>
                    <Image
                        src="/images/cta-right-img.png"
                        alt="CTA Right Image..."
                        fill
                        sizes="100vw"
                        style={{ objectFit: "contain" }}
                    />
                </div>
            </div>
        </section>
    );
}
