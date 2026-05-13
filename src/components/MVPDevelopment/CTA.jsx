import React from 'react'
import Image from 'next/image'
import styles from './CTA.module.css'
import { SITE_PHONE as PHONE_NUMBER } from '@/app/constants'

const CTA = () => {
    return (
        <section className={styles.ctaSection}>
            <Image
                src="/images/mobile-app-studio/cta-bg.png"
                alt="bg"
                fill
                className={styles.bgImg}
            />

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className={styles.content}>
                            <h2 className={styles.title}>
                                Ready To Validate Your <br />
                                MVP Idea <span className={styles.highlight}>Today?
                                    <Image
                                        src="/images/mobile-app-studio/spring-vector.png"
                                        alt="spring"
                                        width={250}
                                        height={20}
                                        className={styles.spring}
                                    />
                                </span>
                            </h2>
                            <p className={styles.desc}>
                                Don't wait for months to launch. Build a lean, high-performing MVP
                                and start collecting real user data. Get a free consultation and
                                a roadmap for your product development today.
                            </p>
                            <div className={styles.btnGroup}>
                                <a href={`tel:${PHONE_NUMBER}`} className={`${styles.ctaBtn} ${styles.callBtn}`}>CALL NOW</a>
                                <a href="#" className={`${styles.ctaBtn} ${styles.chatBtn} chat`}>CHAT WITH US</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className={styles.mockupBox}>
                            <Image
                                src="/images/mobile-app-studio/cta-mockup.png"
                                alt="MVP Journey"
                                width={600}
                                height={700}
                                className={styles.mockupImg}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA
