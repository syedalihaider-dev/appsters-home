import React, { useState } from 'react'
import Image from 'next/image'
import styles from './Services.module.css'

const Services = () => {
    const [activeService, setActiveService] = useState(2); // Item 2 is open by default

    const services = [
        { id: 1, label: "01.", title: "iOS App Development", desc: "Fidelity meets performance in our iOS app development solutions. Built using Swift and Objective-C, our iOS apps are designed for fluidity, responsiveness,and longevity. We follow Apple’s Human Interface Guidelines rigorously, ensuring that every visual element feels intentional and every interaction feels premium, from prototype to post-launch.", img: "/images/mobile-app-studio/services/ios.png" },

        { id: 2, label: "02.", title: "Android App Development", desc: "We engineer Android apps built for reach, reliability, and results. Every interface, API, and database call is optimized for speed and security across diverse Android ecosystems. From Kotlin and Java to Jetpack integrations, our Android app development process ensures your product runs brilliantly on any device, screen size, or OS version.", img: "/images/mobile-app-studio/services/android.png" },

        { id: 3, label: "03.", title: "Cross-Platform Apps", desc: "One app, every platform without compromise. Our cross-platform mobile apps deliver native-level performance, unified UI, and consistent experiences across iOS, Android, and the web. We architect using Flutter, React Native, and Kotlin Multiplatform to help you cut costs, code smarter, and scale seamlessly.", img: "/images/mobile-app-studio/services/cross-platform.png" },

        { id: 4, label: "04.", title: "React Native Apps", desc: "With apps built on React Native, we balance performance and flexibility through a modular architecture and real-time data synchronization. Our developers use React hooks, TypeScript, and reusable components to build scalable products that perform like native apps, only faster to launch and simpler to maintain.", img: "/images/mobile-app-studio/services/react-native.png" },

        { id: 5, label: "05.", title: "eCommerce App Development", desc: "We build mobile apps designed for performance and growth, including Native iOS and Android app development solutions optimized for speed, usability, and security. Our approach delivers a consistent user experience, even at scale, with an architecture built to support future feature expansion.", img: "/images/mobile-app-studio/services/ecommerce.png" },

        { id: 6, label: "06.", title: "Custom Mobile App Development", desc: "We build custom mobile apps designed for performance and growth, including Native iOS and Android app development solutions optimized for speed, usability, and security. Our custom app development approach delivers a consistent user experience, even at scale, with an architecture built to support future feature expansion and changes.", img: "/images/mobile-app-studio/services/custom-mobile.png" },

        { id: 7, label: "07.", title: "AI App Development", desc: "AI ecosystems are shaping the present and defining the future. At Appsters, we create AI App solutions that help businesses grow, simplify decision-making, and automate key operations. Our developers and data specialists design models built for real-world performance and modularity.", img: "/images/mobile-app-studio/services/ai-app.png" },

        { id: 8, label: "08.", title: "Flutter App Development", desc: "We build lightning-fast, scalable apps built on Flutter, combining beautiful interfaces with native performance. Our Flutter engineers leverage a single codebase to deliver visually rich, cross-platform experiences that feel custom-built. From startup MVPs to enterprise apps, Flutter helps you ship fasterwithout compromising quality or control.", img: "/images/mobile-app-studio/services/flutter.png" },

        { id: 9, label: "09.", title: "Mobile Game App Development", desc: "Mobile game developers at Appsters design interactive, scalable experiences that combine engaging gameplay with rock-solid code for smooth performance. We optimize for responsiveness, multiplayer support, and compatibility across multiple devices and platforms.", img: "/images/mobile-app-studio/services/mobile-game.png" },
    ]

    return (
        <section id='services' className={styles.servicesSection}>
            <Image src="/images/mobile-app-studio/services-banner.png" alt="bg" fill priority className={styles.bgImg} />
            <div className='container position-relative'>
                <div className='row align-items-center mb-5'>
                    <div className='col-lg-6'>
                        <h2 className={styles.title}>
                            Our Mobile App <br /> Development <span className={styles.highlight}>Services
                                <Image src="/images/mobile-app-studio/spring-vector.png" alt="spring" width={300} height={20} className={styles.spring} />
                            </span>
                        </h2>
                    </div>
                    <div className='col-lg-6'>
                        <p className={styles.topDesc}>
                            Appsters has engineered platforms that handle millions of users daily, across
                            fintech, e-commerce, and mobility. Our expert mobile app developers and
                            designers cover every stage of the product lifecycle with technical depth and
                            business focus.
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
