import Image from "next/image";
import styles from './AppDevProcess.module.css';
import ActionButtons from "@/components/ui/ActionButtons";
import { SITE_PHONE_LINK } from "@/app/constants";

import Script from "next/script";

export default function AppDevProcess() {
    return (
        <section className={styles.deliveredSection}>


            <div className="container">
                <div className="row align-items-start">
                    <div className="col-sm-12 col-md-3">
                        <span className={styles.sub_heading}><span className={styles.bullet}></span>Our Winning</span>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className={styles.sec_left}>
                            <h2>
                                App Development Process
                            </h2>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3">
                        <div className={styles.sec_right}>
                            <p>
                                Appsters has engineered platforms that handle millions of users daily, across fintech, e-commerce, and mobility.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.spacer}>
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-4 col-lg-4 my-5">
                            <div className={styles.box}>
                                <div className={styles.box_before}>
                                    <Image
                                        src="/images/file-cap.png"
                                        alt="Box Cap Image..."
                                        fill
                                        sizes="100vw"
                                        style={{ objectFit: "contain" }}
                                        className="img-fluid"
                                    />
                                </div>
                                <Image
                                    src="/images/industries/app-dev-process-1.png"
                                    alt="App Development Process"
                                    width={80}
                                    height={80}
                                    className="img-fluid"
                                    style={{ position: "relative", width: "auto", height: "auto" }}
                                />
                                <h6 className={styles.heading}>Project Planning</h6>
                                <p className={`${styles.para} scroll_block`}>
                                    We start with in-depth analysis of your business. Learn about your users’ needs & other business objectives that make your app successful ahead. It helps us identify..
                                </p>

                            </div>
                        </div>

                        <div className="col-sm-12 col-md-4 col-lg-4 my-5">
                            <div className={styles.box}>
                                <div className={styles.box_before}>
                                    <Image
                                        src="/images/file-cap.png"
                                        alt="Box Cap Image..."
                                        fill
                                        sizes="100vw"
                                        style={{ objectFit: "contain" }}
                                        className="img-fluid"
                                    />
                                </div>
                                <Image
                                    src="/images/industries/app-dev-process-2.png"
                                    alt="App Development Process"
                                    width={80}
                                    height={80}
                                    className="img-fluid"
                                    style={{ position: "relative", width: "auto", height: "auto" }}
                                />
                                <h6 className={styles.heading}>UI/UX Design</h6>
                                <p className={`${styles.para} scroll_block`}>
                                    A good design will leave your customers in “wow”. Our great designers create stunning and visually appealing interfaces for iOS, Android, & cross-platform apps..
                                </p>

                            </div>
                        </div>
                        

                        <div className="col-sm-12 col-md-4 col-lg-4 my-5">
                            <div className={styles.box}>
                                <div className={styles.box_before}>
                                    <Image
                                        src="/images/file-cap.png"
                                        alt="Box Cap Image..."
                                        fill
                                        sizes="100vw"
                                        style={{ objectFit: "contain" }}
                                        className="img-fluid"
                                    />
                                </div>
                                <Image
                                    src="/images/industries/app-dev-process-3.png"
                                    alt="App Development Process"
                                    width={80}
                                    height={80}
                                    className="img-fluid"
                                    style={{ position: "relative", width: "auto", height: "auto" }}
                                />
                                <h6 className={styles.heading}>App Development</h6>
                                <p className={`${styles.para} scroll_block`}>
                                   Right after you accept the design for your app, it is time to publish your software. We use the latest tools and frameworks like Flutter, React Native, Swift, or Kotlin..
                                </p>

                            </div>
                        </div>


                        <div className="col-sm-12 col-md-4 col-lg-4 my-5">
                            <div className={styles.box}>
                                <div className={styles.box_before}>
                                    <Image
                                        src="/images/file-cap.png"
                                        alt="Box Cap Image..."
                                        fill
                                        sizes="100vw"
                                        style={{ objectFit: "contain" }}
                                        className="img-fluid"
                                    />
                                </div>
                                <Image
                                    src="/images/industries/app-dev-process-4.png"
                                    alt="App Development Process"
                                    width={80}
                                    height={80}
                                    className="img-fluid"
                                    style={{ position: "relative", width: "auto", height: "auto" }}
                                />
                                <h6 className={styles.heading}>Quality Assurance & Testing</h6>
                                <p className={`${styles.para} scroll_block`}>
                                    Numerous checks on apps are very important to see the responsiveness. Our Quality Assurance team tests your app multiple times to make it safe from serious..
                                </p>

                            </div>
                        </div>


                        <div className="col-sm-12 col-md-4 col-lg-4 my-5">
                            <div className={styles.box}>
                                <div className={styles.box_before}>
                                    <Image
                                        src="/images/file-cap.png"
                                        alt="Box Cap Image..."
                                        fill
                                        sizes="100vw"
                                        style={{ objectFit: "contain" }}
                                        className="img-fluid"
                                    />
                                </div>
                                <Image
                                    src="/images/industries/app-dev-process-5.png"
                                    alt="App Development Process"
                                    width={80}
                                    height={80}
                                    className="img-fluid"
                                    style={{ position: "relative", width: "auto", height: "auto" }}
                                />
                                <h6 className={styles.heading}>App Deployment</h6>
                                <p className={`${styles.para} scroll_block`}>
                                    We develop apps for real estate, including property listings, virtual tours, and clienDeployment is very important and requires careful planning. We manage the whole app release process..
                                </p>

                            </div>
                        </div>


                        <div className="col-sm-12 col-md-4 col-lg-4 my-5">
                            <div className={styles.box}>
                                <div className={styles.box_before}>
                                    <Image
                                        src="/images/file-cap.png"
                                        alt="Box Cap Image..."
                                        fill
                                        sizes="100vw"
                                        style={{ objectFit: "contain" }}
                                        className="img-fluid"
                                    />
                                </div>
                                <Image
                                    src="/images/industries/app-dev-process-6.png"
                                    alt="App Development Process"
                                    width={80}
                                    height={80}
                                    className="img-fluid"
                                    style={{ position: "relative", width: "auto", height: "auto" }}
                                />
                                <h6 className={styles.heading}>App Maintenance</h6>
                                <p className={`${styles.para} scroll_block`}>
                                    Maintenance of your app guarantees your app is free from difficult challenges. We provide ongoing preservation services, so that your app stays updated & secure..
                                </p>

                            </div>
                        </div>

                        

                    </div>
                </div>
            </div>
        </section>
    )
}
