"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from './DevelopmentStack.module.css';

export default function DevelopmentStack() {
  const techImages = [
    "/images/angular-icon.png",
    "/images/realm-icon.png",
    "/images/reactjs-icon.png",
    "/images/firebase-icon.png",
    "/images/flutter-icon.png",
    "/images/nodejs-icon.png",
    "/images/angular-icon.png",
    "/images/realm-icon.png",
    "/images/reactjs-icon.png",
    "/images/firebase-icon.png",
    "/images/flutter-icon.png",
    "/images/nodejs-icon.png",
  ];

  return (
    <section className={styles.developmentSection}>
      <div className="container">
        <div className={styles.sec_wrapper}>
          <div className={styles.secBefore}>
            <Image
              src="/images/center-cap.png"
              alt="Technology Icon"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <Swiper modules={[Autoplay]} spaceBetween={0} slidesPerView={10} loop={true} autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }} breakpoints={{
            320: { slidesPerView: 2 },
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 5 },
            1200: { slidesPerView: 6 },
          }}>
            {techImages.map((src, index) => (
              <SwiperSlide key={index}>
                <div className={styles.techIcon}>
                  <Image src={src} alt="Technology Icon" fill sizes="100vw" style={{ objectFit: "contain" }} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
