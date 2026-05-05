import Image from "next/image";
import styles from './AboutSection.module.css';

export default function AboutSection() {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.marque}>
                <ul className={styles.marquee_slider}>
                    <li>
                        <div className={styles.box}>
                            <p>
                                Turn Your Wildest Ideas Into <span>Powerful Digital Products</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.center_logo}>
                            <Image
                                src="/images/appsters-shape-decor-dark.png"
                                alt="Appsters Shape Decor Dark Image..."
                                fill
                                sizes="100vw"
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </li>
                    <li>
                        <div className={styles.box}>
                            <p>
                                Turn Your Wildest Ideas Into <span>Powerful Digital Products</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.center_logo}>
                            <Image
                                src="/images/appsters-shape-decor-dark.png"
                                alt="Appsters Shape Decor Dark Image..."
                                fill
                                sizes="100vw"
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </li>
                    <li>
                        <div className={styles.box}>
                            <p>
                                Turn Your Wildest Ideas Into <span>Powerful Digital Products</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.center_logo}>
                            <Image
                                src="/images/appsters-shape-decor-dark.png"
                                alt="Appsters Shape Decor Dark Image..."
                                fill
                                sizes="100vw"
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </li>
                    <li>
                        <div className={styles.box}>
                            <p>
                                Turn Your Wildest Ideas Into <span>Powerful Digital Products</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.center_logo}>
                            <Image
                                src="/images/appsters-shape-decor-dark.png"
                                alt="Appsters Shape Decor Dark Image..."
                                fill
                                sizes="100vw"
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </li>
                    <li>
                        <div className={styles.box}>
                            <p>
                                Turn Your Wildest Ideas Into <span>Powerful Digital Products</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className={styles.center_logo}>
                            <Image
                                src="/images/appsters-shape-decor-dark.png"
                                alt="Appsters Shape Decor Dark Image..."
                                fill
                                sizes="100vw"
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                    </li>
                </ul>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-6">
                        <div className={styles.sec_left}>
                            <h2 className={styles.main_heading}>
                                <span className={styles.sub_heading}>Who we are</span>
                                Disruptive, Adaptable & <span className="primarytxt">AI-Enabled</span> App Solutions For Startups, <span className="primarytxt">Businesses</span>, & Enterprises.
                            </h2>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className={styles.sec_right}>
                            <p>
                                AI ecosystems are shaping the present and defining the future. At Appsters, we create AI App solutions that help businesses grow, simplify decision-making, and automate key operations. Our developers and data specialists design models built for real-world performance, reiterating complex processes into reliable, scalable systems. <br /><br />
                                Every solution integrates with your current applications, reducing friction and accelerating adoption. As a leading IT services provider and mobile app development agency, we focus on outcomes that matter: measurable growth, faster response to market shifts, AI integration into your current ecosystem, and long-term enterprise reliability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}