"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ActionButtons from "@/components/ui/ActionButtons";

import styles from './EndToEndAppDevSection.module.css';

const servicesData = [
  {
    id: 1,
    title: "Android App Development",
    icon: "/images/services/android-icon.webp",
    bg: "/images/services/android-app-development.webp",
    desc: "We engineer Android apps built for reach, reliability, and results. Every interface, API, and database call is optimized for speed and security."
  },
  {
    id: 2,
    title: "iOS App Development",
    icon: "/images/services/ios-icon.webp",
    bg: "/images/services/ios-app-development.webp",
    desc: "As a leading iOS app development company, we specialize in creating high-performance iPhone and iPad applications that reflect Apple's."
  },
  {
    id: 3,
    title: "React Native App Development",
    icon: "/images/services/react-native-icon.webp",
    bg: "/images/services/react-native-app-development.webp",
    desc: "Leverage the power of React Native to build cross-platform apps with native-like performance and a single codebase."
  },
  {
    id: 4,
    title: "Cross-Platform Apps",
    icon: "/images/services/cross-platform-icon.webp",
    bg: "/images/services/cross-platform-app-development.webp",
    desc: "We build versatile cross-platform applications that deliver a consistent and engaging user experience across all devices."
  },
  {
    id: 5,
    title: "Flutter Development",
    icon: "/images/services/flutter-icon.webp",
    bg: "/images/services/flutter-app-development.webp",
    desc: "Create visually stunning and highly responsive native applications for mobile, web, and desktop from a single codebase using Flutter."
  },
  {
    id: 6,
    title: "Mobile Game App Development",
    icon: "/images/services/mobile-game-icon.webp",
    bg: "/images/services/mobile-game-app-development.webp",
    desc: "Our game development experts craft immersive and interactive mobile games with stunning graphics and engaging gameplay."
  },
  {
    id: 7,
    title: "Ecommerce App Development",
    icon: "/images/services/ecommerce-icon.webp",
    bg: "/images/services/ecommerce-app-development.webp",
    desc: "Transform your retail business with custom e-commerce mobile apps designed for seamless shopping experiences and higher conversions."
  },
  {
    id: 8,
    title: "Custom Mobile App Development",
    icon: "/images/services/custom-mobile-icon.webp",
    bg: "/images/services/custom-mobile-app-development.webp",
    desc: "We provide tailored mobile app development services to meet your unique business requirements and deliver scalable solutions."
  },
  {
    id: 9,
    title: "AI App Development",
    icon: "/images/services/ai-icon.webp",
    bg: "/images/services/ai-app-development.webp",
    desc: "Integrate artificial intelligence into your mobile apps to offer smart features, predictive analytics, and personalized user experiences."
  }
];

export default function EndToEndAppDevSection({ style = {} }) {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const CardContent = ({ item }) => (
    <div className={styles.card}>
      <Image
        src={item.bg}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={styles.bgImage}
      />
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <Image src={item.icon} alt={`${item.title} icon`} width={44} height={44} style={{ objectFit: 'contain' }} />
        </div>
        <h5>{item.title}</h5>
        <div className={styles.hoverContent}>
          <p>{item.desc}</p>
          <ActionButtons />
        </div>
      </div>
    </div>
  );

  return (
    <section className={styles.endToEndSection} style={style}>
      <div className="container">
        <div className={styles.header}>
          <h2>
            Our Comprehensive Mobile App <br />
            Development <span className={styles.highlight}>Services in Houston</span>
          </h2>
          
        </div>

        {mounted && isMobile ? (
          <Swiper
            spaceBetween={20}
            slidesPerView={1.1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            className={styles.mobileSwiper}
            breakpoints={{
              576: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.2 },
            }}
          >
            {servicesData.map((item) => (
              <SwiperSlide key={item.id}>
                <CardContent item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className={styles.grid}>
            {servicesData.map((item) => (
              <CardContent key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
