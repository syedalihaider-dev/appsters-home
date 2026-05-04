"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './CaseStudiesGridSection.module.css';

const caseStudiesData = [
  {
    id: 1,
    title: "Mic2Money",
    image: "/images/case-study/mic2money.webp",
    desc: "Mic2Money is a music contest app that empowers artists to showcase their talent, compete in live challenges, and earn rewards based on performance and audience engagement. Built to bridge opportunity and exposure, the platform turns every performance into a chance to be discovered, supported, and monetized.",
    stats: ["4.8k Job Completed", "12+ Industry Experience", "120+ Won Awards"]
  },
  {
    id: 2,
    title: "Global Reflex",
    image: "/images/case-study/global-reflex.webp",
    desc: "Global Reflex is a high-intensity mobile game designed to test and enhance reaction speed through precise, real-time challenges. Players compete on a global scale, tracking their reflex timing against others while continuously improving accuracy, focus, and decision-making speed.",
    stats: ["4.8k Job Completed", "12+ Industry Experience", "120+ Won Awards"]
  },
  {
    id: 3,
    title: "My Tank Virtual Live Well",
    image: "/images/case-study/my-tank-virtual.webp",
    desc: "My Tank Virtual Live Well is an immersive aquarium simulation app where users can catch and collect fish, then build and personalize their own virtual tank. Players can decorate their aquatic environment with creative items, arrange plants, and design unique underwater scenes. The experience also includes interactive care features like cleaning and maintaining the tank.",
    stats: ["4.8k Job Completed", "12+ Industry Experience", "120+ Won Awards"]
  },
  {
    id: 4,
    title: "Where2Map",
    image: "/images/case-study/where2map.webp",
    desc: "Where2Map is a smart navigation app designed to make travel simple, fast, and accurate. It helps users find the best routes, explore nearby places, and reach destinations with real-time directions and traffic updates. Built for everyday use, it combines precise mapping with intuitive guidance, ensuring a smooth navigation experience.",
    stats: ["4.8k Job Completed", "12+ Industry Experience", "120+ Won Awards"]
  },
  {
    id: 5,
    title: "Marina Fitness",
    image: "/images/case-study/marine-fitness.webp",
    desc: "Fitness is an all-in-one mobile app designed to help users build healthier routines through personalized workouts, progress tracking, and goal-driven plans. It offers guided exercises, performance insights, and flexible programs tailored to different fitness levels and lifestyles. Built to keep users motivated, the app combines smart tracking with intuitive design.",
    stats: ["4.8k Job Completed", "12+ Industry Experience", "120+ Won Awards"]
  },
  {
    id: 6,
    title: "Auto Parts",
    image: "/images/case-study/auto-parts.webp",
    desc: "Auto Parts is a comprehensive mobile app designed to help users quickly find, browse, and purchase genuine vehicle parts with ease. It connects car owners, mechanics, and workshops to a wide range of auto components, ensuring accurate compatibility and reliable sourcing. Built for speed and convenience, the app simplifies part discovery.",
    stats: ["4.8k Job Completed", "12+ Industry Experience", "120+ Won Awards"]
  }
];

export default function CaseStudiesGridSection() {
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
      <div className={styles.caseBadge}>Case</div>
      <div className={styles.imageWrapper}>
        <Image
          src={item.image}
          alt={item.title}
          width={726}
          height={529}
          className={styles.caseImage}
        />
      </div>
      <div className={styles.content}>
        <h3>{item.title}</h3>
        <p className={styles.desc}>{item.desc}</p>
        <div className={styles.stats}>
          {item.stats.map((stat, idx) => (
            <span key={idx} className={styles.statBadge}>{stat}</span>
          ))}
        </div>
        <div className={styles.ctaWrapper}>
          <Link href="#" className={`mybtn ${styles.customBtn}`}>
            <div className={`text ${styles.btnTextBlack}`}>
              <span>View Case Study</span>
              <span>View Case Study</span>
            </div>
            <div className={`icon ${styles.btnIconGreen}`}>
              <Image src="/images/arrow-icon.png" alt="Arrow Icon" width={16} height={14} style={{ objectFit: "contain" }} />
              <Image src="/images/arrow-icon.png" alt="Arrow Icon" width={16} height={14} style={{ objectFit: "contain" }} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <section className={styles.caseStudiesGridSection}>
      <div className="container position-relative">
        <p className={styles.transparent_heading}>CASE STUDIES</p>
        <div className={styles.header}>
          <h2>
            BEYOND THE CODE: <br />REAL STORIES, <span className={styles.highlight}> REAL RESULTS</span>
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
              576: { slidesPerView: 1.2 },
              768: { slidesPerView: 2.2 },
            }}
          >
            {caseStudiesData.map((item) => (
              <SwiperSlide key={item.id}>
                <CardContent item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className={styles.grid}>
            {caseStudiesData.map((item) => (
              <CardContent key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}