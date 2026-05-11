import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import styles from './Testimonials.module.css'

const Testimonials = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeVideo, setActiveVideo] = useState("");

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    const testimonials = [
        { id: 1, name: "Sophia ", role: "Entrepreneur", img: "/images/mobile-app-studio/testi-01.png", video: "https://vimeo.com/manage/videos/1184929104" },
        { id: 2, name: "Daniel", role: "Game Developer", img: "/images/mobile-app-studio/testi-02.png", video: "https://vimeo.com/manage/videos/1184930327" },
        { id: 3, name: "Mateo", role: "Founder Fintech Company", img: "/images/mobile-app-studio/testi-03.png", video: "https://vimeo.com/manage/videos/1184931603" },
        { id: 4, name: "Jason", role: "Fitness App", img: "/images/mobile-app-studio/testi-04.png", video: "https://vimeo.com/manage/videos/1184931598" },
        { id: 5, name: "Sophia ", role: "Entrepreneur", img: "/images/mobile-app-studio/testi-01.png", video: "https://vimeo.com/manage/videos/1184929104" },
        { id: 6, name: "Daniel", role: "Game Developer", img: "/images/mobile-app-studio/testi-02.png", video: "https://vimeo.com/manage/videos/1184930327" },
        { id: 7, name: "Mateo", role: "Founder Fintech Company", img: "/images/mobile-app-studio/testi-03.png", video: "https://vimeo.com/manage/videos/1184931603" },
        { id: 8, name: "Jason", role: "Fitness App", img: "/images/mobile-app-studio/testi-04.png", video: "https://vimeo.com/manage/videos/1184931598" },
    ];

    const openModal = (videoUrl) => {
        setActiveVideo(videoUrl);
        setIsModalOpen(true);
    };

    const getEmbedUrl = (url) => {
        if (!url) return "";
        if (url.includes("vimeo.com")) {
            // Extract ID from various Vimeo URL formats:
            // https://vimeo.com/1181610679
            // https://vimeo.com/manage/videos/1181613556
            // https://vimeo.com/1181610679?share=copy
            const match = url.match(/(?:\/video\/|\/manage\/videos\/|^https:\/\/vimeo\.com\/)(\d+)/);
            if (match && match[1]) {
                return `https://player.vimeo.com/video/${match[1]}?autoplay=1`;
            }
        }
        return url;
    };

    const isVimeo = activeVideo.includes("vimeo.com");

    return (
        <section id='testimonials' className={styles.testimonialsSection}>
            <div className="container">
                <div className={styles.headingBox}>
                    <h2 className={styles.title}>
                        See What Stakeholders, Entrepreneurs, & <br /> Businesses Are Saying <span className={styles.highlight}> About Us?
                            <Image src="/images/mobile-app-studio/spring-vector.png" alt="spring" width={300} height={20} className={styles.spring} />
                        </span>
                    </h2>
                    <p className={styles.subTitle}>
                        From startups to global enterprises, clients trust our developers to engineer
                        digital products that deliver progressive results.
                    </p>
                </div>

                <div className={styles.sliderWrapper}>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={15}
                        slidesPerView={1.2}
                        centeredSlides={true}
                        initialSlide={2}
                        speed={800}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={{
                            prevEl: `.${styles.prevArrow}`,
                            nextEl: `.${styles.nextArrow}`,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2.5 },
                            1024: { slidesPerView: 4 },
                            1280: { slidesPerView: 5 },
                        }}
                        className={styles.testiSwiper}
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide key={item.id}>
                                {({ isActive }) => (
                                    <div className={`${styles.testiCard} ${isActive ? styles.activeCard : ''}`}>
                                        <div className={styles.cardInner}>
                                            <Image src={item.img} alt={item.name} fill className={styles.cardImg} />
                                            <div className={styles.cardContent}>
                                                <h4>{item.name}</h4>
                                                <p>{item.role}</p>
                                            </div>
                                            {isActive && (
                                                <button className={styles.playBtn} onClick={() => openModal(item.video)}>
                                                    <Image src="/images/mobile-app-studio/play-btn.png" alt="play" width={80} height={80} />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className={styles.navRow}>
                    <div className={`${styles.navArrow} ${styles.prevArrow}`}>
                        <Image src="/images/mobile-app-studio/arrow.png" alt="prev" width={20} height={20} className={styles.arrowIcon} />
                    </div>
                    <a href="#contact" className={styles.ctaBtn}>GET STARTED</a>
                    <div className={`${styles.navArrow} ${styles.nextArrow}`}>
                        <Image src="/images/mobile-app-studio/arrow.png" alt="next" width={20} height={20} className={styles.arrowRight} />
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {isModalOpen && (
                <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setIsModalOpen(false)}>&times;</button>
                        {isVimeo ? (
                            <iframe
                                src={getEmbedUrl(activeVideo)}
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                allow="autoplay; fullscreen; picture-in-picture"
                                allowFullScreen
                                className={styles.modalVideo}
                            ></iframe>
                        ) : (
                            <video
                                width="100%"
                                height="100%"
                                src={activeVideo}
                                controls
                                autoPlay
                                className={styles.modalVideo}
                            ></video>
                        )}
                    </div>
                </div>
            )}
        </section>
    )
}

export default Testimonials
