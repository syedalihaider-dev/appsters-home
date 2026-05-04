import Image from "next/image";
import styles from './AwardsSection.module.css';

export default function AwardsSection() {
    return (
        <section className={styles.awardsSection}>
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
                <ul className={styles.badges}>
                    <li>
                        <div className={styles.img}>
                            <Image
                                src="/images/badge-goodfirms.png"
                                alt="Badges Image..."
                                width={274}
                                height={274}
                            />
                        </div>
                    </li>
                    <li>
                        <div className={styles.img}>
                            <Image
                                src="/images/badge-clutch.png"
                                alt="Badges Image..."
                                width={274}
                                height={274}
                            />
                        </div>
                    </li>
                    <li>
                        <div className={styles.img}>
                            <Image
                                src="/images/badge-trustpilot.png"
                                alt="Badges Image..."
                                width={274}
                                height={274}
                            />
                        </div>
                    </li>
                    <li>
                        <div className={styles.img}>
                            <Image
                                src="/images/badge-appfutura.png"
                                alt="Badges Image..."
                                width={274}
                                height={274}
                            />
                        </div>
                    </li>
                    <li>
                        <div className={styles.img}>
                            <Image
                                src="/images/badge-designrush.png"
                                alt="Badges Image..."
                                width={274}
                                height={274}
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}