import React from 'react'
import Image from 'next/image'
import styles from './CTA.module.css'
import { SITE_PHONE as PHONE_NUMBER } from '@/app/constants'

const CTA = () => {
    return (
        <section className={styles.ctaSection}>
            <Image
                src="/images/mobile-app-studio/cta-bg-black.png"
                alt="bg"
                fill
                className={styles.bgImg}
            />

            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <div className={styles.content}>
                            <h2 className={styles.title}>
                                Ready To Start Your <br />
                                Mobile App <span className={styles.highlight}>Journey?
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
                                Your business deserves apps that create impact from day one. Let’s turn your
                                idea base into a solution that’s fast, secure, and ready to scale. Get started with a
                                free consultation today and take the first step toward building your next
                                breakthrough with Appsters.
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
