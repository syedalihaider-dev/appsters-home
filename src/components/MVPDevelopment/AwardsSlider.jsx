import React from 'react'
import Image from 'next/image'
import styles from './AwardsSlider.module.css'

const AwardsSlider = () => {
    const awards = [
        "/images/mobile-app-studio/awards-img-01.png",
        "/images/mobile-app-studio/awards-img-02.png",
        "/images/mobile-app-studio/awards-img-03.png",
        "/images/mobile-app-studio/awards-img-004.png",
        "/images/mobile-app-studio/awards-img-05.png",
        "/images/mobile-app-studio/awards-img-01.png",
        "/images/mobile-app-studio/awards-img-02.png",
        "/images/mobile-app-studio/awards-img-03.png",
        "/images/mobile-app-studio/awards-img-004.png",
        "/images/mobile-app-studio/awards-img-05.png",
    ]

    return (
        <section className={styles.awardsSection}>
            <div className={styles.headingBox}>
                <Image src="/images/mobile-app-studio/heading-line.png" alt="line" width={134} height={2} className={styles.lineLeft} />
                <h2 className={styles.title}>SOME OF OUR AWARDS</h2>
                <Image src="/images/mobile-app-studio/heading-line.png" alt="line" width={134} height={2} className={styles.lineRight} />
            </div>

            <div className={styles.sliderContainer}>
                <div className={styles.sliderTrack}>
                    {awards.map((src, index) => (
                        <div key={index} className={styles.awardItem}>
                            <div className={styles.imgWrapper}>
                                <Image src={src} alt={`Award ${index}`} width={224} height={224} />
                            </div>
                        </div>
                    ))}
                    {awards.map((src, index) => (
                        <div key={`dup-${index}`} className={styles.awardItem}>
                            <div className={styles.imgWrapper}>
                                <Image src={src} alt={`Award ${index}`} width={224} height={224} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AwardsSlider
