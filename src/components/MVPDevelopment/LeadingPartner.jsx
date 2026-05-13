import React from 'react'
import Image from 'next/image'
import styles from './LeadingPartner.module.css'

const LeadingPartner = () => {
    return (
        <section id='leadingPartner' className={styles.leadingPartner}>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-lg-5'>
                        <div className={styles.imageBox}>
                            <Image
                                src="/images/mobile-app-studio/mobile-apps-cover.png"
                                alt="Mobile App Portfolio"
                                width={600}
                                height={600}
                                className={styles.mainImg}
                            />
                        </div>
                    </div>
                    <div className='col-lg-7'>
                        <div className={styles.contentBox}>
                            <h2 className={styles.title}>
                                Leading Mobile <span className={styles.highlight}>App
                                    <Image src="/images/mobile-app-studio/dark-highlight-bling.png" alt="bling" width={50} height={50} className={styles.bling} />
                                    <Image src="/images/mobile-app-studio/dark-spring-vector.png" alt="spring" width={136} height={11} className={styles.spring} />
                                </span> <br /> Development Partner
                            </h2>
                            <p className={styles.desc}>
                                We deliver AI-native applications, digital ecosystems, and mobile applications that
                                provide businesses the power to move faster, work smarter, and lead. As a leading
                                mobile app development agency, we focus on outcomes that matter: measurable
                                growth, faster response to market shifts, AI integration into your current ecosystem, and
                                long-term enterprise reliability.
                            </p>
                            <a href="#contact" className={styles.discoverBtn}>get Started</a>

                            <div className={styles.statsRow}>
                                <div className={styles.statItem}>
                                    <h4>4.8k</h4>
                                    <p>Apps & Solutions</p>
                                </div>
                                <div className={styles.statItem}>
                                    <h4>500k+</h4>
                                    <p>Subscriptions</p>
                                </div>
                                <div className={styles.statItem}>
                                    <h4>14</h4>
                                    <p>Industry-First Awards</p>
                                </div>
                                <div className={styles.statItem}>
                                    <h4>95%</h4>
                                    <p>Client Retention</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LeadingPartner
