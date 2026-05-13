import React, { useState } from 'react'
import Image from 'next/image'
import styles from './Services.module.css'

const Services = () => {
    const [activeService, setActiveService] = useState(1);

    const services = [
        { id: 1, label: "01.", title: "Market Validation", desc: "We help you validate your product idea with real users before full-scale development. Our MVP approach focus on the core value proposition to ensure market-fit.", img: "/images/mobile-app-studio/services/ios.png" },
        { id: 2, label: "02.", title: "Rapid Prototyping", desc: "Turn concepts into interactive prototypes in days. We visualize your MVP flow to identify bottlenecks and refine the user experience early in the cycle.", img: "/images/mobile-app-studio/services/android.png" },
        { id: 3, label: "03.", title: "Core Feature Dev", desc: "Focus on what matters. We engineer the essential features of your MVP using scalable technologies that allow for fast iteration and pivot-readiness.", img: "/images/mobile-app-studio/services/cross-platform.png" },
        { id: 4, label: "04.", title: "Agile Iterations", desc: "Launch, learn, and improve. Our agile process ensures your MVP evolves based on actual user feedback, minimizing waste and maximizing ROI.", img: "/images/mobile-app-studio/services/react-native.png" },
    ]

    return (
        <section id='services' className={styles.servicesSection}>
            <Image src="/images/mobile-app-studio/services-banner.png" alt="bg" fill priority className={styles.bgImg} />
            <div className='container position-relative'>
                <div className='row align-items-center mb-5'>
                    <div className='col-lg-6'>
                        <h2 className={styles.title}>
                            Our MVP <br /> Development <span className={styles.highlight}>Process
                                <Image src="/images/mobile-app-studio/spring-vector.png" alt="spring" width={300} height={20} className={styles.spring} />
                            </span>
                        </h2>
                    </div>
                    <div className='col-lg-6'>
                        <p className={styles.topDesc}>
                            We specialize in building lean, powerful MVPs that help startups and
                            enterprises test ideas quickly. Our process is designed for speed,
                            scalability, and user-centric results.
                        </p>
                    </div>
                </div>

                <div className={styles.servicesList}>
                    {services.map((item) => (
                        <div
                            key={item.id}
                            className={`${styles.serviceItem} ${activeService === item.id ? styles.active : ''}`}
                            onMouseEnter={() => setActiveService(item.id)}
                        >
                            <div className={styles.itemHeader}>
                                <div className={styles.itemMain}>
                                    <span className={styles.label}>{item.label}</span>
                                    <h3 className={styles.itemTitle}>{item.title}</h3>
                                </div>
                                <div className={styles.itemSide}>
                                    {activeService !== item.id && (
                                        <Image src="/images/mobile-app-studio/arrow.png" alt="arrow" width={30} height={30} className={styles.arrow} />
                                    )}
                                </div>
                            </div>

                            <div className={styles.itemContent}>
                                <div className={styles.textContent}>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <p className={styles.itemDesc}>{item.desc}</p>
                                            <a href="#contact" className={styles.learnBtn}>LEARN MORE</a>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.imgPart}>
                                    <div className={styles.imgBox}>
                                        <Image src={item.img} alt={item.title} width={400} height={600} className={styles.serviceImg} />
                                    </div>
                                </div>
                                <Image src="/images/mobile-app-studio/arrow.png" alt="arrow" width={30} height={30} className={styles.arrowActive} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
