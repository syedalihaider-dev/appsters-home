import React, { useState } from 'react'
import Image from 'next/image'
import styles from './Services.module.css'

const Services = () => {
    const [activeService, setActiveService] = useState(1);

    const services = [
        {
            id: 1,
            label: "01.",
            title: "Strategy & Planning",
            desc: "We define your app’s core features and user flow",
            img: "/images/mobile-app-studio/services/ios.png"
        },

        {
            id: 2,
            label: "02.",
            title: "MVP Development",
            desc: "We build a fast, scalable version of your product",
            img: "/images/mobile-app-studio/services/android.png"
        },

        {
            id: 3,
            label: "03.",
            title: "Launch & Feedback",
            desc: "You launch, test, and validate with real users",
            img: "/images/mobile-app-studio/services/cross-platform.png"
        },

        {
            id: 4,
            label: "04.",
            title: "Web App Development",
            desc: "Turn your idea into a functional web app that works on any device. We build responsive, scalable web applications using modern technologies that deliver seamless performance and support your business goals.",
            img: "/images/mobile-app-studio/services/react-native.png"
        },

        {
            id: 5,
            label: "05.",
            title: "Clone App Development",
            desc: "Build a market-ready app faster with a proven clone app model. We recreate high-demand apps—like Uber, Airbnb, or DoorDash—with your brand, custom features, and scalable architecture. Get your product in users’ hands quickly and stay ahead of the competition.",
            img: "/images/mobile-app-studio/services/ecommerce.png"
        },

        {
            id: 6,
            label: "06.",
            title: "Progressive Web Apps (PWA) Development",
            desc: "Combine the best of the web and mobile with Progressive Web Apps. We build PWAs that are fast, reliable, and installable on any device—without the app store. Ideal for MVPs, PWAs deliver offline support, instant loading, and a seamless user experience right from the browser.",
            img: "/images/mobile-app-studio/services/custom-mobile.png"
        },

        {
            id: 7,
            label: "07.",
            title: "AI Mobile App Development",
            desc: "Add intelligence to your app with AI-powered features. We develop AI mobile apps that automate tasks, personalize experiences, and provide deeper insights—from chatbots and recommendation systems to predictive analytics and computer vision. Let’s build an app that thinks with your users.",
            img: "/images/mobile-app-studio/services/ai-app.png"
        },

        {
            id: 8,
            label: "08.",
            title: "Enterprise App Development",
            desc: "Turn your idea into a functional web app that works on any device. We build responsive, scalable web applications using modern technologies that deliver seamless performance and support your business goals.",
            img: "/images/mobile-app-studio/services/flutter.png"
        },

        {
            id: 9,
            label: "09.",
            title: "MVP Game Development",
            desc: "Build an app that stands out in the crowded marketplace. We combine unique visuals, smooth animations, and scalable architecture to create apps that engage users and drive growth. Whether it's a startup MVP or a full-featured product, we deliver quality you can rely on.",
            img: "/images/mobile-app-studio/services/mobile-game.png"
        },
    ]

    return (
        <section id='services' className={styles.servicesSection}>
            <Image src="/images/mobile-app-studio/services-banner.png" alt="bg" fill priority className={styles.bgImg} />
            <div className='container position-relative'>
                <div className='row align-items-center mb-5'>
                    <div className='col-lg-6'>
                        <h2 className={styles.title}>
                            From Idea to MVP in <span className={styles.highlight}>Weeks
                                <Image src="/images/mobile-app-studio/spring-vector.png" alt="spring" width={300} height={20} className={styles.spring} />
                            </span>
                        </h2>
                    </div>
                    <div className='col-lg-6'>
                        <p className={styles.topDesc}>
                            We help founders and businesses validate ideas quickly with a clear, structured MVP development approach. Our focus is on speed, core functionality, and code quality—so you can test the market and iterate with confidence.
                        </p>
                    </div>
                </div>
x
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
