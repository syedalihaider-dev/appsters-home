import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import styles from './Industries.module.css'

const Industries = () => {
    const industries = [
        {
            id: 1,
            name: "Ecommerce",
            img: "/images/mobile-app-studio/industries-01.png",
            desc: "Scalable e-commerce solutions that drive sales and provide seamless shopping experiences for your customers."
        },
        {
            id: 2,
            name: "Automotive",
            img: "/images/mobile-app-studio/industries-02.png",
            desc: "Next-gen automotive tech solutions for manufacturing, logistics, and end-user engagement."
        },
        {
            id: 3,
            name: "Sports",
            img: "/images/mobile-app-studio/industries-03.png",
            desc: "Custom sports apps for fans, teams, athletes, and leagues—built for real-time engagement and performance."
        },
        {
            id: 4,
            name: "Real Estate",
            img: "/images/mobile-app-studio/industries-04.png",
            desc: "Transforming real estate with digital property tours, lead management systems, and smart home integrations."
        },
        {
            id: 5,
            name: "Agriculture",
            img: "/images/mobile-app-studio/industries-05.png",
            desc: "Innovating agriculture with smart farming tools, crop monitoring systems, and supply chain transparency."
        },
        {
            id: 6,
            name: "Ecommerce",
            img: "/images/mobile-app-studio/industries-01.png",
            desc: "Scalable e-commerce solutions that drive sales and provide seamless shopping experiences for your customers."
        },
        {
            id: 7,
            name: "Automotive",
            img: "/images/mobile-app-studio/industries-02.png",
            desc: "Next-gen automotive tech solutions for manufacturing, logistics, and end-user engagement."
        },
        {
            id: 8,
            name: "Sports",
            img: "/images/mobile-app-studio/industries-03.png",
            desc: "Custom sports apps for fans, teams, athletes, and leagues—built for real-time engagement and performance."
        },
        {
            id: 9,
            name: "Real Estate",
            img: "/images/mobile-app-studio/industries-04.png",
            desc: "Transforming real estate with digital property tours, lead management systems, and smart home integrations."
        },
        {
            id: 10,
            name: "Agriculture",
            img: "/images/mobile-app-studio/industries-05.png",
            desc: "Innovating agriculture with smart farming tools, crop monitoring systems, and supply chain transparency."
        },
    ];

    return (
        <section id='industries' className={styles.industriesSection}>
            <div className="container">
                <div className={styles.headingBox}>
                    <h2 className={styles.title}>
                        One Codebase. Infinite  <span className={styles.highlight}>Industries.
                            <Image src="/images/mobile-app-studio/spring-vector.png" alt="line" width={424} height={22} className={styles.spring} />
                        </span>
                    </h2>
                    <p className={styles.desc}>
                        Our diverse mobile application solutions are built to perform, scale, and adapt
                        while setting industry standards and redefining what’s possible for businesses
                        everywhere.
                    </p>
                    <a href="#contact" className={styles.ctaBtn}>Get Started</a>
                </div>
            </div>

            <div className={styles.sliderWrapper}>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1.5}
                    loop={true}
                    speed={5000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    onMouseEnter={(swiper) => {
                        swiper.autoplay.stop();
                    }}
                    onMouseLeave={(swiper) => {
                        swiper.autoplay.start();
                    }}
                    allowTouchMove={true}
                    breakpoints={{
                        320: { slidesPerView: 1.2 },
                        640: { slidesPerView: 2.5 },
                        1024: { slidesPerView: 4.5 },
                        1440: { slidesPerView: 5.5 },
                    }}
                    className={styles.industrySwiper}
                >
                    {industries.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className={styles.industryCard}>
                                <Image src={item.img} alt={item.name} fill className={styles.cardImg} />
                                <div className={styles.overlay}>
                                    <div className={styles.cardHoverContent}>
                                        <h3 className={styles.cardTitle}>{item.name}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                            <h4 className={styles.footerTitle}>{item.name}</h4>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Industries
