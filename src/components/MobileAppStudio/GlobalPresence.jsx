import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import styles from './GlobalPresence.module.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const GlobalPresence = () => {
    const swiperRef = useRef(null);

    const locations = [
        { city: "QATAR", img: "Qatar.webp" },
        { city: "BAHRAIN", img: "Bahrain.webp" },
        { city: "PIERRE", img: "Pierre.webp" },
        { city: "DUBAI", img: "Dubai.webp" },
        { city: "SHARJAH", img: "Sharjah.webp" },
        { city: "NEW YORK", img: "NewYork.webp" },
        { city: "CHICAGO", img: "Chicago.webp" },
        { city: "DALLAS", img: "Dallas.webp" },
        { city: "DENVER", img: "Denver.webp" },
        { city: "HOUSTON", img: "Houston.webp" },
        { city: "LOS ANGELES", img: "LosAngeles.webp" },
        { city: "MIAMI", img: "Miami.webp" },
        { city: "SAN FRANCISCO", img: "SanFrancisco.webp" },
        { city: "TORONTO", img: "Toronto.webp" },
        { city: "WASHINGTON DC", img: "WashingtonDC.webp" },
        { city: "AUSTIN", img: "Austin.webp" }
    ];

    return (
        <section className={styles.presenceSection}>
            <div className="container">
                <div className={styles.topHeader}>
                    <div className={styles.navArrows}>
                        <button className={styles.arrowBtn} onClick={() => swiperRef.current?.swiper.slidePrev()}>
                            <Image src="/images/mobile-app-studio/arrow.png" alt="prev" width={25} height={31} className={styles.prevIcon} />
                        </button>
                        <button className={styles.arrowBtn} onClick={() => swiperRef.current?.swiper.slideNext()}>
                            <Image src="/images/mobile-app-studio/arrow.png" alt="next" width={25} height={31} className={styles.nextIcon} />
                        </button>
                    </div>
                    <h2 className={styles.title}>
                        Our Global <span className={styles.highlight}>
                            Presence
                            <Image src="/images/mobile-app-studio/spring-vector.png" alt="line" width={250} height={15} className={styles.spring} />
                        </span>
                    </h2>
                </div>

                <div className={styles.sliderWrapper}>
                    <Swiper
                        ref={swiperRef}
                        modules={[Autoplay, Navigation]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {locations.map((loc, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.cardItem}>
                                    <div className={styles.locationCard}>
                                        <div className={styles.imageOverlay}>
                                            <Image src={`/mobile-app-studio/${loc.img}`} alt={loc.city} fill className={styles.cityImg} />
                                            <h3 className={styles.cityName}>{loc.city}</h3>
                                        </div>
                                        <div className={styles.cardContent}>
                                            <div className={styles.infoRow}>
                                                <Image src="/images/mobile-app-studio/map.png" alt="map" width={24} height={24} className={styles.icon} />
                                                <div className={styles.details}>
                                                    <span className={styles.label}>Location</span>
                                                    <p className={styles.text}>299 south main street salt lake city, utah 84111</p>
                                                </div>
                                            </div>
                                            <div className={styles.infoRow}>
                                                <Image src="/images/mobile-app-studio/phone.png" alt="phone" width={21} height={28} className={styles.icon} />
                                                <div className={styles.details}>
                                                    <span className={styles.label}>Contact Us</span>
                                                    <a href="tel:+18334422711" className={styles.text}>tel: +1 (833) 442 2711</a>
                                                </div>
                                            </div>
                                            <div className={styles.infoRow}>
                                                <Image src="/images/mobile-app-studio/email.png" alt="email" width={20} height={16} className={styles.icon} />
                                                <div className={styles.details}>
                                                    <span className={styles.label}>Email Us</span>
                                                    <a href="mailto:support@appsters.io" className={styles.text}>support@appsters.io</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default GlobalPresence;
