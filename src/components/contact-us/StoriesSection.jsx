"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import styles from "./StoriesSection.module.css";

const slidesData = [
  { id: 1, image: "/images/industries/slide-img.png", alt: "Ollo Store Case Study 1" },
  { id: 2, image: "/images/industries/slide-img.png", alt: "Ollo Store Case Study 2" },
  { id: 3, image: "/images/industries/slide-img.png", alt: "Ollo Store Case Study 3" },
  { id: 4, image: "/images/industries/slide-img.png", alt: "Ollo Store Case Study 4" },
  { id: 5, image: "/images/industries/slide-img.png", alt: "Ollo Store Case Study 5" },
];

export default function StoriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.storiesSection}>
      <div className="container mb-4">
        {/* Header Row */}
        <div className="row align-items-center">
          <div className="col-12 col-md-8 col-lg-9 mb-3 mb-md-0">
            <h2 className={styles.mainHeading}>
              EXPERIENCE THE STORIES.{" "}
              <span className={styles.greenBadge}>SEE THE RESULTS</span>
              <br />
              &amp; TECHNOLOGY IN ACTION.
            </h2>
          </div>
          <div className="col-12 col-md-4 col-lg-3 d-flex justify-content-md-end justify-content-start">
            <div className={styles.controlsWrap}>
              {/* Prev Button */}
              <button
                className={`${styles.navBtn} storiesPrevBtn`}
                aria-label="Previous slide"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
              </button>

              {/* Counter */}
              <span className={styles.counterText}>
                {(activeIndex % 3) + 1}/3
              </span>

              {/* Next Button */}
              <button
                className={`${styles.navBtn} storiesNextBtn`}
                aria-label="Next slide"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Swiper Container */}
      <div className={styles.swiperContainer}>
        <Swiper
          modules={[Navigation, Autoplay]}
          centeredSlides={true}
          loop={true}
          initialSlide={0}
          spaceBetween={30}
          slidesPerView={1.28}
          navigation={{
            prevEl: `.storiesPrevBtn`,
            nextEl: `.storiesNextBtn`,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            320: { slidesPerView: 1.08, spaceBetween: 14 },
            768: { slidesPerView: 1.18, spaceBetween: 20 },
            1024: { slidesPerView: 1.28, spaceBetween: 30 },
          }}
          className={styles.storiesSwiper}
        >
          {slidesData.map((slide, index) => (
            <SwiperSlide key={index} className={styles.swiperSlideItem}>
              <div className={styles.slideCard}>
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  width={1200}
                  height={650}
                  className={styles.slideImage}
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
