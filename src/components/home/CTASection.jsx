"use client";
import Image from "next/image";
import Link from "next/link";
import ActionButtons from "@/components/ui/ActionButtons";
import { SITE_PHONE_LINK } from "@/app/constants";
import styles from "./CTASection.module.css";

export default function CTASection({ data }) {
    const transparentHeading = data?.transparentHeading || "Creative Agency";
    const subHeading = data?.subHeading || "Take Your Ideas Forward With A Tech Partner";
    const title = data?.title || 'That\'s <span class="primarytxt">Ready to Build</span> What’s Next.';
    const description = data?.description || data?.para || "Your business deserves apps that create impact from day one. Let’s turn your idea base into a solution that’s fast, secure, and ready to scale. Get started with a free consultation today and take the first step toward building your next breakthrough with Appsters.";
    const bgImage = data?.bgImage || "/images/banner-bg.png";
    const rightImage = data?.rightImage || "/images/cta-right-img.png";

    return (
        <section className={styles.ctaSection}>
            <Image
                src={bgImage}
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
                            <p className={styles.sub_heading}>{subHeading}</p>
                            <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: title }}>
                            </h2>
                            <p className={styles.para}>
                                {description}
                            </p>
                            <div className="combo_btn">
                                <ActionButtons href={data?.btn1Href || "#contactForm"} />
                                <ActionButtons text={data?.btn2Text || "Call Us Now"} href={data?.btn2Href || SITE_PHONE_LINK} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.sec_right}>
                <Link href="#contactForm" className={styles.circle}>
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
                <div className={styles.hand_holding_mobile_center}>
                    <Image
                        src={rightImage}
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
